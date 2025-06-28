import jwt from "jsonwebtoken";
import { envConfig } from "../config/config";

const generateToken = (userId: string) => {
  // token generate (jwt)
  const token = jwt.sign({ userId: userId }, "hello", {
    expiresIn: "1d",
  });
  return token;
};

export default generateToken;
