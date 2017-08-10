var friendData=require("../data/friends.js");
var path=require("path");

var compatico = 0;

module.exports = function(app) {

// GET route used to display JSON of all possible friends
  app.get('./api/friends', function(req, res) {
    res.json(friends);
  });

// POST route used to handle incoming results and compatibility
  app.post('/api/friends', function(req, res) {

    var match = {
      name: "",
      image: "",
      matchScore: 1000
    };

    var userInfo = req.body;
    var userName = userInfo.name;
    var userImage = userInfo.image;
    var userScore = userInfo.score;

    var diff = 0;

// Intial Loop for first person
    for (var i = 0; i < [friends].length - 1; i++) {
      console.log(friends[i].name);
      diff = 0;

// Second for loop for person to match against
      for (var j = 0; j < 10; j++) {
        if (diff <= match.friend.Difference) {

          match.name = friends[i].name;
          match.photo = friends[i].photo;
          match.matchScore = diff;
        }
      }
    }

    friends.push(userInfo);

    res.json(match);

  });

};
