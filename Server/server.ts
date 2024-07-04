import express, { Application } from "express";
import { DataSource, DataSourceOptions } from "typeorm";
import { mock } from "./Entities/mock";
import * as dotenv from "dotenv";
import dbOptions = require("../ormconfig.json");

dotenv.config();

export const app: Application = express();


export const appDataSource = new DataSource(
  dbOptions.DataSourceOptions as DataSourceOptions,
);

appDataSource
  .initialize()
  .then(async () => {
    console.log("Database successfully connected!");
    const mockRepository = appDataSource.getRepository(mock);
    console.log("here i am");
//
//     // Define the POST route
//     app.post("/add-user", async (req, res) => {
//       try {
//         const { firstName, lastName, password, isActive } = req.body;
//
//         const newUser = new mock();
//         newUser.firstName = firstName;
//         newUser.lastName = lastName;
//         newUser.password = password;
//         newUser.isActive = isActive;
//
//         await mockRepository.save(newUser);
//
//         res.status(201).send(`User ${newUser.firstName} ${newUser.lastName} added successfully!`);
//       } catch (error) {
//         console.error("Error saving user:", error);
//         res.status(500).send("Error saving user.");
//       }
//     });
//
  })
  .catch((err) => console.log("Error connecting the database", err));

const PORT = process.env.PORT || 3000;
app.listen(PORT, (err? : Error) => {
  if (err) console.log(err);
  else console.log(`http://localhost:${PORT}`);
});
