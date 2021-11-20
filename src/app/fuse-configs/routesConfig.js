/**
 ** Name: routesConfig.js
 ** Author: haivahung
 ** CreateAt: 20/11/2021
 ** Description: Description of routesConfig.js
 **/
/* LIBRARY */
import React from "react";
import { Redirect } from "react-router-dom";
import { FuseUtils } from "@fuse";
/** COMPONENTS CONFIG */
// import { LoginConfig } from "app/main/login/LoginConfig";
// import { RegisterConfig } from "app/main/register/RegisterConfig";
import { pagesConfigs } from "app/main/pages/pagesConfigs";
import { HomeConfig } from 'app/main/home/HomeConfig';
const routeConfigs = [
  ...pagesConfigs,
  // LoginConfig,
  // RegisterConfig,
  HomeConfig,
];

const routes = [
  ...FuseUtils.generateRoutesFromConfigs(routeConfigs),
  {
    path: "/",
    component: () => <Redirect to="/home" />,
  },
  // {
  //   path: "/register",
  //   component: () => <Redirect to="/register" />,
  // },
  {
    component: () => <Redirect to="/pages/errors/error-404" />,
  },
  {
    path: "/similar-sharing/:current_user_id/:mode/:id(/:similar_img)",
    component: () => <Redirect to="/test/detail/:id" />,
  },
];

export default routes;
