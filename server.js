const express = require('express');
const mongoose = require('mongoose');
// const cors = require('cors');
// const multer = require('multer');
const app = express();
const routes = require('./routes')
// const PORT = 5100;
const port = process.env.PORT || 3000;
const CONNECTION_STRING = "mongodb+srv://showworld100:Showworld100@showworld.0rkoi.mongodb.net/ShowWorld?retryWrites=true&w=majority";
// const CONNECTION_STRING = "mongodb://localhost:27017/medium";
// const CONNECTION_STRING = "mongodb+srv://showworld100:Showworld100@showworld.0rkoi.mongodb.net/test?authSource=admin&replicaSet=atlas-ieb8b5-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true";
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

app.use('/uploads', express.static('uploads'));
app.use(express.static(path.join(__dirname, 'public')));



// app.listen(PORT);
// console.log("App is running on port: " + PORT);

app.listen(port, () => {
    console.log(`listening on port ${port} ...... `);
});
