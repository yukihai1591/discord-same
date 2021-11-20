/* LIBRARY */
import React from "react";
import { Chip } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import clsx from "clsx";
/** COMMON */
import Colors from "app/utils/colors";

const useStyles = makeStyles((theme) => ({
  con_chip: {
    height: 48,
    fontSize: 16,
    borderRadius: 24,
    paddingLeft: 16,
    paddingRight: 16
  }
}));

function ClassItem(props) {
  const classes = useStyles();
  let { data, type, currentClass, onPress } = props;

  let _styles = {};
  if (type === "kid") {
    _styles = {
      borderColor: Colors.school.fourHorsemen.kid,
      color: currentClass == data.codeDefault ? Colors.white : Colors.school.fourHorsemen.kid,
      backgroundColor: currentClass == data.codeDefault ? Colors.school.fourHorsemen.kid : Colors.white,
      marginBottom: 16,
    };
  } else if (type === "primary") {
    _styles = {
      borderColor: Colors.school.fourHorsemen.primary,
      color: currentClass == data.codeDefault ? Colors.white : Colors.school.fourHorsemen.primary,
      backgroundColor: currentClass == data.codeDefault ? Colors.school.fourHorsemen.primary : Colors.white,
      marginBottom: 10
    };
  } else if (type === "secondary") {
    _styles = {
      borderColor: Colors.school.fourHorsemen.secondary,
      color: currentClass == data.codeDefault ? Colors.white : Colors.school.fourHorsemen.secondary,
      backgroundColor: currentClass == data.codeDefault ? Colors.school.fourHorsemen.secondary : Colors.white,
      marginBottom: 10
    };
  } else if (type === "high") {
    _styles = {
      borderColor: Colors.school.fourHorsemen.high,
      color: currentClass == data.codeDefault ? Colors.white : Colors.school.fourHorsemen.high,
      backgroundColor: currentClass == data.codeDefault ? Colors.school.fourHorsemen.high : Colors.white,
      marginBottom: 10
    };
  }

  return (
    <Chip
      className={clsx(classes.con_chip, "ml-12 mr-12 mb-1")}
      style={_styles}
      size={"medium"}
      clickable={true}
      variant={"outlined"}
      label={data.name}
      onClick={() => onPress(data)}
    />
  )
}

export default ClassItem;