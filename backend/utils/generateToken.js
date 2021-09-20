import jwt from "jsonwebtoken";

//takes id from database and returns it in the form of an ecrypted token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

export default generateToken;
