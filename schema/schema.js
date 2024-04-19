import { sql } from "drizzle-orm";
import { mysqlTable, varchar, text } from "drizzle-orm/mysql-core";

export const users = mysqlTable("users", {
  id: varchar("id", { length: 100 })
    .primaryKey()
    .default(sql`(uuid())`)
    .notNull(),
  username: text("username"),
  password: text("password"),
  contact: varchar("contact", { length: 11 }),
});

export const postsSchema = mysqlTable("posts", {
  id: varchar("id", { length: 100 })
    .primaryKey()
    .default(sql`(uuid())`)
    .notNull(),
  title: text("title"),
  description: text("description"),
  postby: text("postby").references(() => users.id),
});
