import { Router } from "express";
import User from "../models/user.model";

const route = Router();
route.get("/", async (req, res) => {
  const users = await User.find();
  res.status(200).json(users);
});
export default route;
