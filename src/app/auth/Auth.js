/* LIBRARY */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import history from "@history";
import { useGoogleLogout } from "react-google-login";
import { FuseSplashScreen } from "@fuse";
/** COMMON */
import Error from "app/utils/error";
import Config from "app/config";
import Language from "app/utils/language";
import authService from "app/services/authService";
/** REDUX */
import * as userActions from "app/auth/store/actions";
import * as Actions from "app/store/actions";


function Auth(props) {
  const dispatch = useDispatch();

  const userState = useSelector(({ auth }) => auth);

  const [isLoading, setLoading] = useState(true);
  const [isLoadUser, setLoadUser] = useState(true);

  const { signOut, loaded } = useGoogleLogout({
    clientId: Config.googleClientId,
  });

  /** FUNCTIONS */
  const jwtCheck = () => {
    authService.on("onAutoLogin", () => {
      /**
       * Sign in and retrieve user data from Api
       */
      authService
        .signInWithToken()
        .then((user) => {
          console.log(" === onAutoLogin === ");
          dispatch(userActions.setUserData(user))
        })
        .catch((error) => {
          let desError = "";
          if (error && error.name && error.name === Error.TOKEN_EXPIRED) {
            desError = Language[Config.language].des_error_token_expired;
          } else if (error && error.name && error.name === Error.TOKEN_USER_NOT_FOUND) {
            desError = Language[Config.language].des_error_token_expired;
          } else {
            desError = Language[Config.language].des_error_token_expired
          }
          if (desError !== "") {
            dispatch(Actions.showMessage({
              message: desError,
              variant: "warning",
            }));
            signOut();
            dispatch(userActions.logout());
            dispatch(userActions.logoutUser())
            setLoading(false);
          }
        });
    });

    authService.on("onAutoLogout", (message) => {
      console.log(" === onAutoLogout === ");
      if (window.FB) {
        window.FB.getLoginStatus((response) => {
          if (response.status === "connected" || response.status === "not_authorized") {
            window.FB.logout((resLogout) => {
              console.log("resLogout", resLogout);
            })
          }
        });
      }
      signOut();
      dispatch(userActions.logout());
      dispatch(userActions.logoutUser())

      if (history.length > 0) {
        history.push({
          pathname: history.location.pathname,
          search: history.location.search,
          state: history.location.state
        });
      } else {
        history.replace({
          pathname: "/home"
        });
      }

      setLoadUser(false);
    });
    authService.init();
  };


  /** LIFE CYCLE */
  useEffect(() => {
    jwtCheck();
    // dispatch(Actions.searchClass());
    // dispatch(Actions.searchCompetition());
    // dispatch(Actions.getSetting());
  }, []);

  useEffect(() => {
    if (isLoadUser) {
      if (userState.user.data) {
        dispatch(userActions.loginSuccess());
        setLoadUser(false);
        if (history.length > 0) {
          return history.push({
            pathname: history.location.pathname,
            search: history.location.search,
            state: history.location.state
          });
        } else {
          return history.replace({
            pathname: "/home"
          });
        }
      }
    }
  }, [isLoadUser, userState.user.data]);

  useEffect(() => {
    if (isLoading) {
    }
  }, [isLoading])

  /** RENDER */
  if (isLoading) return <FuseSplashScreen />
  return <React.Fragment>{props.children}</React.Fragment>
}

export default Auth;