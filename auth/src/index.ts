import express from "express";
import 'express-async-errors'
import { json } from "body-parser";

import { currentUserRouter } from "./routes/current-user";
import { signinRouter } from "./routes/signIn";
import { signoutRouter } from "./routes/signOut";
import { signuptRouter } from "./routes/signUp";

import { errorHandler } from "./middlewares/error-handler";
import { NotFoundError } from "./errors/not-found";

const app = express();

app.use(json());

app.use(currentUserRouter);
app.use(signinRouter);
app.use(signoutRouter);
app.use(signuptRouter);

app.all("*", async (req, res) => {
  throw new NotFoundError();
});

app.use(errorHandler);

app.get("/api/my", (req, res) => {
  res.send("helloo");
});

app.listen(3000, () => {
  console.log("Listening port 3000!!");
});
