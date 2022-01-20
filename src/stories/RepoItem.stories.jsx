import React from "react";

import RepoItem from "../Components/RepoItem";

export default {
  title: "Components/Item/Item repos",
  component: RepoItem,
};

const Template = (args) => <RepoItem {...args} />;

export const MainRepoItem = Template.bind({});
MainRepoItem.args = {
  title: "Repositório título",
  description: "Esse é um card de repositório",
  language: "JAVASCRIPT",
}