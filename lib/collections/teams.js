teams = new Mongo.Collection("teams");

Meteor.methods({
	createTeam: function(name) {
		if(Meteor.user()){
		    teams.insert({
		      teamName: name,
		      teamManager: Meteor.userId(),
		    });	
		}	
	},
	deleteTeam: function(id){
		teams.remove(id);
	}
});