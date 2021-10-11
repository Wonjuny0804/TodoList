import React from "react";
import { Meta } from "@storybook/react";
import MainPage from "./MainPage"

export default {
  title: "page/Main",
  component: MainPage
} as Meta;

export const TestMainPage = (): JSX.Element => {
  const today = new Date();
  return <MainPage today={today} />
}