// Creates a team
Template.createTeam.events({
	'submit form .createTeam' : function (event, template){
  		event.preventDefault(); // we decide the rules
  		var name = event.target.teamName.value;
		Meteor.call('createTeam', name, function(error){
			if(error) return alert(error.reason);
		});
  		template.find("form").reset();
	}
});
