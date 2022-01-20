import React from "react";

import Cabecalho from "../Components/cabecalho";

export default {
  title: "Components/header/headerInfo",
  component: Cabecalho,
};

const Template = (args) => <Cabecalho {...args} />;

export const MainCabecalho = Template.bind({});
MainCabecalho.args = {
  avatar: "https://avatars.githubusercontent.com/u/45019852?v=4",
  name: "José da Silva",
  nickname: "Josinho",
  bio: "Olá, eu sou o José, programador deste 1996, conhecido como último amante de Java",
}