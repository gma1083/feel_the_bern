if (Meteor.isClient){
  Template.register.events({
      'submit form': function(event){
          event.preventDefault();
          var email = event.target.registerEmail.value;
          var password = event.target.registerPassword.value;
          console.log("z");
          Accounts.createUser({
              email: email,
              password: password
          });
          console.log("a");
          createTeam(email);
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

function createTeam(email) {
  console.log("b");
  var owner = email;
  var money = 100;
  var my_team = [];

  teams.insert({
    owner: owner,
    money: money,
    my_team: my_team
  });
}