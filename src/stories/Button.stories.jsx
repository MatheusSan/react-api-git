import React from "react";

import Button from "../Components/button";

export default {
  title: "Components/button/button",
  component: Button,
  argTypes: { onClick: { action: 'clicked' } },
};


const Template = (args) => <Button {...args} />;

export const MainButton = Template.bind({});
MainButton.args = {
  text: "Enter",
}