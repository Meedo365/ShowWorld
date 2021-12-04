const Movie = require('../../models/movie');
const multer = require('multer');
const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, './uploads/')
	},
	filename: function (req, file, cb) {
		cb(null, new Date().getMilliseconds() + file.originalname);
	}
});
const upload = multer({ storage: storage }).single('image');

let routes = (app) => {
	app.all('/movies', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next()
  });
	app.post('/movie', async (req, res) => {
		upload(req, res, async (err) => {
			if (err) {
				console.log(err);
			} else {
				if (req.file) {
					console.log("wow")

					req.body.image = '/' + req.file.path;
					try {
						let movie = new Movie(req.body);
						console.log("yes")
						await movie.save();
						res.json(movie)
					}
					catch (err) {
						console.log("why")

						res.status(500).send(err);
					}
				}
			}
		});

	});

	app.get("/movies", async (req, res) => {
		try {
			let movies = await Movie.find();
			res.json(movies)
		}
		catch (err) {
			res.status(500).send(err);
		}

	});
	app.get("/moviess/:cinema", async (req, res) => {
		try {
			let movies = await Movie.find({ company: req.params.cinema }).limit(4);
			res.json(movies)
		}
		catch (err) {
			res.status(500).send(err);
		}

	});
	app.put("/movie/:id", async (req, res) => {
		try {
			let movies = await Movie.updateOne({ _id: req.params.id }, req.body);
			res.json(movies);
		}
		catch (err) {
			res.status(500).send(err)
		}
	});
	// single movie
	app.get("/movie/:id", async (req, res) => {
		try {
			let movies = await Movie.findOne({ _id: req.params.id });
			res.json(movies);
		}
		catch (err) {
			res.status(500).send(err)
		}
	});
	// delete a movie
	app.delete("/movie/:id", async (req, res) => {
		try {
			let movie = await Movie.deleteOne({ _id: req.params.id }, req.body);
			res.json(movie);

		}
		catch (err) {
			res.status(500).send(err)
		}
	});
	// search
	app.get("/search", async (req, res) => {
		try {
			// console.log(req.body)
			// const title = req.body
			const movies = await Movie.find({ title: { $regex: req.query.title } })
			console.log(movies)
			res.json({ movies });
		}
		catch (err) {
			res.status(500).send(err)
		}
	});

}

module.exports = routes;
