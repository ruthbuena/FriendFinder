var path = require("path");

var friendData = require("../data/friends.js");

module.exports = function(app) {

  // GET route used to display JSON of all possible friends
  app.get('./api/friends', function(req, res) {
    res.json(friendData);
  });

  // POST route used to handle incoming results and compatibility
  app.post('/api/friends', function(req, res) {

    var theOne ={
      name: "",
      image: "",
      totDiff: 1000
    };

    var userInfo = req.body;
    var diff = [];


    // Intial Loop for first person

    if (friendData.length > 1) {
      friendData.forEach(function(user) {
        var totalDiff = 0;

        // for (var i = 0; i < [friendData].length - 1; i++) {
        //   console.log(friendData[i].name);
        //   diff = 0;

        // Compare total to other users
        for (var i = 0; i < userInfo.answers; i++) {

          var scoreOne = user.answers[i];
          var scoreOther = scoreOther.answers[i];
          var difference = scoreOne - scoreOther;
          totalDiff = diff;
        }
        // var userScore = userInfo.score;

        diff.push(totalDiff);
      });

      var closestBff = Math.min.apply(null, diff);

      var bff = [];

      // Second for loop for person to match against
      for (var i = 0; i < diff.length; i++) {
        if (diff[i] === closestBff) {
          bff.push(friendData[i]);
        }
      }

      res.json(bff);
    } else {

      res.json(theOne);
    }
    friendData.push(userInfo);
  });

};
