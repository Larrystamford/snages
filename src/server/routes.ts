import * as express from "express";

import DB from "./db";

const router = express.Router();

router.get("/api/hello", (req, res, next) => {
  res.json("World");
});

router.get("/api/internships", async (req, res) => {
  try {
    let internship = await DB.internships.all();
    res.json(internship);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

export default router;
