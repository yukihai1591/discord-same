/**
 ** Name: Login.js
 ** Author: HungHai_Let'sTravel
 ** CreateAt: 04/09/2021
 ** Description: Description of Login.js
 **/
/* LIBRARY */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	Container, Card, Typography, Grid, Avatar, IconButton,
	Button
} from "@material-ui/core";
import {
	ArrowForward, KeyboardArrowDown, KeyboardArrowLeft, KeyboardArrowRight
} from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";
import { FuseAnimate } from "@fuse";
import Carousel from 'react-elastic-carousel';
import Skeleton from "react-loading-skeleton";
import parse from 'html-react-parser';
import Collapsible from "react-collapsible";
import clsx from "clsx";
/** COMPONENTS */
import NewsItem from "./components/NewsItem";
import ClassItem from "./components/ClassItem";
/** COMMON */
import Language from "app/utils/language";
import Config from "app/config";
import jwtServiceConfig from "app/services/jwtServiceConfig";
/** REDUX */
import * as Actions from "app/store/actions";

const useStyles = makeStyles((theme) => ({
	media: {
		height: 0,
		paddingTop: '56.25%', // 16:9
		backgroundSize: 'contain'
	},
	con_faqs: {
		borderRadius: 5,
		backgroundColor: "#ffffff",
		maxWidth: 920,
	},
	con_btn_faqs: {
		borderRadius: 5,
		backgroundColor: "#ffffff",
		maxWidth: 920,
		'&:hover': {
			backgroundColor: "rgb(239,239,239)",
		}
	},
	con_card: {
		borderRadius: 10,
		border: "solid 0.5px #dadce0",
		backgroundColor: "#ffffff",
		'&:hover': {
			backgroundColor: "rgb(239,239,239)",
		}
	},
	con_chip: {
		height: 48,
		fontSize: 16,
		borderRadius: 24,
		paddingLeft: 16,
		paddingRight: 16
	},
	btn_arrow: {
		'&:hover': {
			backgroundColor: "transparent",
		}
	}
}));

function Home(props) {
	const classes = useStyles();
	const dispatch = useDispatch();
	// const classState = useSelector(({ classReducer }) => classReducer.class_management);
	// const subjectState = useSelector(({ subject }) => subject.subject);
	// const newsState = useSelector(({ news }) => news.news_management);
	// const settingState = useSelector(({ setting }) => setting.setting);

	const [isLoadDimension, setDimension] = useState(true);
	const [isLoadSubject, setLoadSubject] = useState(true);
	const [isLoading, setLoading] = useState(true);
	const [windowSize, setWindowSize] = useState(1366);
	const [currentClass, setCurrentClass] = useState(null);
	const [subject, setSubject] = useState([]);
	const [news, setNews] = useState([]);

	/** FUNCTIONS */
	const goToNews = () => {
		props.history.push({
			pathname: `/news`
		});
	}

	/** HANDLE FUNCTIONS */
	const handleChipClass = (data) => {
		setLoadSubject(true)
		setCurrentClass(data)
		let params = {
			classCode: data.codeDefault
		}
		// dispatch(Actions.searchSubject(params));
		setLoadSubject(false)
	}

	const handleNewsDetail = (data, name) => {
		props.history.push({
			pathname: `/new/${name}`,
			state: { data }
		})
	}

	const onPractice = (item, index) => {
		props.history.push({
			pathname: `/practice/${currentClass.codeDefault}`,
			state: {
				data: currentClass,
				index: index
			}
		});
	}
	/** LIFE CYCLE */
	useEffect(() => {
		if (isLoadDimension) {
			window.addEventListener("resize", () => {
				setWindowSize(window.innerWidth);
			});
			setWindowSize(window.innerWidth);
			setDimension(false);
		}

	}, [isLoadDimension])

	useEffect(() => {
		if (isLoadSubject) {
			// if (!subjectState.submitting && classState.success) {
			// 	if (!subjectState.success && subjectState.error) {
			// 		setLoadSubject(false);
			// 	}

			// 	let params = {};
			// 	let dataCurrentClass = null;
			// 	if (classState.class.kid.length > 0) {
			// 		params.classCode = classState.class.kid[0].code;
			// 		dataCurrentClass = classState.class.kid[0]
			// 	} else if (classState.class.primary.length > 0) {
			// 		params.classCode = classState.class.primary[0].code;
			// 		dataCurrentClass = classState.class.primary[0]
			// 	} else if (classState.class.secondary.length > 0) {
			// 		params.classCode = classState.class.secondary[0].code;
			// 		dataCurrentClass = classState.class.secondary[0]
			// 	} else if (classState.class.high.length > 0) {
			// 		params.classCode = classState.class.high[0].code;
			// 		dataCurrentClass = classState.class.high[0]
			// 	}
			// 	setCurrentClass(dataCurrentClass)

			// 	// dispatch(Actions.searchSubject(params));
			// 	setLoadSubject(false)
			// }
		} else {
			// if (!subjectState.submitting) {
			// 	if (subjectState.success) {
			// 		setSubject(subjectState.data)
			// 	}
			// 	setLoadSubject(false)
			// }
		}
	}, [
		isLoadSubject,
		// subjectState.submitting,
		// subjectState.success,
		// subjectState.error,
		// classState.success
	])

	useEffect(() => {
		if (isLoading) {

		} else {

		}
	}, [
		isLoading,
	])

	/** RENDER */
	return (
		<div className={" flex-1 flex-col pb-24 items-center"}>
			<div style={{
				backgroundImage: "url('assets/images/home/cover.png')",
				backgroundPosition: 'center',
				backgroundSize: 'cover',
				backgroundRepeat: 'no-repeat',
				height: 600,
			}} className={"flex items-center justify-center ph-24x bg-home-sec-1"}>
				<Grid container className={"flex items-center w-full-container"}>
					<Grid item xs={12} sm={5} md={5} lg={5}>
						<Typography variant={"h4"}>
							{/* {settingState.data.heroSection[0].title} */}
							4HORSEMEN CAPITAL
						</Typography>
						<Typography className={"mv-24x"} variant={"body1"}>
							{/* {settingState.data.heroSection[0].description} */}
							Emplowering our community to archieve better.
						</Typography>
					</Grid>

					<Grid item xs={12} sm={7} md={7} lg={7} className={"flex justify-center con-banner"}>
						<img style={{ height: 525, objectFit: "contain" }}
							src={
								"assets/images/home/cover_item.png"
							}
							className={"img-home-sec-1"}
							alt={"banner"}
						/>
					</Grid>
				</Grid>
			</div>

			<div className={"flex flex-col w-full bg-white items-center mt-32x pb-48"}>
				<div className={"w-full-container mt-48"}>
					<Typography variant={"h4"}>{Language[Config.language].our_advandtages}</Typography>

					<Grid container spacing={3}>

						<Grid key={Math.random()} item xs={12} sm={3}>
							<Card elevation={0} className={clsx(classes.con_card, "flex flex-1 flex-col items-center bg-white mt-24x p-16")}>
								<Avatar
									src={"assets/images/home/quotes.png"}
									style={{ width: 100, height: 80 }}
									variant={"square"}
								/>
								<div className={"flex flex-col items-center"}><div className={"flex flex-row items-center mt-16"}>
									<Typography className={"font-medium ml-16"} variant={"body1"}>{"1 ETH Challenge"}</Typography>
								</div>
									<Typography className={"mt-16 des"} variant={"body1"} color={"textSecondary"}>
										{"Cloud mining allows you to use the computing power of mining equipment hosted in specialized data centers."}
									</Typography>
								</div>
							</Card>
						</Grid>
						<Grid key={Math.random()} item xs={12} sm={3}>
							<Card elevation={0} className={clsx(classes.con_card, "flex flex-1 flex-col items-center bg-white mt-24x p-16")}>
								<Avatar
									src={"assets/images/home/quotes.png"}
									style={{ width: 100, height: 80 }}
									variant={"square"}
								/>
								<div className={"flex flex-col items-center"}><div className={"flex flex-row items-center mt-16"}>
									<Typography className={"font-medium ml-16"} variant={"body1"}>{"Alt Coin Alpha"}</Typography>
								</div>
									<Typography className={"mt-16 des"} variant={"body1"} color={"textSecondary"}>
										{"Cloud mining allows you to use the computing power of mining equipment hosted in specialized data centers."}
									</Typography>
								</div>
							</Card>
						</Grid>
						<Grid key={Math.random()} item xs={12} sm={3}>
							<Card elevation={0} className={clsx(classes.con_card, "flex flex-1 flex-col items-center bg-white mt-24x p-16")}>
								<Avatar
									src={"assets/images/home/quotes.png"}
									style={{ width: 100, height: 80 }}
									variant={"square"}
								/>
								<div className={"flex flex-col items-center"}><div className={"flex flex-row items-center mt-16"}>
									<Typography className={"font-medium ml-16"} variant={"body1"}>{"TA Specialists"}</Typography>
								</div>
									<Typography className={"mt-16 des"} variant={"body1"} color={"textSecondary"}>
										{"Cloud mining allows you to use the computing power of mining equipment hosted in specialized data centers."}
									</Typography>
								</div>
							</Card>
						</Grid>
						<Grid key={Math.random()} item xs={12} sm={3}>
							<Card elevation={0} className={clsx(classes.con_card, "flex flex-1 flex-col items-center bg-white mt-24x p-16")}>
								<Avatar
									src={"assets/images/home/quotes.png"}
									style={{ width: 100, height: 80 }}
									variant={"square"}
								/>
								<div className={"flex flex-col items-center"}><div className={"flex flex-row items-center mt-16"}>
									<Typography className={"font-medium ml-16"} variant={"body1"}>{"1 ETH Challenge"}</Typography>
								</div>
									<Typography className={"mt-16 des"} variant={"body1"} color={"textSecondary"}>
										{"Cloud mining allows you to use the computing power of mining equipment hosted in specialized data centers."}
									</Typography>
								</div>
							</Card>
						</Grid>
					</Grid>
				</div>
			</div>

		</div>
	);
}

export default Home;
