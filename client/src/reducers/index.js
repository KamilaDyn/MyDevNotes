const initialState = {
  notes: [
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
  ],
  devArticles: [
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
  ],
  devProjects: [
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
  ],
};

const RootReducer = (state = initialState, action) => {
  console.log(action);
  return state;
};

export default RootReducer;
