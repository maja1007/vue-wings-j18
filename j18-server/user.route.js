const express = require('express');
const userRoutes = express.Router();

// Require Users model in our routes module
let User = require('./models/user.model');

// POST: http://localhost:4000/users/add
userRoutes.route('/add').post(function (req, res) {
  let user = new User(req.body);
  user.save()
    .then(() => {
      res.status(200).json({'user': 'user is added successfully'});
    })
    .catch(() => {
      res.status(400).send("unable to save to database");
    });
});

// GET: http://localhost:4000/users/
userRoutes.route('/').get(function (req, res) {
    User.find(function(err, users){
    if(err){
      res.json(err);
    }
    else {
      res.json(users);
    }
  });
});


// GET: http://localhost:4000/users/5c2df7dd62a6192304aab3f3
userRoutes.route('/:id').get(function (req, res) {
  let id = req.params.id;
  User.findById(id, function (err, user){
      if(err) {
        res.json(err);
      }
      res.json(user);
  });
});

// GET: http://localhost:4000/users/edit/5c2df7dd62a6192304aab3f3
userRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  User.findById(id, function (err, user){
      if(err) {
        res.json(err);
      }
      res.json(user);
  });
});

//  POST: http://localhost:4000/users/update/5c2df7dd62a6192304aab3f3
userRoutes.route('/update/:id').post(function (req, res) {
    User.findById(req.params.id, function(err, user) {
    if (!user)
      res.status(404).send("data is not found");
    else {
        user.username = req.body.username;
        user.password = req.body.password;
        user.save().then(() => {
          res.json('Update complete');
      })
      .catch(() => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// DELETE: http://localhost:4000/users/delete/${id}
userRoutes.route('/delete/:id').delete(function (req, res) {
    User.findByIdAndRemove({_id: req.params.id}, function(err){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = userRoutes;