import express from "express";

export const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  res.status(200).json({ text: "sauber yan" });
});

server.listen(1337, () => console.log("Sprintet"));
