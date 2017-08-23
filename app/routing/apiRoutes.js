
var friendData = require("../data/friends.js");


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



    var diff = [];

    for (var i = 0; i<friendData.length; i++) {
      var goodFriend = friendData[i];


        var totalDiff = 0;

        for (var j = 0; j < goodFriend.scores.length; j++) {
          var balance = Math.abs(goodFriend.scores[j] - theOne.scores[j]);
          totalDiff += balance;
        }
        diff[i]=totalDiff;
      }



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


      })
  }
