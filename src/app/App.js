// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


/* LIBRARY */
import React, { useEffect, useState } from "react";
import { FuseAuthorization, FuseLayout, FuseTheme } from "@fuse";
import Provider from "react-redux/es/components/Provider";
import { Router } from "react-router-dom";
import jssExtend from "jss-extend";
import history from "@history";
// import { Auth } from "./auth";
import store from "./store";
import AppContext from "./AppContext";
import routes from "./fuse-configs/routesConfig";
import { create } from "jss";
import {
  StylesProvider,
  jssPreset,
  createGenerateClassName,
} from "@material-ui/styles";
import Config from "./config";

const jss = create({
  ...jssPreset(),
  plugins: [...jssPreset().plugins, jssExtend()],
  insertionPoint: document.getElementById("jss-insertion-point"),
});

const generateClassName = createGenerateClassName();

const App = () => {
  const [isLoading, setLoading] = useState(true);

  /** RENDER */
  return (
    <AppContext.Provider value={{ routes }}>
      <StylesProvider jss={jss} generateClassName={generateClassName}>
        <Provider store={store}>
          <Router history={history}>
            <FuseAuthorization>
              <FuseTheme>
                <FuseLayout />
              </FuseTheme>
            </FuseAuthorization>
          </Router>
        </Provider>
      </StylesProvider>
    </AppContext.Provider>
  );
};

export default App;
