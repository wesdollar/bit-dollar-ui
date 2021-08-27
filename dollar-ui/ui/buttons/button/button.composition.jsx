import React from "react";
import { Button } from "./button";
import GitHubIcon from "@material-ui/icons/GitHub";
import { Space } from "@wesdollar/dollar-ui.ui.space";

export const BasicButton = () => (
  <>
    <Button startIcon={<GitHubIcon />}>Hello World</Button>
    <Space />
    <Button>Hello World</Button>
  </>
);
