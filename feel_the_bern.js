if (Meteor.isClient) {

  Template.register.events({
      'submit form': function(event){
          event.preventDefault();
          var email = $('[name=email]').val();
          var password = $('[name=password]').val();
          Accounts.createUser({ //THIS DOESNT WORK!   @ password_client.js:119
              email: email,
              password: password
          });
          Router.go('home');
      }
  });

//HELP
  // Meteor.loginWithPassword(email, password, function(error){
  //   if(error){
  //       console.log(error.reason);
  //   } else {
  //       Router.go("home");
  //   }
  // });

  Template.login.events({
    'submit form': function(event){
        event.preventDefault();
        var email = $('[name=email]').val();
        var password = $('[name=password]').val();
        Meteor.loginWithPassword(email, password);
    }
  });



  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    }
  });

  Accounts.ui.config({
    passwordSignupFields: "USERNAME_AND_EMAIL"
  });
} // .isClient

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });


}
