import React, { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

import { Context } from "../../Context/AuthUser";
import Title from "../../Components/texts/title";
import Page from "../../Components/page";

export default function Login() {
  const { state, dispatch } = useContext(Context);
  const [data, setData] = useState({ errorMessage: "", isLoading: false });

  const { client_id, redirect_uri } = state;

  useEffect(() => {
    const url = window.location.href;
    const hasCode = url.includes("?code=");

    if (hasCode) {
      const newUrl = url.split("?code=");
      window.history.pushState({}, null, newUrl[0]);
      setData({ ...data, isLoading: true });

      const reqquestData = {
        code: newUrl[1],
      };
      const proxy_url = state.proxy_url;

      fetch(proxy_url, {
        method: "POST",
        body: JSON.stringify(reqquestData),
      })
        .then((response) => response.json())
        .then((data) => {
          dispatch({
            type: "LOGIN",
            payload: { user: data, isLoggedIn: true },
          });
        })
        .catch((error) => {
          setData({
            isLoading: false,
            errorMessage: "Sorry! Login failed",
          });
        });
    }
  }, [state, dispatch, data]);

  if (state.isLoggedIn) {
    return <Navigate to="/logged" />;
  }

  return (
    <Page>
      <Title>GitHub viewer</Title>
      {/* TODO: componentizar todo o login */}
      <div className="login-container">
        {data.isLoading ? (
          <div className="loader-container">
            <div className="loader"></div>
          </div>
        ) : (
          <>
            <a
              className="login-link"
              href={`https://github.com/login/oauth/authorize?scope=user&client_id=${client_id}&redirect_uri=${redirect_uri}`}
              onClick={() => {
                setData({ ...data, errorMessage: "" });
              }}
            >
              <span>Login with GitHub</span>
            </a>
          </>
        )}
      </div>
    </Page>
  );
}