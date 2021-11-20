/** LIBRARY */
import React from 'react';
import { Typography, Avatar, Icon, Grid } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import { useSelector } from 'react-redux';
/** COMMON */
import Language from "app/utils/language";
import Config from "app/config";

function FooterLayout1(props) {
	const footerTheme = useSelector(({ fuse }) => fuse.settings.footerTheme);

	return (
		<ThemeProvider theme={footerTheme}>
			<div className={"flex flex-col justify-center items-center bg-white ph-24x"}>
				<Avatar className={"logos-custom mt-12"} alt={"logos"} src={"/assets/images/logos/fourhorsemen.png"} />

				<Typography className={"mt-12"} variant={"body1"}>{Language[Config.language].address_cty}</Typography>

				<Grid className={"flex flex-row mt-12 max-w-2xl"} container spacing={3}>
					<Grid className={"flex flex-row sm:justify-center"} item xs={12} sm={4}>
						<Icon fontSize={"small"} className={"mr-2"}>{"phone"}</Icon>
						<Typography variant={"body1"}>{Language[Config.language].phone_cty}</Typography>
					</Grid>
					<Grid className={"flex flex-row sm:justify-center"} item xs={12} sm={4}>
						<Icon fontSize={"small"} className={"mr-2"}>{"devices"}</Icon>
						<Typography variant={"body1"}>{Language[Config.language].phone_table_cty}</Typography>
					</Grid>
					<Grid className={"flex flex-row sm:justify-center"} item xs={12} sm={4}>
						<Icon fontSize={"small"} className={"mr-2"}>{"mail"}</Icon>
						<Typography variant={"body1"}>{Language[Config.language].email_cty}</Typography>
					</Grid>
				</Grid>

				<div className={"flex flex-row mb-12 mt-24"}>
					<Icon fontSize={"small"}>{"copyright"}</Icon>
					<Typography variant={"body1"}>{Language[Config.language].copy_right}</Typography>
				</div>
			</div>
		</ThemeProvider>
	);
}

export default FooterLayout1;
