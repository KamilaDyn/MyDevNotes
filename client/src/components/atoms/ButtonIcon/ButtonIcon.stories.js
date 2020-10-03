import React from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import penIcon from "assets/icons/pen.svg";
import articleIcon from "assets/icons/article.svg";
import ButtonIcon from "./ButtonIcon";

const BlueBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 500px;
  background-color: ${({ theme }) => theme.devarticles};
`;

storiesOf(`Atoms/ButtonIcon`, module)
  .addDecorator((story) => <BlueBackground>{story()}</BlueBackground>)
  .add("Pen", () => <ButtonIcon icon={penIcon} />)
  .add("Article", () => <ButtonIcon icon={articleIcon} />);
