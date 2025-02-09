const db = require("../models/index.js");


module.exports = function (app) {

    // GET all artwork

    app.get("/api/artwork/all", function (req, res) {
        db.Artwork.findAll({}).then(function (dbArtwork) {
            res.json(dbArtwork);
        });
    });

    // GET one artwork

    app.get("/api/:artwork", function (req, res) {
        db.Artwork.findAll({
            where: {
                artwork_name: req.params.artwork
            }
        }).then(function (dbArtwork) {
            res.json(dbArtwork);
        });
    });

    //Get artwork by style

    app.get("/api/artwork/:style", function (req, res) {
        db.Artwork.findAll({
            where: {
                style: req.params.style
            },
            include: [db.Style]
        }).then(function(dbArtwork) {
            res.json(dbArtwork)
        });
    });

    //Get artwork by artist

    app.get("/api/artwork/:artist", function (req, res) {
        db.Artwork.findAll({
            where: {
                artist: req.params.artist
            },
            include: [db.Artist]
        }).then(function(dbArtwork) {
            res.json(dbArtwork)
        });
    });


    // Create artwork
    app.post("/api/artwork", function (req, res) {
        db.Artwork.create(req.body).then(function(dbArtwork) {
            res.json(dbArtwork)
        })
    });


    // DELETE artwork
    app.delete("/api/artwork/:id", function (req,res) {
        console.log("Artwork ID:");
        console.log(req.params.id);
        db.Customer.destroy({
            where: {
                id: req.params.id
            }
        }).then(function () {
            res.end();
        });
    });


}