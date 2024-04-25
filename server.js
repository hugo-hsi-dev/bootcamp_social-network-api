import express from 'express';
import db from './config/connection.js';
import User from './models/User.js';

console.log(db);

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server is running at http://localhost:${PORT}`);
  });
});
