import React, { useEffect, useState } from 'react';
import { Collapse, Icon, IconButton, ListItem, ListItemText } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { FuseUtils } from '@fuse';
import { withRouter } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import FuseNavBadge from './../FuseNavBadge';
import NavLinkAdapter from '@fuse/components/NavLinkAdapter/NavLinkAdapter';
import * as Actions from 'app/store/actions';

const useStyles = makeStyles(theme => ({
    root: {
        padding: 0,
        '&.open': {
            backgroundColor: 'rgba(0,0,0,.08)'
        }
    },
    item: {
        height: 40,
        width: 'calc(100% - 16px)',
        borderRadius: '0 20px 20px 0',
        paddingRight: 12,
        color: "black",
        '&.square': {
            width: '100%',
            borderRadius: '0'
        }
    }
}));

function needsToBeOpened(location, item) {
    return location && isUrlInChildren(item, location.pathname)
}

function isUrlInChildren(parent, url) {
    if (!parent.children) {
        return false;
    }

    for (let i = 0; i < parent.children.length; i++) {
        if (parent.children[i].children) {
            if (isUrlInChildren(parent.children[i], url)) {
                return true;
            }
        }

        if (parent.children[i].url === url || url.includes(parent.children[i].url)) {
            return true;
        }
    }

    return false;
}

function FuseNavVerticalCollapse(props) {
    const userRole = useSelector(({ auth }) => auth.user.role);

    const dispatch = useDispatch();

    const classes = useStyles(props);
    const [open, setOpen] = useState(() => needsToBeOpened(props.location, props.item));
    const [dataClass, setDataClass] = useState([]);
    const [isLoading, setLoading] = useState(true);

    const { item, nestedLevel, active } = props;
    let paddingValue = 40 + (nestedLevel * 16);
    const listItemPadding = nestedLevel > 0 ? 'pl-' + (paddingValue > 80 ? 80 : paddingValue) : 'pl-24';

    useEffect(() => {
        if (needsToBeOpened(props.location, props.item)) {
            setOpen(true);
        }
    }, [props.location, props.item]);

    useEffect(() => {
        if (isLoading) {
        }
    }, [isLoading]);

    function handleClick() {
        setOpen(!open);
    }

    if (!FuseUtils.hasPermission(item.auth, userRole)) {
        return null;
    }
    const onPressSubMenu = (data, item) => {
        if (item.id == "practice") {
            props.history.push({
                pathname: `/practice/${data.codeDefault}`,
                state: { data }
            });

            // dispatch(Actions.resetPracticeState());
        } else if (item.id == "test") {
            props.history.push({
                pathname: `/test/${data.codeDefault}`,
                state: { data }
            })
            // dispatch(Actions.resetSearchTestState());
        }
        dispatch(Actions.navbarCloseFolded())
    }
    /** RENDER */
    return (
        <ul className={clsx(classes.root, open && "open")}>

            <ListItem
                button
                className={clsx(classes.item, listItemPadding, 'list-item', active)}
                onClick={handleClick}
            >
                {item.icon && (
                    <Icon className="text-16 flex-shrink-0 mr-16" style={{ color: "rgba(0, 0, 0, 0.54)" }}>{item.icon}</Icon>
                )}
                <ListItemText className="list-item-text" primary={item.title} classes={{ primary: 'text-14' }} />
                {item.badge && (
                    <FuseNavBadge className="mr-4" badge={item.badge} />
                )}
                <IconButton disableRipple className="w-16 h-16 p-0">
                    <Icon className="text-16 arrow-icon" style={{ color: "rgba(0, 0, 0, 0.54)" }}>
                        {open ? 'expand_less' : 'expand_more'}
                    </Icon>
                </IconButton>
            </ListItem>

            {dataClass.length > 0 && (
                <Collapse in={open} className="collapse-children">
                    {
                        dataClass.map((subItem) => (

                            <React.Fragment key={subItem.id}>
                                <ListItem
                                    button
                                    component={NavLinkAdapter}
                                    // to={subItem.url}
                                    activeClassName="active"
                                    className={clsx(classes.item, listItemPadding, 'list-item', active)}
                                    onClick={ev => onPressSubMenu(subItem, item)}
                                >
                                    <ListItemText className="list-item-text pl-32" primary={subItem.name} classes={{ primary: 'text-14' }} />
                                </ListItem>

                            </React.Fragment>
                        ))
                    }
                </Collapse>
            )}
        </ul>
    );
}

FuseNavVerticalCollapse.propTypes = {
    item: PropTypes.shape(
        {
            id: PropTypes.string.isRequired,
            title: PropTypes.string,
            icon: PropTypes.string,
            children: PropTypes.array
        })
};
FuseNavVerticalCollapse.defaultProps = {};

const NavVerticalCollapse = withRouter(React.memo(FuseNavVerticalCollapse));

export default NavVerticalCollapse;
