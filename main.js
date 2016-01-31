//define collections
players = new Mongo.Collection("players");

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
