import React from "react";
import UserPageTemplate from "templates/UserPageTemplate";
import Card from "components/molecules/Card/Card";

const devArticles = [
  {
    title: "React in 5h ",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi",
    articleUrl:
      "https://www.youtube.com/watch?v=DLX62G4lc44&ab_channel=freeCodeCamp.org",
    created: "1 day",
  },
  {
    title: "React for Begginners",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi",
    articleUrl:
      "https://www.youtube.com/watch?v=Ke90Tje7VS0&ab_channel=ProgrammingwithMosh",
    created: "3 days",
  },
  {
    title: "React to Formik",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi",
    articleUrl:
      "https://www.youtube.com/watch?v=3sXYK60T6Us&ab_channel=LogRocket",
    created: "7 days",
  },
  {
    title: "Advanced React",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi",
    articleUrl:
      "https://www.youtube.com/watch?v=axL59Dc5rZA&ab_channel=CoderOne",
    created: "10 days",
  },
];

const DevArticles = () => (
  <UserPageTemplate pageType="dev_article">
    {devArticles.map((item) => (
      <Card
        cardType="dev_article"
        title={item.title}
        content={item.content}
        articleUrl={item.articleUrl}
        created={item.created}
        key={item.title}
      />
    ))}
  </UserPageTemplate>
);

export default DevArticles;
