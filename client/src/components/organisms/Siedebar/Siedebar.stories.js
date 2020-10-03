import React from "react";
import { storiesOf } from "@storybook/react";
import { select } from "@storybook/addon-knobs";
import StoryRouter from "storybook-react-router";
import Sidebar from "./Sidebar";

storiesOf("Organisms/Sidebar", module)
  .addDecorator(StoryRouter())
  .add("Primary", () => {
    const label = "Colors";
    const options = {
      Primary: "hsl(62, 91%, 87%)",
      Secondary: "hsl(34, 80%, 82%)",
      Tertiary: "hsl(115, 72%, 87%)",
    };
    const defaultValue = "hsl(62, 91%, 87%)";
    const groupId = "GROUP-ID2";
    const value = select(label, options, defaultValue, groupId);
    return <Sidebar color={value} />;
  });
