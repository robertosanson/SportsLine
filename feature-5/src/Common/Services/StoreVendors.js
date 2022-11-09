import Parse from "parse";

export const getAllVendor = () => {
  const Vendor = Parse.Object.extend("vendor");
  const query = new Parse.Query(Vendor);
  return query.find().then((results) => {
    return results;
  });
};

// This parsing gets the data from the vendors that are
// stored in the database

export const getVendorById = (id) => {
  const Vendor = Parse.Object.extend("vendor");
  const query = new Parse.Query(Vendor);
  return query.get(id).then((result) => {
    return result;
  });
};
