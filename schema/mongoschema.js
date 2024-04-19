import { mongodb } from "../db/db_config.js";

const postSchema = mongodb.Schema({
  title: { type: String },
  descirption: { type: String },
  postedby: { type: String },
});

export const Post = mongodb.model("posts", postSchema);
