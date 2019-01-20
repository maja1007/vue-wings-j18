const express = require('express');
const playerRoutes = express.Router();

// Require Player model in our routes module
let Player = require('./models/player.model');

// POST: http://localhost:4000/players/add
playerRoutes.route('/add').post(function (req, res) {
  let player = new Player(req.body);
  player.save()
    .then(() => {
      res.status(200).json({'player': 'player is added successfully'});
    })
    .catch(() => {
      res.status(400).send("unable to save to database");
    });
});

// GET: http://localhost:4000/players/
playerRoutes.route('/').get(function (req, res) {
    Player.find(function(err, players){
    if(err){
      res.json(err);
    }
    else {
      res.json(players);
    }
  });
});

// GET: http://localhost:4000/players/5c2df7dd62a6192304aab3f3
playerRoutes.route('/:id').get(function (req, res) {
  let id = req.params.id;
  Player.findById(id, function (err, player){
      if(err) {
        res.json(err);
      }
      res.json(player);
  });
});

// GET: http://localhost:4000/players/edit/5c2df7dd62a6192304aab3f3
playerRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Player.findById(id, function (err, player){
      if(err) {
        res.json(err);
      }
      res.json(player);
  });
});

//  POST: http://localhost:4000/players/update/5c2df7dd62a6192304aab3f3
playerRoutes.route('/update/:id').post(function (req, res) {
    Player.findById(req.params.id, function(err, player) {
    if (!player)
      res.status(404).send("data is not found");
    else {
        player.name = req.body.name;
        player.position = req.body.position;
        player.uclub = req.body.uclub;
        player.number = req.body.number;
        player.desc = req.body.desc;
        player.save().then(() => {
          res.json('Update complete');
      })
      .catch(() => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// DELETE: http://localhost:4000/players/delete/${id}
playerRoutes.route('/delete/:id').delete(function (req, res) {
    Player.findByIdAndRemove({_id: req.params.id}, function(err){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = playerRoutes;