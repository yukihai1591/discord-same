/**
 ** Name: UserMenu.js
 ** Author: haivahung
 ** CreateAt: 20/11/2021
 ** Description: Description of UserMenu.js
 **/
/* LIBRARY */
import React, { useEffect, useState } from "react";
import {
  Avatar,
  Button,
  Icon,
  ListItemIcon,
  ListItemText,
  Popover,
  MenuItem,
  Typography,
} from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
/** COMMON */
import Config from "app/config";
import Language from "app/utils/language";
import Common from "app/utils/common";
import jwtServiceConfig from "app/services/jwtServiceConfig";
import { useGoogleLogout } from 'react-google-login'
/** REDUX */
import * as authActions from "app/auth/store/actions";

function UserMenu(props) {
  const dispatch = useDispatch();
  // const userState = useSelector(({ auth }) => auth.user);
  const userState = useSelector(({ user }) => user.user_management);
  const [userMenu, setUserMenu] = useState(null);
  const [reRender, setReRender] = useState(1);
  const userMenuClick = (event) => {
    setUserMenu(event.currentTarget);
  };

  const { signOut, loaded } = useGoogleLogout({
    clientId: Config.googleClientId,
  });

  const userMenuClose = () => {
    setUserMenu(null);
  };

  const logoutSocial = () => {
    window.FB.getLoginStatus((response) => {
      if (response.status === "connected" || response.status === "not_authorized") {
        window.FB.logout((resLogout) => {
          console.log("resLogout", resLogout)
        })
      }
    });
    signOut();
  }

  /** LIFE CYCLE */
  useEffect(() => {
    if (userState.user) {
      setReRender(Math.random());
    }
  }, [
    userState.user
  ]);

  /** RENDER */
  return (
    <React.Fragment>
      <Button className={"h-64 ml-16"} onClick={userMenuClick}>
        <Avatar
          className=""
          src={(userState.user && userState.user.avatar) ?
            jwtServiceConfig.URL + userState.user.avatar.thumbnail.sizes.thumbnail.path :
            "assets/images/avatars/profile.jpg"
          }
        />

        {userState.user && userState.user.role &&
          <div className={"hidden md:flex flex-col ml-12 items-start"}>
            <Typography
              component={"span"}
              className={"normal-case font-medium flex"}
              style={{ color: "black" }}
            >
              {userState.user.firstName + " " + userState.user.lastName}
            </Typography>
            <Typography className={"text-11 capitalize"} style={{ color: "black" }}>
              {userState.user.role.code === Common.USER_TYPE.ADMIN.key ?
                Common.USER_TYPE.ADMIN.name :
                userState.user.role.code === Common.USER_TYPE.TEACHER.key ?
                  Common.USER_TYPE.TEACHER.name :
                  Common.USER_TYPE.STUDENT.name}
            </Typography>
          </div>
        }

        <Icon className={"text-16 ml-12 hidden sm:flex"} variant={"action"} style={{ color: "black" }}>
          keyboard_arrow_down
        </Icon>
      </Button>

      <Popover
        open={Boolean(userMenu)}
        anchorEl={userMenu}
        onClose={userMenuClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        classes={{
          paper: "py-8",
        }}
      >

        <React.Fragment>
          <MenuItem component={Link} to={"/profile"} onClick={userMenuClose}>
            <ListItemIcon className={"min-w-40"}>
              <Icon>account_circle</Icon>
            </ListItemIcon>
            <ListItemText
              className={"pl-0"}
              primary={Language[Config.language].my_profile}
            />
          </MenuItem>
          <MenuItem
            onClick={() => {
              dispatch(authActions.logoutUser());
              logoutSocial();
              userMenuClose();
            }}
          >
            <ListItemIcon className={"min-w-40"}>
              <Icon>exit_to_app</Icon>
            </ListItemIcon>
            <ListItemText
              className={"pl-0"}
              primary={Language[Config.language].logout}
            />
          </MenuItem>
        </React.Fragment>
      </Popover>
    </React.Fragment>
  );
}

export default UserMenu;
