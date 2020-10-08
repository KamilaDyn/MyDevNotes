// import { ADD_ITEM, REMOVE_ITEM, FILTER_ITEM } from "actions";

const initialState = {
  textSearch: "",
  notes: [
    {
      id: 1,
      title: "RGB color",
      content:
        "The RGB color model is an additive color model[1] in which red, green, and blue light are added together in various ways to reproduce a broad array of colors. The name of the model comes from the initials of the three additive primary colors, red, green, and blue.The main purpose of the RGB color model is for the sensing, representation, and display of images in electronic systems, such as televisions and computers, though it has also been used in conventional photography. Before the electronic age, the RGB color model already had a solid theory behind it, based in human perception of colors.",
      created: "1 day",
    },
    {
      id: 2,
      title: "Web Color",
      content:
        "Web colors are colors used in displaying web pages on the World Wide Web, and the methods for describing and specifying those colors. Colors may be specified as an RGB triplet or in hexadecimal format (a hex triplet) or according to their common English names in some cases. A color tool or other graphics software is often used to generate color values. In some uses, hexadecimal color codes are specified with notation using a leading number sign (#).[1][2] A color is specified according to the intensity of its red, green and blue components, each represented by eight bits. Thus, there are 24 bits used to specify a web color within the sRGB gamut, and 16,777,216 colors that may be so specified.",
      created: "1 day",
    },
    {
      id: 3,
      title: "React in Wiki",
      content:
        "React (also known as React.js or ReactJS) is an open-source, front end, JavaScript library[3] for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies.[4][5][6] React can be used as a base in the development of single-page or mobile applications. However, React is only concerned with rendering data to the DOM, and so creating React applications usually requires the use of additional libraries for state management and routing.[7][8] Redux[9] and React Router[10] are respective examples of such libraries. 'From Wikipedia, the free encyclopedia'",
      created: "5 days",
    },
    {
      id: 4,
      title: "Front end and back end",
      content:
        "In software engineering, the terms front end and back end refer to the separation of concerns between the presentation layer (front end), and the data access layer (back end) of a piece of software, or the physical infrastructure or hardware. In the client–server model, the client is usually considered the front end and the server is usually considered the back end, even when some presentation work is actually done on the server itself. 'From Wikipedia, the free encyclopedia'",
      created: "10 days",
    },
    {
      id: 5,
      title: "CMS Structure",
      content:
        "A (CMS) typically has two major components: a content management application (CMA), as the front-end user interface that allows a user, even with limited expertise, to add, modify, and remove content from a website without the intervention of a webmaster; and a content delivery application (CDA), that compiles the content and updates the website. 'From Wikipedia, the free encyclopedia'",
      created: "1 day",
    },
  ],
  devarticles: [
    {
      id: 1,
      title: "Formik documentation",
      content:
        "Let's face it, forms are really verbose in React. To make matters worse, most form helpers do wayyyy too much magic and often have a significant performance cost associated with them. Formik is a small library that helps you with the 3 most annoying parts:Getting values in and out of form state Validation and error messages  Handling form submission  By colocating all of the above in one place, Formik will keep things organized--making testing, refactoring, and reasoning about your forms a breeze",
      articleUrl: "https://formik.org/docs/overview",
      created: "1 day",
    },
    {
      id: 2,
      title: "Understanding React 'setState'",
      content:
        "React components can, and often do, have state. State can be anything, but think of things like whether a user is logged in or not and displaying the correct username based on which account is active. Or an array of blog posts. Or if a modal is open or not and which tab within it is active.React components with state render UI based on that state. When the state of components changes, so does the component UI. That makes understanding when and how to change the state of your component important. At the end of this tutorial, you should know how setState works, and be able to avoid common pitfalls that many of us hit when when learning React.",
      articleUrl: "https://css-tricks.com/understanding-react-setstate/",
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
      title: "5 Ways to Style React Components in 2020",
      content:
        "React components are the building blocks of our applications’ UI in 2020. As visual elements, styling them is a big part of how applications actually meet our users, and composes the way our brand and product looks and feels.",
      articleUrl:
        "https://blog.bitsrc.io/5-ways-to-style-react-components-in-2019-30f1ccc2b5b",
      created: "10 days",
    },
  ],
  devprojects: [
    {
      id: 1,
      title: "Vue.js ",
      content: "Prepare documentation for Pharmacy Website project. ",
      created: "1 day",
      name: "Anna_karenina",
    },
    {
      id: 2,
      title: "Validation",
      content: "Do React validation for app Notes Projects",
      created: "1 day",
      name: "Michael",
    },
    {
      id: 3,
      title: "To do app",
      content: "Create to do app for school",
      created: "5 days",
      name: "Anna, Mike",
    },
    {
      id: 4,
      title: "Tech doucmentation",
      content: "Tech documentaion for my website",
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
