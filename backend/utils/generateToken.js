import Jwt from "jsonwebtoken";

const generateToken = (id, name) => {
  return Jwt.sign({ id, name }, "9ACHproject", {
    expiresIn: "30d",
  });
};
export default generateToken;
