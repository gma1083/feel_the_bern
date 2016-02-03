// Creates a team
Template.createTeam.events({
'submit form' : function (event){
  event.preventDefault(); // we decide the rules
  Team.createTeam();
}
});

Team = { 
  createTeam: function() {
    var name = event.target.teamName.value;
    teams.insert({
      teamName: name,
      teamManager: Meteor.userId(),
    });
  }
}
