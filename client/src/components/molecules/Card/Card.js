import React, { Component } from "react";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import styled, { css } from "styled-components";
import Paragraph from "components/atoms/Paragraph/Paragraph";
import Heading from "components/atoms/Heading/Heading";
import Button from "components/atoms/Button/Button";
import { connect } from "react-redux";
import withContext from "hoc/withContext";
import LinkIcon from "assets/icons/url.svg";
import { removeItem as removeItemAction } from "actions";

const StyledWrapper = styled.div`
  min-height: 380px;
  box-shadow: 0 10px 30px -10px hsla(0, 0%, 0%, 0.1);
  border-radius: 10px;
  position: relative;
  display: grid;
  grid-template-rows: 0.25fr 1fr;

  @media (min-width: 850px) {
    overflow: hidden;
  }
`;

const InnerWrapper = styled.div`
  position: relative;
  padding: 17px 30px;
  background-color: ${({ activeColor, theme }) =>
    activeColor ? theme[activeColor] : "white"};

  :first-of-type {
    z-index: 99;
  }

  ${({ flex }) =>
    flex &&
    css`
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    `}
`;
const WrapperHeading = styled.div`
  width: calc(100% - 47px);
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
  state = {
    redirect: false,
    isDeleted: false,
  };
  handleCardClick = () => this.setState({ redirect: true });
  render() {
    const {
      id,
      created,
      name,
      articleUrl,
      content,
      title,
      appContext,
      removeItem,
    } = this.props;
    const { redirect } = this.state;
    if (redirect) {
      return <Redirect to={`${appContext}/${id}`} />;
    }
    const maxLenght = 150;

    return (
      <StyledWrapper id={id}>
        <InnerWrapper activeColor={appContext}>
          <WrapperHeading>
            <StyledHeading>{title}</StyledHeading>
            <DateInfo>{created}</DateInfo>
          </WrapperHeading>
          {appContext === "devarticles" && (
            <StyledLinkButton href={articleUrl} target="_blank" />
          )}
          {appContext === "devprojects" && (
            <StyledParagraph>Responsible: {name}</StyledParagraph>
          )}
        </InnerWrapper>
        <InnerWrapper flex>
          {content.length > maxLenght ? (
            <Paragraph>{`${content.substring(0, maxLenght)}...`}</Paragraph>
          ) : (
            <Paragraph>{content}</Paragraph>
          )}
          {content.length > maxLenght ? (
            <StyledParagraph secondary onClick={this.handleCardClick}>
              Read more
            </StyledParagraph>
          ) : (
            ""
          )}

          <Button
            secondary
            activeColor={appContext}
            onClick={() => removeItem(appContext, id)}
          >
            REMOVE
          </Button>
        </InnerWrapper>
      </StyledWrapper>
    );
  }
}

Card.propTypes = {
  appContext: PropTypes.oneOf(["notes", "devarticles", "devprojects"]),
  title: PropTypes.string.isRequired,
  created: PropTypes.string.isRequired,
  articleUrl: PropTypes.string,
  content: PropTypes.string.isRequired,
};

Card.defaultProps = {
  appContext: "notes",
  name: null,
  articleUrl: null,
};

const mapDispatchToProps = (dispatch) => ({
  removeItem: (itemType, id) => dispatch(removeItemAction(itemType, id)),
});

export default connect(null, mapDispatchToProps)(withContext(Card));
