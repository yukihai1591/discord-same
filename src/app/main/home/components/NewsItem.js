/* LIBRARY */
import React from "react";
import { FuseAnimate } from "@fuse";
import {
  Card, CardContent, Typography, Grid
} from "@material-ui/core";
import { Link } from "react-router-dom";
import LinesEllipsis from "react-lines-ellipsis";
import { makeStyles } from "@material-ui/styles";
import clsx from "clsx";
import moment from "moment";
/** COMMON */
import jwtServiceConfig from "app/services/jwtServiceConfig";

const useStyles = makeStyles((theme) => ({
  con_card: {
    borderRadius: 10,
    border: "solid 0.5px #dadce0",
    backgroundColor: "#ffffff",
  }
}));

function NewsItem(props) {
  const classes = useStyles();
  let { data, onPress } = props;

  return (
    <Grid className={"flex flex-col cursor-pointer"} item xs={12} sm={4} md={4} lg={4}
      onClick={() => onPress(data, data.title)}>
      <FuseAnimate animation={"transition.slideUpBigIn"}
        duration={500}
        className={"justify-center"}
      >
        <Card className={clsx(classes.con_card, "self-center")}>
          <img
            style={{ width: "100%", height: 230.98, objectFit: "cover", borderTopLeftRadius: 10, borderTopRightRadius: 10 }}
            src={data.media ? jwtServiceConfig.URL + data.media.thumbnail.sizes["post-custom"].path
              : "/assets/images/backgrounds/dark-material-bg.jpg"
            }
          />
          <CardContent style={{ height: 120 }}>
            <Link className={"text-title text-normal"} to={""}>
              <LinesEllipsis text={data.title}
                maxLine={'2'}
                ellipsis={'...'}
                trimRight
                basedOn={'letters'} />
            </Link>

            <div className={"flex flex-row items-center mt-16"}>
              <Typography variant={"caption"}>{moment(data.createdAt).format('DD/MM/YYYY')}</Typography>
            </div>
          </CardContent>
        </Card>
      </FuseAnimate>
    </Grid>
  )
}

export default NewsItem;