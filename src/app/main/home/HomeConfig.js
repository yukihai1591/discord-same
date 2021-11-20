/* LIBRARY */
import Home from "./Home";
import { authRoles } from "app/auth";

export const HomeConfig = {
	settings: {
		layout: {
			config: {
				navbar: {
					display: true,
				},
				toolbar: {
					display: true,
				},
				footer: {
					display: true,
					style: "relative",
					position: "below"
				},
				leftSidePanel: {
					display: false,
				},
				rightSidePanel: {
					display: false,
				},
			},
		},
	},
	auth: authRoles.onlyGuest,
	routes: [
		{
			path: "/home",
			component: Home,
		},
	],
};
