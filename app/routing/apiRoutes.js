
var friendData = require("../data/friends.js");
// var userInput = require("../public/survey.html");

module.exports = function(app) {

  // GET route used to display JSON of all possible friends
  app.get('/api/friends', function(req, res) {
    res.json(friendData);
  })

  // POST route used to handle incoming results and compatibility
  app.post('/api/friends', function(req, res) {
    var theOne=req.body;

    for(var i=0; i<theOne.scores.length; i++){
      if(theOne.scores[i] == "1 (Strongly Disagree)"){
        theOne.scores[i] = 1;
      } else if (theOne.scores[i] == "5 (Strongly Agree)"){
        theOne.scores[i] = 5;
      } else {
        theOne.scores[i] = parseInt(theOne.scores[i]);
      }
    }

    // friendData.push(req.body);

    // var diff = [];
    //
    // for(var x=0; x<req.body.scores.length; x++){
    //   diff.push(parseInt(req.body.scores[x]));
    // }
    //
    // var theOne = {
    //   name: req.body.name,
    //   image: req.body.photo,
    //   scores: diff
    // };
    //
    // var bff = [];


  //
  //   // Intial Loop for first person

    var diff = [];

    for (var i = 0; i<friendData.length; i++) {
      var goodFriend = friendData[i];

      // friendData.forEach(function(user) {
        var totalDiff = 0;

        for (var j = 0; j < goodFriend.scores.length; j++) {
          var balance = Math.abs(goodFriend.scores[j] - theOne.scores[j]);
          totalDiff += balance;
        }
        diff[i]=totalDiff;
      }

        //   console.log(friendData[i].name);
        //   diff = 0;
        //
        // // Compare total to other users
        // for (var i = 0; i < friendData.length-1; i++) {

          var diffUser = diff[0];
          var bff = 0;

          for(var i=1; i<diff.length; i++){
            if(diff[i]<diffUser){
              diffUser = diff[i];
              bff=i;
            }
          }

          friendData.push(theOne);

          res.json(friendData[bff]);

          //   var allLeft= Math.abs(friendData[i].scores[j]-theOne.scores[j]);
          //   oneUser.push(allLeft);
          //   diffUser+=allLeft;
          // }

          // bff.push(diffUser);
          //
          // Array.min=function(bff){
          //   return Math.min.apply(Math, bff);
          // };
          //
          // var scoreOne=Array.min(bff);
          // var scoreOther=bff.indexOf(scoreOne);
          // var funOne=friendData[scoreOther];
          //
          // res.json(funOne);
          //
          // diffUser=0;
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
