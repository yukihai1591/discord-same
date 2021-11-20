import React from "react";
import PropTypes from "prop-types";
import {
    Typography, Button, Icon, IconButton
} from "@material-ui/core";
/** COMMON */
import Config from "app/config";
import Language from "app/utils/language";

function Header({
}) {
    return (
        <div style={styles} className={"flex justify-between items-center w-full pt-24 pb-24 min-w-200"}>
            <div className={"flex flex-row items-center min-w-100 items-center"}>
                {onClickLeft && (
                    <IconButton
                        className={"mr-5"}
                        color={"primary"}
                        aria-label={Language[Config.language].close}
                        onClick={onClickLeft}
                    >
                        <Icon>arrow_back</Icon>
                    </IconButton>
                )}

                <Typography variant={"h5"} className={"text-center font-h5"}>
                    {titleLeft}
                </Typography>
                {isAdd &&
                    <Button className={"ml-5"} onClick={btnAdd}>
                        <Typography style={{ color: "#1662B1", fontSize: 16 }} className={"normal-case font-medium"}>
                            {Language[Config.language].add}
                        </Typography>
                    </Button>
                }
            </div>

            <div className={"flex flex-row items-center"}>
                {onClick3 && (
                    <Button
                        variant={"text"}
                        color={"primary"}
                        className={isSelect ? "btn-base shadow-2" : ""}
                        aria-label={button3Title}
                        onClick={onClick3}
                        disabled={isLoading}
                    >
                        <Icon color={"inherit"} className={"text-20"}>
                            {icon3Name}
                        </Icon>
                        <Typography variant={"button"} className={"ml-3"}>
                            {button3Title}
                        </Typography>
                    </Button>
                )}

                {onClick3 && onClick2 && <div className={"pr-5"} />}

                {onClick2 && (
                    <Button
                        variant={"text"}
                        color={"primary"}
                        className={selectedStatus && selectedStatus.private ? "btn-base shadow-2" : ""}
                        aria-label={button2Title}
                        onClick={onClick2}
                        disabled={isLoading}
                    >
                        <Icon color={"inherit"} className={"text-20"}>
                            {icon2Name}
                        </Icon>
                        <Typography variant={"button"} className={"ml-3"}>
                            {button2Title}
                        </Typography>
                    </Button>
                )}

                {onClick2 && onClick1 && <div className={"pr-5"} />}

                {onClick1 && (
                    <Button
                        color={"primary"}
                        className={"btn-base shadow-2"}
                        aria-label={button1Title}
                        onClick={onClick1}
                        disabled={isLoading}
                    >
                        {icon1Name &&
                            <Icon color={"inherit"} className={"text-20"}>
                                {icon1Name}
                            </Icon>
                        }
                        <Typography style={rightButtonStyle} variant={"button"} className={icon1Name ? "ml-3" : ""}>
                            {button1Title}
                        </Typography>
                    </Button>
                )}
            </div>
        </div>
    );
}

Header.propTypes = {
    isLoading: PropTypes.bool,
    isSelect: PropTypes.bool,
    selectedStatus: PropTypes.any,

    onClickLeft: PropTypes.func,
    titleLeft: PropTypes.string,

    button1Title: PropTypes.string,
    icon1Name: PropTypes.string,
    onClick1: PropTypes.func,

    button2Title: PropTypes.string,
    icon2Name: PropTypes.string,
    onClick2: PropTypes.func,

    button3Title: PropTypes.string,
    icon3Name: PropTypes.string,
    onClick3: PropTypes.func,
};

export default Header;