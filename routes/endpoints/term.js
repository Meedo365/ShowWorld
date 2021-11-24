let Terms = require("../../models/terms")

let routes = (app) => {
    app.post('/terms-and-conditions', async (req, res) => {
        try {
            let newterms = new Terms(req.body);
            await newterms.save()
            res.json(newterms)
        }
        catch (err) {
            res.status(500).send(err);
        }
    });

    app.get('/terms-and-conditions', async (req, res) => {
        try {
            let terms = await Terms.find();
            res.json(terms)
        }
        catch (err) {
            res.status(500).send(err)
        }
    });

    app.put("/terms-and-conditions/:id", async (req, res) => {
        try {
            let term = await Terms.updateOne({ _id: req.params.id }, req.body);
            return res.json(term)
        }
        catch (err) {
            res.status(500).send(err)
        }
    });

    app.delete("/terms-and-conditions/:id", async (req, res) => {
        try {
            let term = await Terms.findOneAndRemove({ _id: req.params.id });
            return res.json(term)
        }
        catch (err) {
            res.status(500).send(err)
        }
    });

}

module.exports = routes;
