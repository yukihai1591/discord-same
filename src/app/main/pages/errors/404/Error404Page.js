import React from "react";
import { Typography } from "@material-ui/core";
import { FuseAnimate } from "@fuse";
import { Link } from "react-router-dom";
/** COMMON */
import Config from "app/config";
import Language from "app/utils/language";

function Error404Page() {
  return (
    <div className={"flex flex-col flex-1 items-center justify-center p-16"}>
      <div className={"max-w-512 text-center"}>
        <FuseAnimate animation={"transition.expandIn"} delay={300}>
          <Typography
            variant={"h1"}
            color={"inherit"}
            className={"font-medium mb-16"}
          >
            404
          </Typography>
        </FuseAnimate>

        <FuseAnimate animation={"transition.expandIn"} delay={300}>
          <Typography variant={"h5"} color={"textSecondary"} className={"mb-16"}>
            {Language[Config.language].sorry_but_we_could_not_find_the_page_you_are_looking_for}
          </Typography>
        </FuseAnimate>

        <Link className={"font-medium"} to={"/test"}>
          {Language[Config.language].go_back_to_test}
        </Link>
      </div>
    </div>
  );
}

export default Error404Page;
