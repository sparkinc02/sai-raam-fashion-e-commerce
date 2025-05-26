import express from "express";

const app = express();
const port = 3000;

app.get("/", (req: any, res: { send: (arg0: string) => void }) => {
  res.send("Hello from Bun + Express!");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
