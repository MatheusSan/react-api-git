import React, { useContext, useState } from "react";

import Page from "../../Components/page";
import Title from "../../Components/texts/title";
import Container from "../../Components/container";
import ContainerList from "../../Components/ContainerList";
import RepoItem from "../../Components/RepoItem";
import InputSearch from "../../Components/inputSearch";
import Cabecalho from "../../Components/cabecalho";
import Button from "../../Components/button";
import Loading from "../../Components/loading";
import PanelUser from "../../Components/panelUser";

import { Context } from "../../Context/AuthUser";
import api from "../../services/api";
import { FaSignOutAlt } from "react-icons/fa";
import { Texts } from "../../Components/cabecalho/style";

export default function Login() {
  const [result, setResult] = useState([]);
  const [resultUser, setResultUser] = useState([]);
  const [firstSearch, setFirstSearch] = useState(false);
  const [txtInput, setTxtInput] = useState("");
  const [loading, setLoading] = useState(false);

  const { user, setAuthenticated } = useContext(Context);

  async function search(type, url) {
    setFirstSearch(true);
    setResult([]);
    setLoading(true);
    api
      .get(`/${url}/${type}`)
      .then((response) => {
        api
          .get(`/${url}`)
          .then((resUser) => {
            setResultUser(resUser.data);
            setResult(response.data);
            setLoading(false);
          })
          .catch((errUser) => {
            console.log("Ops! Ocorreu um erro: " + errUser);
            setLoading(false);
          });
      })
      .catch((err) => {
        console.log("Ops! Ocorreu um erro: " + err);
        setLoading(false);
        setResult([]);
      });
  }

  const logout = () => {
    setAuthenticated(false);
    window.open("http://localhost:5000/auth/logout", "_self");
  };

  return (
    <Page>
      {user !== null ? (
        <>
          <FaSignOutAlt
            style={{ position: "absolute", right: 5, top: 5, fontSize: 30 }}
            onClick={logout}
          />
          <Cabecalho
            avatar={user.photos[0].value}
            name={user.displayName}
            email={user.username}
            bio={user._json.bio}
          />
          <InputSearch
            placeHolder="User GitHub..."
            onChange={(e) => setTxtInput(e.target.value)}
          />
          <Container>
            <Button onClick={() => search("repos", txtInput)}>repos</Button>
            <Button onClick={() => search("starred", txtInput)}>starred</Button>
          </Container>
          {loading ? (
            <ContainerList>
              <Loading />
            </ContainerList>
          ) : !loading && result.length !== 0 ? (
            <ContainerList>
              {console.log(resultUser)}
              <PanelUser
                name={resultUser.name}
                avatar={resultUser.avatar_url}
                bio={resultUser.bio}
              />
              {result.map((item, index) => {
                return (
                  <RepoItem
                    key={index}
                    title={item.name}
                    description={item.description}
                    language={item.language}
                  />
                );
              })}
            </ContainerList>
          ) : (
            firstSearch && <Texts>No results found</Texts>
          )}
        </>
      ) : (
        <>
          <Title>
            Maybe you need to <a href="http://localhost:3000">login</a>
          </Title>
          <Loading />
        </>
      )}
    </Page>
  );
}
