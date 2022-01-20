import React, { useContext, useState } from "react";

import Page from "../../Components/page";
import Title from "../../Components/texts/title";
import Text from "../../Components/texts/text";
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
  const [resultUser, setResultUser] = useState(null);
  const [haveSearch, setHaveSearch] = useState(false);
  const [txtInput, setTxtInput] = useState("");
  const [loading, setLoading] = useState(false);

  const { user, setAuthenticated } = useContext(Context);

  async function search(type, url) {
    setHaveSearch(true);

    const localUser = JSON.parse(localStorage.getItem(url));
    if (localUser !== null) {
      setResultUser(localUser.hasOwnProperty(user) ? localUser.user : null);
      setResult(localUser.hasOwnProperty(type) ? localUser[type] : []);
      setLoading(false);
    }

    setLoading(true);
    setResult([]);
    setResultUser(null);
    api
      .get(`/${url}`)
      .then((resUser) => {
        setResultUser(resUser.data);
        if (!type) {
          if (localUser === null) {
            localStorage.setItem(url, JSON.stringify({ user: resUser.data }));
          } else {
            updateLocal(localUser, resUser.data, null, null);
          }
        } else {
          api
            .get(`/${url}/${type}`)
            .then((response) => {
              setResult(response.data);
              if (localUser === null) {
                localStorage.setItem(
                  url,
                  JSON.stringify({ user: resUser.data, [type]: response.data })
                );
              } else {
                updateLocal(localUser, resUser.data, response.data, type, url);
              }
            })
            .catch((err) => {
              console.log("Repo - Ops! Ocorreu um erro: " + err);
            });
        }
      })
      .catch((errUser) => {
        console.log("User - Ops! Ocorreu um erro: " + errUser);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  function updateLocal(local, user, resType, type, url) {
    let change = false;
    console.log("verifica");
    if (JSON.stringify(local.user) !== JSON.stringify(user)) {
      change = true;
      local.user = user;
      console.log("mudei user");
    }
    if (local.hasOwnProperty(type)) {
      if (JSON.stringify(local[type]) !== JSON.stringify(resType)) {
        change = true;
        local[type] = resType;
        console.log("mudei type");
      } else {
        return;
      }
    } else {
      if (type !== null) {
        change = true;
        console.log("setei type");
        local[type] = resType;
      }
    }
    if (change) {
      console.log("Mudei");
      localStorage.removeItem(url);
      localStorage.setItem(url, JSON.stringify(local));
    }
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
            title="logout"
          />
          <Cabecalho
            avatar={user.photos[0].value}
            name={user.displayName}
            nickname={user.username}
            bio={user._json.bio}
          />
          <InputSearch
            placeHolder="User GitHub..."
            onChange={(e) => setTxtInput(e.target.value)}
            onClick={() => search(false, txtInput)}
            onKeyUp={(e) => {
              e.key === "Enter" && search(false, txtInput);
            }}
          />
          <Container>
            <Button onClick={() => search("repos", txtInput)} text="repos" />
            <Button
              onClick={() => search("starred", txtInput)}
              text="starred"
            />
          </Container>
          {loading ? (
            <ContainerList>
              <Loading />
            </ContainerList>
          ) : !loading && resultUser ? (
            <ContainerList>
              <PanelUser
                name={resultUser.name}
                avatar={resultUser.avatar_url}
                bio={resultUser.bio}
                url={resultUser.html_url}
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
            haveSearch && (
              <Texts>
                <Text>No results found</Text>
              </Texts>
            )
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
