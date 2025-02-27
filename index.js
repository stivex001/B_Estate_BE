import express from 'express';

const app = express();

const port = process.env.PORT || 8000;
app.listen(port, (err) => {
  if (err) throw err;
  console.log(`server succesfully running on ${port}`);
});