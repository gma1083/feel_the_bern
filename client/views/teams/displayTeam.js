Template.displayTeam.events({
	'click .reactive-table tbody tr': function(event){
		if (event.target.className == 'delete') {
			console.log(this);
			Meteor.call('deleteTeam', this._id, function(error){
				if(error) return alert(error.reason);
			});
		}
		
	}
});

Template.displayTeam.helpers({
	settings: function () {
		return {
			collection: teams,
			class: "table",
			rowsPerPage: 20,
			showFilter: false,
			showNavigation: true,
			fields: [
				{ key: 'teamName', label: 'Team' },
				{ key: 'delete', label: '', fn: function () { return new Spacebars.SafeString('<button type="button" class="delete">Delete</button>') } }
			]
		};
	}
});