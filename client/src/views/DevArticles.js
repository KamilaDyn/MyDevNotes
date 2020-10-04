import React from "react";
import GridTemplate from "templates/GridTemplate";
import Card from "components/molecules/Card/Card";

const devArticles = [
  {
    id: 1,
    title: "React in 5h ",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi",
    articleUrl:
      "https://www.youtube.com/watch?v=DLX62G4lc44&ab_channel=freeCodeCamp.org",
    created: "1 day",
  },
  {
    id: 2,
    title: "React for Begginners",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi",
    articleUrl:
      "https://www.youtube.com/watch?v=Ke90Tje7VS0&ab_channel=ProgrammingwithMosh",
    created: "3 days",
  },
  {
    id: 3,
    title: "React to Formik",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi",
    articleUrl:
      "https://www.youtube.com/watch?v=3sXYK60T6Us&ab_channel=LogRocket",
    created: "7 days",
  },
  {
    id: 4,
    title: "Advanced React",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi",
    articleUrl:
      "https://www.youtube.com/watch?v=axL59Dc5rZA&ab_channel=CoderOne",
    created: "10 days",
  },
];

const DevArticles = () => (
  <GridTemplate pageType="devarticles">
    {devArticles.map(({ title, content, articleUrl, created, id }) => (
      <Card
        cardType="devarticles"
        title={title}
        content={content}
        articleUrl={articleUrl}
        created={created}
        key={id}
        id={id}
      />
    ))}
  </GridTemplate>
);

export default DevArticles;