import axios from "axios";
import FuseUtils from "@fuse/FuseUtils";
/** COMMON */
import jwtServiceConfig from "../jwtServiceConfig";
import Routes from "../routes";

class homeService extends FuseUtils.EventEmitter {
    /** All API */
    searchSubject = (params) => {
        return new Promise((resolve, reject) => {
            axios
                .get(
                    Routes.HOME.GET_SUBJECT + `?class=${params.classCode}`,
                    Object.assign({}, jwtServiceConfig)
                )
                .then((response) => {
                    console.log("SEARCH SUBEJCT HOME => ", response);
                    if (response.status === 200 && response.data) {
                        resolve(response.data);
                    }
                })
                .catch((error) => {
                    reject(error.response || null);
                });
        });
    };
}

const instance = new homeService();

export default instance;
