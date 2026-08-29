export const authencateUser = async (req, res, next) => {
  console.log("auth middleware");
  next();
};
