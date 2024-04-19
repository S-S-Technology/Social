import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import {
  login,
  register,
  router,
  addPost,
  ListPost,
} from "./routes/authRoutes.js";
import { auth } from "./middleware/auth.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  // console.log(req.body);
  next();
});

app.post("/login", login);
app.post("/register", register);

app.post("/post", auth, addPost);
app.post("/listpost", auth, ListPost);

app.use("/auth", router);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
