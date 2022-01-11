import React, { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { FaGithub, FaSpinner } from "react-icons/fa";

import { Context } from "../../Context/AuthUser";
import Title from "../../Components/texts/title";
import Warning from "../../Components/texts/warning";
import Page from "../../Components/page";
import Container from "../../Components/container";
import ContainerRotate from "../../Components/containerRotate";
import Button from "../../Components/button";

export default function Login() {
  const { state, dispatch } = useContext(Context);
  const [data, setData] = useState({ errorMessage: "", isLoading: false });

  const { client_id, redirect_uri } = state;

  useEffect(() => {
    const url = window.location.href;
    const hasCode = url.includes("?code=");
    console.log(url);

    console.log(state.proxy_url);
    if (hasCode) {
      console.log("Entrei"); //FIXME: Não tpa passando por esse console
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
      <Container>
        {data.isLoading ? (
          <ContainerRotate>
            <FaSpinner />
          </ContainerRotate>
        ) : (
          <>
            <a
              href={`https://github.com/login/oauth/authorize?scope=user&client_id=${client_id}&redirect_uri=${redirect_uri}`}
            >
              <Button
                onClick={() => {
                  setData({ ...data, errorMessage: "" });
                }}
              >
                <FaGithub style={{ marginRight: 5 }} />
                Login with GitHub
              </Button>
            </a>
            <Warning>{data.errorMessage}</Warning>
          </>
        )}
      </Container>
    </Page>
  );
}
