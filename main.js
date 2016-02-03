//define collections
players = new Mongo.Collection("players");
teams = new Mongo.Collection("teams");

Router.route('/', function () {
  this.render('home');
});

Router.route('/createTeam', function () {
	this.render('createTeam');
});

if (Meteor.isClient) {
  Accounts.ui.config({
    passwordSignupFields: "USERNAME_AND_EMAIL"
  });
} // .isClient

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });


}
