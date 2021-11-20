/* LIBRARY */
import axios from "axios";
import FuseUtils from "@fuse/FuseUtils";
/** COMMON */
import jwtServiceConfig from "../jwtServiceConfig";
import Routes from "../routes";
import Config from "app/config";

class userService extends FuseUtils.EventEmitter {
  /** All API */
  search = (params) => {
    return new Promise((resolve, reject) => {
      axios
        .get(
          Routes.USER.SEARCH +
          `?length=${Config.rowPerPage}&start=${params.page}&name=${params.name}` +
          `&email=${params.email}&username=${params.username}&gender=${params.gender}` +
          `&status=${params.status}&type=${params.type}`,
          Object.assign({}, jwtServiceConfig)
        )
        .then((response) => {
          console.log("SEARCH USER => ", response);
          if (response.status === 200 && response.data) {
            resolve(response.data);
          }
        })
        .catch((error) => {
          reject(error.response ? error.response.data : null);
        });
    });
  };

  changePassword = (params) => {
    return new Promise((resolve, reject) => {
      axios
        .post(
          Routes.USER.CHANGE_PASSWORD + `?id=${params.id}`,
          params,
          Object.assign({}, jwtServiceConfig)
        )
        .then((response) => {
          console.log("CHANGE PASSWORD => ", response);
          if (response.status === 200 && response.data) {
            resolve(response.data);
          }
        })
        .catch((error) => {
          reject(error.response ? error.response.data : null);
        });
    });
  };

  getById = (params) => {
    return new Promise((resolve, reject) => {
      axios
        .get(
          Routes.USER.GET + `?id=${params}`,
          Object.assign({}, jwtServiceConfig)
        )
        .then((response) => {
          console.log("GET USER => ", response);
          if (response.status === 200 && response.data) {
            resolve(response.data);
          }
        })
        .catch((error) => {
          reject(error.response ? error.response.data : null);
        });
    });
  };

  edit = (params, id) => {
    return new Promise((resolve, reject) => {
      axios
        .patch(
          Routes.USER.EDIT + `?id=${id}`,
          params,
          Object.assign({}, jwtServiceConfig)
        )
        .then((response) => {
          console.log("EDIT USER => ", response);
          if (response.status === 200 && response.data) {
            resolve(response.data);
          }
        })
        .catch((error) => {
          reject(error.response ? error.response.data : null);
        });
    });
  };

  add = (params) => {
    return new Promise((resolve, reject) => {
      axios
        .post(
          Routes.USER.ADD,
          params,
          Object.assign({}, jwtServiceConfig)
        )
        .then((response) => {
          console.log("ADD USER => ", response);
          if (response.status === 200 && response.data) {
            resolve(response.data);
          }
        })
        .catch((error) => {
          reject(error.response ? error.response.data : null);
        });
    });
  };

  trash = (params) => {
    return new Promise((resolve, reject) => {
      axios
        .delete(
          Routes.USER.TRASH + `?ids=${params.ids}`,
          Object.assign({}, jwtServiceConfig)
        )
        .then((response) => {
          console.log("TRASH USER => ", response);
          if (response.status === 200 && response.data) {
            if (response.data.code === "TRASH_USER_SUCCESS") {
              resolve();
            }
          }
        })
        .catch((error) => {
          reject(error.response ? error.response.data : null);
        });
    });
  };

  uploadAvatar = (id, params) => {
    return new Promise((resolve, reject) => {
      axios
        .post(
          Routes.USER.CHANGE_AVATAR + `?id=${id}`,
          params,
          Object.assign({}, jwtServiceConfig, {
            headers: {
              Accept: "application/json",
              "Content-Type": "multipart/form-data",
            },
          })
        )
        .then((response) => {
          console.log("UPLOAD AVATAR => ", response);
          if (response.status === 200 && response.data) {
            resolve(response.data);
          }
        })
        .catch((error) => {
          reject(error.response ? error.response.data : null);
        });
    });
  };

  importUser = (params) => {
    return new Promise((resolve, reject) => {
      axios
        .post(
          Routes.USER.IMPORT,
          params,
          Object.assign({}, jwtServiceConfig, {
            headers: {
              Accept: "application/json",
              "Content-Type": "multipart/form-data",
            },
          })
        )
        .then((response) => {
          console.log("IMPORT USER => ", response);
          if (response.status === 200 && response.data) {
            resolve(response.data);
          }
        })
        .catch((error) => {
          reject(error.response ? error.response.data : null);
        });
    });
  };

  exportUser = () => {
    return new Promise((resolve, reject) => {
      axios
        .get(
          Routes.USER.EXPORT,
          Object.assign({}, jwtServiceConfig)
        )
        .then((response) => {
          console.log("EXPORT USER => ", response);
          if (response.status === 200 && response.data) {
            resolve(response.data);
          }
        })
        .catch((error) => {
          reject(error.response ? error.response.data : null);
        });
    });
  };

  changeStatusUser = (params) => {
    return new Promise((resolve, reject) => {
      axios
        .patch(
          Routes.USER.CHANGE_STATUS,
          params,
          Object.assign({}, jwtServiceConfig)
        )
        .then((response) => {
          console.log("CHANGE STATUS USER => ", response);
          if (response.status === 200 && response.data) {
            if (response.data.code === "EDIT_STATUS_SUCCESS") {
              resolve();
            } else {
              reject(response.data || null);
            }
          }
        })
        .catch((error) => {
          reject(error.response ? error.response.data : null);
        });
    });
  };

  filterAddress = (params) => {
    return new Promise((resolve, reject) => {
      axios
        .get(
          Routes.USER.GET_ADDRESS + `?codeProvince=${params.province ? params.province : ""}&codeDistrict=${params.district ? params.district : ""}&codeWard=${params.ward ? params.ward : ""}`,
          Object.assign({}, jwtServiceConfig)
        )
        .then((response) => {
          console.log("GET ADDRESS USER => ", response);
          if (response.status === 200) {
            resolve(response.data);
          } else {
            reject(response.data || null);
          }
        })
        .catch((error) => {
          reject(error.response.data || null);
        });
    });
  }
}

const instance = new userService();

export default instance;
