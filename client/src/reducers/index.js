// import { ADD_ITEM, REMOVE_ITEM, FILTER_ITEM } from "actions";

const initialState = {
  textSearch: "",
  notes: [
    {
      id: 1,
      title: "React make me laught",
      content:
        "Lorem ipsum dolojdjmakair sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animiLorem ipsum dolojdjmakair sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi. Lorem ipsum dolojdjmakair sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi",
      created: "1 day",
    },
    {
      id: 2,
      title: "Wie ist React?",
      content:
        "Lorem ipsum dolor sit amet consecteturkdkdkdkkd adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi",
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
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam njsmsl.snjdj  ndhuene esse adipisci, dolore odit animi",
      created: "10 days",
    },
  ],
  devarticles: [
    {
      id: 1,
      title: "React in 5h ",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,ndnme. ejj,djfnatus modi tempore esse adipisci, dolore odit animi",
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
  devprojects: [
    {
      id: 1,
      title: "Vue.js ",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi",
      created: "1 day",
      name: "Anna_karenina",
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
  switch (action.type) {
    case "FILTER_ITEM":
      return {
        ...state,
      };
    case "ADD_ITEM":
      return {
        ...state,
        [action.payload.itemType]: [
          ...state[action.payload.itemType],
          action.payload.item,
        ],
      };
    case "REMOVE_ITEM":
      return {
        ...state,
        [action.payload.itemType]: [
          ...state[action.payload.itemType].filter(
            (item) => item.id !== action.payload.id
          ),
        ],
      };

    default:
      return state;
  }
};

export default RootReducer;
