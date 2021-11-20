import axios from "axios";
import jwtDecode from "jwt-decode";
import FuseUtils from "@fuse/FuseUtils";
/** COMMON */
import jwtServiceConfig from "../jwtServiceConfig";
import Routes from "../routes";
import Config from "app/config";
import Language from "app/utils/language";

class authService extends FuseUtils.EventEmitter {
  /** FUNCTIONS */
  init() {
    // this.setInterceptors();
    this.handleAuthentication();
  }

  setInterceptors = () => {
    axios.interceptors.response.use(
      (response) => {
        return response;
      },
      (err) => {
        return new Promise((resolve, reject) => {
          if (
            err.response &&
            err.response.status === 401 &&
            err.config &&
            !err.config.__isRetryRequest
          ) {
            // if you ever get an unauthorized response, logout the user
            this.emit("onAutoLogout", "");
            this.setSession(null);
          }
          throw err;
        });
      }
    );
  };

  handleAuthentication = () => {
    let access_token = this.getAccessToken();

    if (!access_token) {
      this.setSession(null);
      this.emit(
        "onAutoLogout",
        Language[Config.language].des_error_token_expired
      );
      return;
    }

    if (this.isAuthTokenValid(access_token)) {
      this.setSession(access_token);
      this.emit("onAutoLogin", true);
    } else {
      this.setSession(null);
      this.emit(
        "onAutoLogout",
        Language[Config.language].des_error_token_expired
      );
    }
  };

  setSession = (access_token) => {
    if (access_token) {
      localStorage.setItem("jwt_access_token", access_token);
      axios.defaults.headers.common["Authorization"] = "Bearer " + access_token;
    } else {
      localStorage.removeItem("jwt_access_token");
      delete axios.defaults.headers.common["Authorization"];
    }
  };

  isAuthTokenValid = (access_token) => {
    if (!access_token) {
      return false;
    }
    const decoded = jwtDecode(access_token);
    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
      console.warn("access token expired");
      return false;
    } else {
      return true;
    }
  };

  getAccessToken = () => {
    return window.localStorage.getItem("jwt_access_token");
  };

  /** All API */
  signInWithEmailAndPassword = (params) => {
    let newParams = params.password ? {
      emailAddress: params.email,
      password: params.password
    } : {
        emailAddress: params.email,
        tokenSocial: params.access_token
      }
    return new Promise((resolve, reject) => {
      axios
        .post(
          Routes.AUTH.LOGIN,
          newParams,
          Object.assign({}, jwtServiceConfig)
        )
        .then((response) => {
          console.log("SIGN IN EMAIL / PASSWORD => ", response);
          if (response.status === 200 && response.data.user) {
            this.setSession(response.data.access_token);
            resolve(response.data.user);
          }
        })
        .catch((error) => {
          console.log("ERR LOGIN USER => ", error.response);
          if (params.access_token) {
            reject({ code: 402 });
          } else {
            reject(error.response ? error.response.data : null);
          }
        });
    });
  };

  signInWithToken = () => {
    return new Promise((resolve, reject) => {
      axios
        .post(
          Routes.AUTH.LOGIN_VIA_ACCESSTOKEN,
          {
            access_token: this.getAccessToken(),
          },
          Object.assign({}, jwtServiceConfig)
        )
        .then((response) => {
          console.log("SIGN IN JWT => ", response);
          if (response.status === 200 && response.data.user) {
            this.setSession(response.data.access_token);
            resolve(response.data.user);
          }
        })
        .catch((error) => {
          console.log("error jwt", error)
          reject(error.response ? error.response.data : null);
        });
    });
  };

  sendForgotPassword = (params) => {
    return new Promise((resolve, reject) => {
      axios
        .post(
          Routes.AUTH.FORGOT_PASSWORD,
          {
            emailAddress: params
          },
          Object.assign({}, jwtServiceConfig)
        )
        .then((response) => {
          console.log("SEND FORGOT PASSWORD => ", response);
          if (response.status === 200 && response.data) {
            resolve(response.data);
          }
        })
        .catch((error) => {
          reject(error.response ? error.response.data : null);
        });
    });
  };

  register = (params) => {
    return new Promise((resolve, reject) => {
      axios
        .post(
          Routes.AUTH.REGISTER,
          params,
          Object.assign({}, jwtServiceConfig)
        )
        .then((response) => {
          console.log("REGISTER USER => ", response);
          if (response.data.user) {
            // this.setSession(response.data.access_token);
            resolve(response.data.user);
          }
        })
        .catch((error) => {
          console.log("ERR REGISTER USER => ", error.response);
          reject(error.response ? error.response.data : null);
        });
    });
  };

  updateUserData = (user) => {
    return axios.post(
      "/api/auth/user/update",
      Object.assign({}, jwtServiceConfig, { data: user })
    );
  };

  logout = () => {
    this.setSession(null);
  };
}

const instance = new authService();

export default instance;
