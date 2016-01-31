if (Meteor.isClient){
  Template.register.events({
      'submit form': function(event){
          event.preventDefault();
          var email = event.target.registerEmail.value;
          var password = event.target.registerPassword.value;
          Accounts.createUser({
              email: email,
              password: password
          });
      }
  });

  Template.login.events({
    'submit form': function(event){
        event.preventDefault();
        var email = event.target.loginEmail.value;
        var password = event.target.loginPassword.value;
        Meteor.loginWithPassword(email, password);
    }
  });

  Template.dashboard.events({
    'click .logout': function(event){
      event.preventDefault();
      Meteor.logout();
    }
  });
}