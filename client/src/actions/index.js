export const removeItem = (itemType, id) => {
  return {
    type: "REMOVE_ITEM",
    payload: {
      itemType,
      id,
    },
  };
};

export const addItem = (itemType, id) => {
  return console.log("add");
};
