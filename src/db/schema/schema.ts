import {
  int,
  timestamp,
  mysqlTable,
  primaryKey,
  varchar,
  text,
} from "drizzle-orm/mysql-core";
import type { AdapterAccount } from "@auth/core/adapters";
import { relations, sql } from "drizzle-orm";

export const users = mysqlTable("user", {
  id: varchar("id", { length: 255 })
    .unique()
    .notNull()
    .primaryKey()
    .default(sql`(uuid())`),
  name: varchar("name", { length: 255 }),
  password: varchar("password", { length: 255 }),
  email: varchar("email", { length: 255 }).notNull(),
  emailVerified: timestamp("emailVerified", {
    mode: "date",
    fsp: 3,
  }).defaultNow(),
  image: varchar("image", { length: 255 }).default(
    "https://i.postimg.cc/zBZrVxBB/default-User.png"
  ),
});

export const usersRelations = relations(users, ({ many }) => ({
  shoes: many(shoes),
}));

export const accounts = mysqlTable(
  "account",
  {
    userId: varchar("userId", { length: 255 })
      .notNull()
      .default(sql`(uuid())`),
    type: varchar("type", { length: 255 })
      .$type<AdapterAccount["type"]>()
      .notNull(),
    provider: varchar("provider", { length: 255 }).notNull(),
    providerAccountId: varchar("providerAccountId", { length: 255 }).notNull(),
    refresh_token: varchar("refresh_token", { length: 255 }),
    access_token: varchar("access_token", { length: 255 }),
    expires_at: int("expires_at"),
    token_type: varchar("token_type", { length: 255 }),
    scope: varchar("scope", { length: 255 }),
    id_token: text("id_token"),
    session_state: varchar("session_state", { length: 255 }),
  },
  (account) => ({
    compoundKey: primaryKey(account.provider, account.providerAccountId),
  })
);

export const accountsRelation = relations(accounts, ({ one }) => ({
  user: one(users, {
    fields: [accounts.userId],
    references: [users.id],
  }),
}));

export const sessions = mysqlTable("session", {
  sessionToken: varchar("sessionToken", { length: 255 }).notNull().primaryKey(),
  userId: varchar("userId", { length: 255 }).notNull(),
  expires: timestamp("expires", { mode: "date" }).notNull(),
});

export const sessionsRelation = relations(sessions, ({ one }) => ({
  user: one(users, {
    fields: [sessions.userId],
    references: [users.id],
  }),
}));

export const verificationTokens = mysqlTable(
  "verificationToken",
  {
    identifier: varchar("identifier", { length: 255 }).notNull(),
    token: varchar("token", { length: 255 }).notNull(),
    expires: timestamp("expires", { mode: "date" }).notNull(),
  },
  (vt) => ({
    compoundKey: primaryKey(vt.identifier, vt.token),
  })
);

export const shoes = mysqlTable("shoe", {
  id: varchar("id", { length: 255 })
    .unique()
    .notNull()
    .primaryKey()
    .default(sql`(uuid())`),
  userId: varchar("userId", { length: 255 })
    .notNull()
    .default(sql`(uuid())`),
  distance: int("distance").notNull().default(0),
  name: varchar("name", { length: 255 }).notNull(),
  color: varchar("color", { length: 7 }).default("#000000"),
});

export const shoesRelation = relations(shoes, ({ one }) => ({
  user: one(users, {
    fields: [shoes.userId],
    references: [users.id],
  }),
}));
