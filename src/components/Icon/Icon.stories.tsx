import React from "react";
import Icon from "./Icon";
import { Meta } from "@storybook/react";

export default {
  title: "component/Logo",
  component: Icon
} as Meta;

export const Logo = ():JSX.Element => <Icon name="logo"/>;