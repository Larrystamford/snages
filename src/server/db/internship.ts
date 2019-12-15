import { Connection } from "./index";
import { rejects } from "assert";

export const all = async () => {
  return new Promise((resolve, reject) => {
    Connection.query(
      // "SELECT * from internsUbuntu.internsPostings",
      "SELECT * FROM database_test.internpostings",
      (err, results) => {
        if (err) {
          return reject(err);
        }
        resolve(results);
      }
    );
  });
};

export default {
  all
};
