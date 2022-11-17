import Jwt from "jsonwebtoken";

const generateToken = (id) => {
  return Jwt.sign({ id }, "9ACHproject", {
    expiresIn: "30d",
  });
};
export default generateToken;
