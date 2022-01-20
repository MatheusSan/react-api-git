import React from "react";

import PanelUser from "../Components/panelUser";

export default {
  title: "Components/Panel/Panel user",
  component: PanelUser,
};

const Template = (args) => <PanelUser {...args} />;

export const MainPanelUser = Template.bind({});
MainPanelUser.args = {
  avatar: "https://avatars.githubusercontent.com/u/45019852?v=4",
  name: "José da Silva",
  bio: "Olá, eu sou o José, programador deste 1996, conhecido como último amante de Java",
}