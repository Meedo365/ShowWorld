const express = require('express');
const mongoose = require('mongoose');
// const cors = require('cors');
// const multer = require('multer');
const app = express();
const routes = require('./routes')
// const PORT = 5100;
const port = process.env.PORT || 3000;
// const CONNECTION_STRING = "mongodb+srv://showworld100:Showworld100@showworld.0rkoi.mongodb.net/ShowWorld?retryWrites=true&w=majority";
const CONNECTION_STRING = "mongodb+srv://showworld100:*****@showworld.0rkoi.mongodb.net/ShowWorld";
const path = require('path');

mongoose.connect(CONNECTION_STRING, {
	useNewUrlParser: true,
	useUnifiedTopology: true
});

mongoose.connection.on('open', () => console.log("Mongo Running"));
mongoose.connection.on('error', (err) => console.log(err));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(cors());
app.use(routes);

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", '*');
  res.header("Access-Control-Allow-Credentials", true);
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
  next();
});

app.use('/uploads', express.static('uploads'));
app.use(express.static(path.join(__dirname, 'public')));



// app.listen(PORT);
// console.log("App is running on port: " + PORT);

app.listen(port, () => {
    console.log(`listening on port ${port} ...... `);
});
