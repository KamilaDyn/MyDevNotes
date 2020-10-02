import React from "react";
import UserPageTemplate from "templates/UserPageTemplate";
import Card from "components/molecules/Card/Card";

const devProjects = [
  {
    title: "Vue.js ",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi",
    created: "1 day",
    name: "hello_roman",
  },
  {
    title: "To do app",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi",
    created: "1 day",
    name: "My group",
  },
  {
    title: "Forms to create",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi",
    created: "5 days",
    name: "Anna, Mike",
  },
  {
    title: "Tech doucmentation",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi",
    created: "10 days",
    name: "Joanna",
  },
];

const DevProjects = () => (
  <UserPageTemplate pageType="dev_project">
    {devProjects.map((item) => (
      <Card
        cardType="dev_project"
        title={item.title}
        content={item.content}
        name={item.name}
        created={item.created}
        key={item.title}
      />
    ))}
  </UserPageTemplate>
);

export default DevProjects;
