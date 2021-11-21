/**
 ** Name: Login.js
 ** Author: HungHai_Let'sTravel
 ** CreateAt: 04/09/2021
 ** Description: Description of Login.js
 **/
/* LIBRARY */
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
	Typography, Grid, Avatar,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import clsx from "clsx";
/** COMPONENTS */
/** COMMON */
import Language from "app/utils/language";
import Config from "app/config";
/** REDUX */

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
		// border: "solid 0.5px #dadce0",
		// backgroundColor: "#ffffff",
		// '&:hover': {
		// 	backgroundColor: "rgb(239,239,239)",
		// }
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

	const [isLoadDimension, setDimension] = useState(true);
	const [isLoading, setLoading] = useState(true);
	const [windowSize, setWindowSize] = useState(1366);

	/** FUNCTIONS */

	/** HANDLE FUNCTIONS */

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
		if (isLoading) {
		} else {
		}
	}, [
		isLoading,
	])

	/** RENDER */
	return (
		<div className={" flex-1 flex-col pb-24 items-center"}>
			{/* Section 1 */}
			<div style={{
				backgroundImage: "url('assets/images/home/cover.png')",
				backgroundPosition: 'center',
				backgroundSize: 'cover',
				backgroundRepeat: 'no-repeat',
				height: 600,
			}} className={"flex items-center justify-center ph-24x bg-home-sec-1"}>
				<Grid container className={"flex items-center w-full-container"}>
					<Grid item xs={12} sm={5} md={5} lg={5}>
						<Typography variant={"h4"} component={"h4"}
							className={"title-1-sec-1"}
						>
							4HORSEMEN CAPITAL
						</Typography>
						<Typography className={"mv-24x body-1-sec-1"} variant={"body1"}
						>
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

			{/* Section 2 */}
			<div className={"flex flex-col w-full bg-home-sec-2 items-center pb-48 "}>
				<div className={"w-full-container mt-48"}>
					<Typography variant={"h4"} className={"title-1-sec-2"}>{Language[Config.language].our_advandtages}</Typography>

					<Grid container spacing={3}>
						<Grid key={Math.random()} item xs={12} sm={3}>
							<div elevation={0} className={clsx(classes.con_card, "flex flex-1 flex-col mt-24x p-16")}>
								<Avatar
									src={"assets/images/home/quotes.png"}
									style={{ width: 100, height: 80 }}
									variant={"square"}
								/>
								<div className={"flex flex-col"}>
									<div className={"flex flex-row items-center mt-16"}>
										<Typography className={"font-medium ml-16 body-1-sec-2"} variant={"body1"}>{"1 ETH Challenge"}</Typography>
									</div>
									<Typography className={"mt-16 des content-1-sec-2"} variant={"body1"} color={"textSecondary"}>
										{"Cloud mining allows you to use the computing power of mining equipment hosted in specialized data centers."}
									</Typography>
								</div>
							</div>
						</Grid>
						<Grid key={Math.random()} item xs={12} sm={3}>
							<div elevation={0} className={clsx(classes.con_card, "flex flex-1 flex-col mt-24x p-16")}>
								<Avatar
									src={"assets/images/home/quotes.png"}
									style={{ width: 100, height: 80 }}
									variant={"square"}
								/>
								<div className={"flex flex-col"}>
									<div className={"flex flex-row items-center mt-16"}>
										<Typography className={"font-medium ml-16 body-1-sec-2"} variant={"body1"}>{"Alt Coin Alpha"}</Typography>
									</div>
									<Typography className={"mt-16 des content-1-sec-2"} variant={"body1"} color={"textSecondary"}>
										{"Cloud mining allows you to use the computing power of mining equipment hosted in specialized data centers."}
									</Typography>
								</div>
							</div>
						</Grid>
						<Grid key={Math.random()} item xs={12} sm={3}>
							<div elevation={0} className={clsx(classes.con_card, "flex flex-1 flex-col mt-24x p-16")}>
								<Avatar
									src={"assets/images/home/quotes.png"}
									style={{ width: 100, height: 80 }}
									variant={"square"}
								/>
								<div className={"flex flex-col"}>
									<div className={"flex flex-row items-center mt-16"}>
										<Typography className={"font-medium ml-16 body-1-sec-2"} variant={"body1"}>{"TA Specialists"}</Typography>
									</div>
									<Typography className={"mt-16 des content-1-sec-2"} variant={"body1"} color={"textSecondary"}>
										{"Cloud mining allows you to use the computing power of mining equipment hosted in specialized data centers."}
									</Typography>
								</div>
							</div>
						</Grid>
						<Grid key={Math.random()} item xs={12} sm={3}>
							<div elevation={0} className={clsx(classes.con_card, "flex flex-1 flex-col mt-24x p-16")}>
								<Avatar
									src={"assets/images/home/quotes.png"}
									style={{ width: 100, height: 80 }}
									variant={"square"}
								/>
								<div className={"flex flex-col"}>
									<div className={"flex flex-row items-center mt-16"}>
										<Typography className={"font-medium ml-16 body-1-sec-2"} variant={"body1"}>{"1 ETH Challenge"}</Typography>
									</div>
									<Typography className={"mt-16 des content-1-sec-2"} variant={"body1"} color={"textSecondary"}>
										{"Cloud mining allows you to use the computing power of mining equipment hosted in specialized data centers."}
									</Typography>
								</div>
							</div>
						</Grid>
					</Grid>

					<Grid container className={"flex items-center w-full-container mt-32x"}>
						<Grid item xs={12} sm={7} md={7} lg={7} className={"flex justify-center con-banner"}>
							<img style={{ height: 525, objectFit: "contain" }}
								src={
									"assets/images/home/cover_item.png"
								}
								className={"img-home-sec-1"}
								alt={"banner"}
							/>
						</Grid>
						<Grid item xs={12} sm={5} md={5} lg={5}>
							<Typography variant={"h4"} component={"h4"}
								className={"title-2-sec-2"}
							>
								ABOUT US
							</Typography>
							<Typography className={"mv-24x body-2-sec-2"} variant={"body1"}
							>
								Egestas nec vulputate pharetra quam justo faucibus scelerisqe volutpat sodales quisque id nunc eu aliquam scelerisque morbi sit sem quam lacus sit malesuada et id pellentesque aliquam ipsum feugiat neque.
							</Typography>

							<Typography className={"mv-24x body-2-sec-2"} variant={"body1"}
							>Magnis fringilla molestie feugiat natoque vel, maecenas posue semper enim iaculis urna tincidunt nunc, egestas turpis portr turpis aliquam convallis.
							</Typography>
						</Grid>

					</Grid>
				</div>
			</div>

			{/* Section 3 */}

			{/* Section 4 */}
		</div>
	);
}

export default Home;
