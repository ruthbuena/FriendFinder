// Dependency for Path
var path=require("path");

module.exports = function(app){

// GET route which will display survey page
  app.get('/survey', function(req,res){
    res.sendFile(path.join(__dirname + '/../public/survey.html'));
  });

// USE route which will display home page
  app.use(function(req,res){
    res.sendFile(path.join(__dirname + '/../public/home.html'));
  });
}
