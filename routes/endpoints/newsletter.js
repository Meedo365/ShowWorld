let Newsletter = require("../../models/newletters")

let routes = (app) => {
    app.post('/newsletter', async (req, res) => {
        try {
            let newNewsletter = new Newsletter(req.body);
            await newNewsletter.save()
            res.json(newNewsletter)
        }
        catch (err) {
            res.status(500).send(err);
        }
    });

    app.get('/newsletter', async (req, res) => {
        try {
            let newsletter = await Newsletter.find();
            res.json(newsletter)
        }
        catch (err) {
            res.status(500).send(err)
        }
    });

    app.put("/newsletter/:id", async (req, res) => {
        try {
            let newsletter = await Newsletter.updateOne({ _id: req.params.id }, req.body);
            return res.json(newsletter)
        }
        catch (err) {
            res.status(500).send(err)
        }
    });

    app.delete("/newsletter/:id", async (req, res) => {
        try {
            let newsletter = await Newsletter.findOneAndRemove({ _id: req.params.id });
            return res.json(newsletter)
        }
        catch (err) {
            res.status(500).send(err)
        }
    });

}

module.exports = routes;
