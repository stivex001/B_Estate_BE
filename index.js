import express from "express";
import authRoute from "./routes/authRoute.js"

const app = express();

//   Routes
app.use("/api/v1/auth", authRoute);

const port = process.env.PORT || 8000;
app.listen(port, (err) => {
  if (err) throw err;
  console.log(`server succesfully running on ${port}`);
});
