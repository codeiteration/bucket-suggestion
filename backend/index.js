const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const helmet = require("helmet");
const morgan = require('morgan');
const listEndpoints = require('express-list-endpoints')



app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(helmet());
app.use(morgan("dev"));

const router = require('./routes')
app.use('/api/v1', router)


app.listen(port, () => {
  console.log(`Server is running at: http://localhost:${port}`);
  console.log(listEndpoints(app));
});