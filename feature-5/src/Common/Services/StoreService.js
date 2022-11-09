import Parse from "parse";

export const getAllItems = () => {
  const Item = Parse.Object.extend("item");
  const query = new Parse.Query(Item);
  return query.find().then((results) => {
    return results;
  });
};

// This parsing gets the data from the items that are
// stored in the database
