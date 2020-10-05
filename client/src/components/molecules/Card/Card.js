import React, { Component } from "react";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import styled, { css } from "styled-components";
import Paragraph from "components/atoms/Paragraph/Paragraph";
import Heading from "components/atoms/Heading/Heading";
import Button from "components/atoms/Button/Button";
import LinkIcon from "assets/icons/url.svg";

const StyledWrapper = styled.div`
  min-height: 380px;
  box-shadow: 0 10px 30px -10px hsla(0, 0%, 0%, 0.1);
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  display: grid;
  grid-template-rows: 0.25fr 1fr;
`;

const InnerWrapper = styled.div`
  position: relative;
  padding: 17px 30px;
  background-color: ${({ activeColor, theme }) =>
    activeColor ? theme[activeColor] : "white"};

  :first-of-type {
    z-index: 9999;
  }

  ${({ flex }) =>
    flex &&
    css`
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    `}
`;

const DateInfo = styled(Paragraph)`
  margin: 0 0 5px;
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.xs};
`;

const StyledHeading = styled(Heading)`
  margin: 5px 0 0;
`;
const StyledLinkButton = styled.a`
  display: block;
  width: 47px;
  height: 47px;
  border-radius: 50px;
  background: white url(${LinkIcon}) no-repeat;
  background-size: 60%;
  background-position: 50%;
  position: absolute;
  right: 25px;
  top: 50%;
  transform: translateY(-50%);
`;
const StyledParagraph = styled(Paragraph)`
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.xs};
`;

class Card extends Component {
  constructor(props) {
    super(props);
    this.onDelete = this.onDelete.bind(this);
    console.log(props.id);
  }
  state = {
    redirect: false,
    isDeleted: false,
  };

  async onDelete() {
    const itemId = this.props.id;

    const element = document.getElementById(itemId);
    element.remove();
  }
  handleCardClick = () => this.setState({ redirect: true });
  render() {
    const {
      id,
      created,
      name,
      articleUrl,
      content,
      title,
      cardType,
    } = this.props;
    const { redirect } = this.state;
    if (redirect) {
      return <Redirect to={`${cardType}/${id}`} />;
    }
    return (
      <StyledWrapper id={id}>
        <InnerWrapper activeColor={cardType}>
          <StyledHeading>{title}</StyledHeading>
          <DateInfo>{created}</DateInfo>
          {cardType === "devarticles" && <StyledLinkButton href={articleUrl} />}
          {cardType === "devprojects" && (
            <StyledParagraph>Responsible: {name}</StyledParagraph>
          )}
        </InnerWrapper>
        <InnerWrapper flex>
          <Paragraph>{content}</Paragraph>
          <StyledParagraph secondary onClick={this.handleCardClick}>
            Read more
          </StyledParagraph>
          <Button secondary activeColor={cardType} onClick={this.onDelete}>
            REMOVE
          </Button>
        </InnerWrapper>
      </StyledWrapper>
    );
  }
}

Card.propTypes = {
  id: PropTypes.number.isRequired,
  cardType: PropTypes.oneOf(["notes", "devarticles", "devprojects"]),
  title: PropTypes.string.isRequired,
  created: PropTypes.string.isRequired,
  articleUrl: PropTypes.string,
  content: PropTypes.string.isRequired,
};

Card.defaultProps = {
  cardType: "notes",
  name: null,
  articleUrl: null,
};

export default Card;
