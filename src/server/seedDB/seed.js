import { MongoClient } from "mongodb";
import mongoose from "mongoose";
import data from "./data";

MongoClient.connect("mongodb://localhost:27017", (err, client) => {
  if (err) {
    return console.log("Could not connect");
  }
  console.log("Connected");

  const nameDB = "Masters_thesis_DB";
  const DB = client.db(nameDB);
  DB.dropDatabase()
    .then(() => {
      const insertToDB = ({ collectionName, rows }) => {
        const collection = DB.collection(collectionName);

        collection
          .insertMany(rows)
          .then(value => console.log(value))
          .catch(err => console.log(err));
      };
      data.forEach(insertToDB);

      client.close();
    })
    .catch(error => {
      console.error(error);
      client.close();
    });
});
