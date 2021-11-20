/* COMMON */
import Config from "../config";
import Colors from "./colors";
import Language from "./language";

const Common = {
  /** For User */
  USER_STATUS: {
    ACTIVE: {
      key: 1,
      name: Language[Config.language].active,
      color: "#1662B1",
    },
    DRAFT: {
      key: 0,
      name: Language[Config.language].draft,
      color: "#FFC107",
    },
  },
  USER_TYPE: {
    ADMIN: {
      key: 1,
      name: Language[Config.language].admin,
    },
    USER: {
      key: 2,
      name: Language[Config.language].user,
    },
  },
  USER_GENDER: {
    MALE: {
      key: 1,
      name: Language[Config.language].male,
    },
    FEMALE: {
      key: 2,
      name: Language[Config.language].female,
    },
    OTHER: {
      key: 3,
      name: Language[Config.language].other,
    },
  },
  /** For Status */
  STATUS: {
    SUCCESS: {
      key: 1,
      name: "success",
      color: "#43A047",
    },
    ERROR: {
      key: 2,
      name: "error",
      color: Colors.fourHorsemen.kid,
    },
    WARNING: {
      key: 3,
      name: "warning",
      color: "#FFC107",
    },
    INFO: {
      key: 4,
      name: "info",
      color: "#1662B1",
    },
    DEFAULT: {
      key: 5,
      name: "default",
      color: "#bebebe",
    }
  }
}

export default Common;
