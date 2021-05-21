import React, { createContext, useEffect, useState } from "react";
import Loader from "react-loader-spinner";
import PropTypes from "prop-types";
import axios from "axios";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import { defaultAPI, APIUrl, token } from "../config";

export const UserContext = createContext();

const propTypes = {
  children: PropTypes.node,
};

// This context provider is passed to any component requiring the context
const Provider = ({ children }) => {
  const [flag, setFlag] = useState(false);
  const [data, setData] = useState({ defaultAPI: defaultAPI, glb_state: {} });
  useEffect(() => {
    axios
      .get(APIUrl, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        setData({ ...data, glb_state: res.data });
        
        setTimeout(() => {
          setFlag(true);
        }, 3000)
      });
  }, []);

  if (!flag)
  return (
    <div
      style={{
        position: "absolute",
        top: window.innerHeight / 2 - 50,
        left: window.innerWidth / 2 - 50,
      }}
    >
      <Loader
        type="Puff"
        color="#8e24aa"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />
    </div>
  );

  return (
    <UserContext.Provider
      value={{
        data,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

Provider.propTypes = propTypes;

export default Provider;
