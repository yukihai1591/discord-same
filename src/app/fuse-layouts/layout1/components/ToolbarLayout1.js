/** LIBRARY */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
	AppBar, Hidden, Toolbar, Grid, IconButton, Typography, Button, Divider,
	TextField, InputAdornment
} from '@material-ui/core';
import { ArrowDropDown, ArrowDropUp, Search } from '@material-ui/icons';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles, ThemeProvider } from '@material-ui/styles';
import { Link } from 'react-router-dom'
/** COMPONENTS */
import UserMenu from 'app/fuse-layouts/shared-components/UserMenu';
// import SubMenuPractice from 'app/main/partials/menu_practice/MenuPractice';
// import SubMenuTest from 'app/main/partials/menu_test/MenuTest';
/** COMMON */
import Language from "app/utils/language";
import Config from "app/config";
import Colors from 'app/utils/colors';
import Common from "app/utils/common";
/** REDUX */
import * as Actions from 'app/store/actions';

const useStyles = makeStyles(theme => ({
	separator: {
		width: 1,
		height: 64,
		backgroundColor: theme.palette.divider
	},
	divider: {
		position: "absolute",
		bottom: 1,
		width: 45,
		backgroundColor: Colors.primary,
		height: 2,
		border: '1px solid ' + Colors.primary,
		borderRadius: 10,
	}
}));

function ToolbarLayout1(props) {
	const classes = useStyles(props);
	const dispatch = useDispatch();

	const config = useSelector(({ fuse }) => fuse.settings.current.layout.config);
	const toolbarTheme = useSelector(({ fuse }) => fuse.settings.toolbarTheme);
	const navigation = useSelector(({ fuse }) => fuse.navigation);
	console.log('navigation', navigation)
	const navbar = useSelector(({ fuse }) => fuse.navbar);
	const user = useSelector(({ auth }) => auth.user);

	const folded = config.navbar.folded;
	const foldedAndClosed = folded && !navbar.foldedOpen;

	// let route = props.location.pathname.split("/")[1];
	let routeSplit1 = props.location.pathname;
	let route;
	if (routeSplit1) {
		let routeSplit2 = routeSplit1.split("/");
		route = routeSplit2[1];
	}

	/** PRACTICE */
	const [isSubMenu, setSubMenu] = useState(false);
	const [isSubMenuTest, setSubMenuTest] = useState(false);
	const [currentItem, setCurrentItem] = useState({});
	const [search, setValueSearch] = useState("");

	const onEnableSubMenuPractice = (item) => {
		if (isSubMenu === false) {
			setSubMenuTest(false);
			setSubMenu(true);
			setCurrentItem(item);
		}
	}

	const onEnableSubMenuTest = (item) => {
		if (isSubMenuTest === false) {
			setSubMenu(false);
			setSubMenuTest(true);
			setCurrentItem(item);
		}
	}

	const onPressTests = () => {
		props.history.push({
			pathname: `/tests`,
			state: {
				name: search
			}
		});
	}

	const onDisableSubMenu = () => {
		setSubMenu(false);
		setSubMenuTest(false);
	}

	const onPressSubMenu = (data, item) => {
		if (item.id === "practice") {
			localStorage.setItem(Common.PRACTICE.CHOOSE_PRACTICE, JSON.stringify(data));
			props.history.push({
				pathname: `/practice/${data.codeDefault}`,
				state: { data }
			});

			// dispatch(Actions.resetPracticeState());
		} else if (item.id === "test") {
			props.history.push({
				pathname: `/test/${data.codeDefault}`,
				state: { data }
			});
			// dispatch(Actions.resetSearchTestState());
		}
		onDisableSubMenu();
	}

	const onChangeValueSearch = (event) => {
		let value = event.target.value;
		setValueSearch(value);
	}

	const handleKeyDown = (event) => {
		if (event.key === "Enter") {
			if (props.location.pathname !== "/tests") {
				onPressTests();
			} else {
				props.history.replace({
					pathname: `/tests`,
					state: {
						name: search
					}
				});
			}

		}
	}

	/** LIFE CYCLE */
	useEffect(() => {
		if (props.location.pathname !== "/tests") {
			setValueSearch("");
		}
	}, [
		props.location.pathname
	]);

	/** RENDER */
	return (
		<ThemeProvider theme={toolbarTheme}>
			<AppBar id="fuse-toolbar" className="bg-header flex relative z-10" color="default">
				<Toolbar className="p-0 ph-24x">
					<Grid className="no-px" container spacing={0}>
						<Hidden smDown className={"flex-1"}>
							<div style={{ marginRight: 36 }} className={"flex items-center justify-start"} >
								<Link onMouseEnter={onDisableSubMenu} to={'/home'} className={"nav-button"}>
									<img className={"logo-header self-center"} alt={"logos"} src={"/assets/images/logos/fourhorsemen.png"} />
								</Link>
							</div>


							{navigation.map((item) => (
								<React.Fragment key={item.id}>
									<div style={{ marginRight: 36 }} className={"flex items-center justify-start"} >
										{(item.url === "/practice") ?
											<div className={"nav-button"} onMouseEnter={() => onEnableSubMenuPractice(item)}>
												<div className={"flex flex-row items-center"}>
													<Typography style={{ color: route === item.id ? 'black' : '#5f6368', fontWeight: "500" }} variant="body1" >
														{item.title}
													</Typography>
													{isSubMenu ?
														<ArrowDropUp style={{ color: route === item.id ? 'black' : '#5f6368' }} fontSize="small" />
														:
														<ArrowDropDown style={{ color: route === item.id ? 'black' : '#5f6368' }} fontSize="small" />
													}
												</div>
												{route === item.id &&
													<Divider style={{ marginLeft: 8 }} className={classes.divider} variant="fullWidth" />
												}
												{/* {isSubMenu &&
													<SubMenuPractice visible={isSubMenu} onDisable={onDisableSubMenu} onPress={(data) => onPressSubMenu(data, currentItem)} />
												} */}
											</div>
											:
											(item.url === "/test") ?
												<div className={"nav-button"} onMouseEnter={() => onEnableSubMenuTest(item)}>
													<div className={"flex flex-row items-center"}>
														<Typography style={{ color: route === item.id ? 'black' : '#5f6368', fontWeight: "500" }} variant="body1" >
															{item.title}
														</Typography>
														{isSubMenuTest ?
															<ArrowDropUp style={{ color: route === item.id ? 'black' : '#5f6368' }} fontSize="small" />
															:
															<ArrowDropDown style={{ color: route === item.id ? 'black' : '#5f6368' }} fontSize="small" />
														}
													</div>

													{route === item.id &&
														<Divider style={{ marginLeft: 6 }} className={classes.divider} variant="fullWidth" />
													}
													{/* {isSubMenuTest &&
														<SubMenuTest visible={isSubMenuTest} onDisable={onDisableSubMenu} onPress={(data) => onPressSubMenu(data, currentItem)} />
													} */}
												</div>
												:
												<Link onMouseEnter={onDisableSubMenu} to={item.url} className={"nav-button"}>
													{item.url === "/home" ?
														<>
															<Typography style={{ color: route === item.id ? 'black' : '#5f6368', fontWeight: "500" }} variant="body1">
																{item.title}
															</Typography>
															{props.location.pathname === item.url && item.url !== "/home" &&
																<Divider style={{ marginLeft: 6 }} className={classes.divider} variant="fullWidth" />
															}
														</>
														:
														<>
															<Typography style={{ color: route === item.id ? 'black' : '#5f6368', fontWeight: "500" }} variant="body1">
																{item.title}
															</Typography>

														</>
													}
												</Link>
										}
									</div>
								</React.Fragment>
							))}
						</Hidden>

						<Hidden mdUp>
							<Grid className={"flex items-center justify-start"} item lg={6} md={2} sm={2} xs={2}>
								<IconButton
									style={{ color: "black" }}
									aria-label="open drawer"
									edge="end"
									onClick={() => foldedAndClosed && dispatch(Actions.navbarOpenMobile())}
								>
									<MenuIcon />
								</IconButton>
							</Grid>
						</Hidden>

						<div className={"flex flex-1 flex-row justify-end items-center"}>
							<TextField
								margin="dense"
								variant="outlined"
								value={search}
								onChange={onChangeValueSearch}
								placeholder={Language[Config.language].search}
								InputProps={{
									startAdornment: (
										<InputAdornment position="start">
											<Search style={{ color: '#5f6368' }} />
										</InputAdornment>
									),
								}}
								onKeyDown={handleKeyDown}
							/>


							{user.data ?
								<UserMenu />
								:
								<Link to={"/login"} className="nav-button ml-16">
									<Button style={{ height: 50 }} variant={"outlined"}>
										<Typography className={"normal-case font-medium"} style={{ fontWeight: "500", color: Colors.white }} variant="body1">
											{Language[Config.language].connect_wallet}
										</Typography>
									</Button>

								</Link>
							}
						</div>
					</Grid>
				</Toolbar>
			</AppBar>
		</ThemeProvider>
	);
}

export default ToolbarLayout1;
