import React from "react";
import UserPageTemplate from "templates/UserPageTemplate";
import Card from "components/molecules/Card/Card";

const notes = [
  {
    title: "React make me laught",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi",
    created: "1 day",
  },
  {
    title: "Wie ist React?",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi",
    created: "1 day",
  },
  {
    title: "I fallow in love in React",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi",
    created: "5 days",
  },
  {
    title: "My React to that",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi",
    created: "10 days",
  },
];

const Notes = () => (
  <UserPageTemplate pageType="note">
    {notes.map((item) => (
      <Card
        cardType="note"
        title={item.title}
        content={item.content}
        created={item.created}
        key={item.title}
      />
    ))}
  </UserPageTemplate>
);

export default Notes;
