import { Router } from "express";
import useRouter from "./user.routes";
const route = Router();
route.use("/users", useRouter);
export default route;
