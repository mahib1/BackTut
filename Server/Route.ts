import { app } from './server';

app.get("/" , (req, res) => {
  res.send("Hello world!");
});

app.get("/home" , (req, res) => {
  res.send("I am MAHIB");
});

