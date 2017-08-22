var path = require("path");

var friendData = require("../data/friends.js");
// var userInput = require("../public/survey.html");

module.exports = function(app) {

  // GET route used to display JSON of all possible friends
  app.get('/api/friends', function(req, res) {
    res.json(friendData);
  })

  // POST route used to handle incoming results and compatibility
  app.post('/api/friends', function(req, res) {

    friendData.push(req.body);

    var diff = [];

    for(var x=0; x<req.body.scores.length; x++){
      diff.push(parseInt(req.body.scores[x]));
    }

    var theOne = {
      name: req.body.name,
      image: req.body.photo,
      scores: diff
    };

    var bff = [];


  //
  //   // Intial Loop for first person
  //
  //   if (friendData.length > 1) {
  //     friendData.forEach(function(user) {
  //       var totalDiff = 0;
  //
  //       // for (var i = 0; i < [friendData].length - 1; i++) {
  //       //   console.log(friendData[i].name);
  //       //   diff = 0;
  //
        // Compare total to other users
        for (var i = 0; i < friendData.length-1; i++) {

          var diffUser = 0;
          var oneUser = [];

          for(var j=0; j<friendData[i].scores.length; j++){
            var allLeft= Math.abs(friendData[i].scores[j]-theOne.scores[j]);
            oneUser.push(allLeft);
            diffUser+=allLeft;
          }

          bff.push(diffUser);

          Array.min=function(bff){
            return Math.min.apply(Math, bff);
          };

          var scoreOne=Array.min(bff);
          var scoreOther=bff.indexOf(scoreOne);
          var funOne=friendData[scoreOther];

          res.json(funOne);

          diffUser=0;
      }
    })
  }

//           var scoreOne = user.answers[i];
//           var scoreOther = scoreOther.answers[i];
//           var difference = +scoreOne - +scoreOther;
//           totalDiff += diff;
//         }
//         // var userScore = userInput.score;
//
//         diff.push(totalDiff);
//       });
//
//       var closestBff = Math.min.apply(null, diff);
//
//       var bff = [];
//
//       // Second for loop for person to match against
//       for (var i = 0; i < diff.length; i++) {
//         if (diff[i] === closestBff) {
//           bff.push(friendData[i]);
//
//       res.json(bff);
//
//     } else {
//
//       res.json(theOne);
//     }
//     friendData.push(userInput);
//   };
//
// };
