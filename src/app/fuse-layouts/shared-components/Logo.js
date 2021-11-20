/**
 ** Name: Logo.js
 ** Author: haivahung
 ** CreateAt: 20/11/2021
 ** Description: Description of Logo.js
 **/
/* LIBRARY */
import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        "& .logo-icon": {
            height: 40,
            transition: theme.transitions.create(["width", "height"], {
                duration: theme.transitions.duration.shortest,
                easing: theme.transitions.easing.easeInOut,
            }),
            marginLeft: 20,
        },
        "& .react-badge, & .logo-text": {
            transition: theme.transitions.create("opacity", {
                duration: theme.transitions.duration.shortest,
                easing: theme.transitions.easing.easeInOut,
            }),
        },
    },
    reactBadge: {
        backgroundColor: "rgba(0,0,0,0.6)",
        color: "#61DAFB",
    },
}));

function Logo() {
    const classes = useStyles();

    return (
        <div className={clsx(classes.root, "flex items-center")}>
            <Link to={"/home"} >
                <img
                    className={"logo-icon"}
                    src={"assets/images/logos/fourhorsemen.png"}
                    alt={"logo"}
                />
            </Link>
        </div>
    );
}

export default Logo;
