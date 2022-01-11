import React, { useState } from "react";

import Page from "../../Components/page";
import Container from "../../Components/container";
import ContainerList from "../../Components/ContainerList";
import RepoItem from "../../Components/RepoItem";
import InputSearch from "../../Components/inputSearch";
import Cabecalho from "../../Components/cabecalho";
import Button from "../../Components/button";

import api from "../../services/api";

export default function Login() {
  const [result, setResult] = useState([]);
  const [txtInput, setTxtInput] = useState("");

  async function search(type, url) {
    //FIXME: Deixa fazer só uma requisição e bloqueia a outra
    api
      .get(`/${url}/${type}`)
      .then((response) => {
        console.log(response);
        setResult(response.data);
      })
      .catch((err) => console.log("Ops! Ocorreu um erro: " + err));
  }

  return (
    <Page>
      <Cabecalho
        avatar="https://avatars.githubusercontent.com/u/45019852?v=4"
        name="Matheus Santos"
        email="matheus08santos@hotmail.com"
        bio="Alguma coisa pra encher ..."
      />
      <InputSearch onChange={(e) => setTxtInput(e.target.value)} />
      <Container>
        <Button onClick={() => search("repos", txtInput)}>repos</Button>
        <Button onClick={() => search("starred", txtInput)}>starred</Button>
      </Container>
      {result.length !== 0 && (
        <ContainerList>
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
      )}
    </Page>
  );
}
