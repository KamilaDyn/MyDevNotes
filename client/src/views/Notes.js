import React from "react";
import GridTemplate from "templates/GridTemplate";
import Card from "components/molecules/Card/Card";

const notes = [
  {
    id: 1,
    title: "React make me laught",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi",
    created: "1 day",
  },
  {
    id: 2,
    title: "Wie ist React?",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi",
    created: "1 day",
  },
  {
    id: 3,
    title: "I fallow in love in React",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi",
    created: "5 days",
  },
  {
    id: 4,
    title: "My React to that",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi",
    created: "10 days",
  },
];

const Notes = () => (
  <GridTemplate pageType="notes">
    {notes.map(({ title, content, created, id }) => (
      <Card
        cardType="notes"
        title={title}
        content={content}
        created={created}
        id={id}
        key={id}
      />
    ))}
  </GridTemplate>
);

export default Notes;
