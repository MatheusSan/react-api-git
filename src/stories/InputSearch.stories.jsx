import React from "react";

import InputSearch from "../Components/inputSearch";

export default {
  title: "Components/input/InputSearch",
  component: InputSearch,
};

const Template = (args) => <InputSearch {...args} />;

export const MainInputSearch = Template.bind({});
MainInputSearch.args = {
  placeholder: "Search user...",
  onChange: () => {},
  onKeyUp: () => {},
  onClick: () => {},
}