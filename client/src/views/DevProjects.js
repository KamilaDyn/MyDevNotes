import React from "react";
import GridTemplate from "templates/GridTemplate";
import Card from "components/molecules/Card/Card";

const devProjects = [
  {
    id: 1,
    title: "Vue.js ",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi",
    created: "1 day",
    name: "hello_roman",
  },
  {
    id: 2,
    title: "To do app",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi",
    created: "1 day",
    name: "My group",
  },
  {
    id: 3,
    title: "Forms to create",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi",
    created: "5 days",
    name: "Anna, Mike",
  },
  {
    id: 4,
    title: "Tech doucmentation",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi",
    created: "10 days",
    name: "Joanna",
  },
];

const DevProjects = () => (
  <GridTemplate pageType="devprojects">
    {devProjects.map(({ title, content, name, created, id }) => (
      <Card
        cardType="devprojects"
        title={title}
        content={content}
        name={name}
        created={created}
        key={id}
        id={id}
      />
    ))}
  </GridTemplate>
);

export default DevProjects;
