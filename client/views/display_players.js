if (Meteor.isClient){

	Template.display_players.events({
		'click .reactive-table tbody tr': function (event) {
	//	console.log(this._id);
		var currUser = Meteor.user();
		var currTeam = teams.findOne({owner: currUser.emails[0].address});
		var currPlayers = currTeam.my_team;
		//Condition, PLayer on Team?
		currPlayers = currPlayers.push(this._id);
		teams.update(this._id, {
			$set : {my_team : currPlayers}
		});
		console.log(currPlayers);

		}
	});

	Template.display_players.helpers({
		settings: function () {
			return {
				collection: players,
				class: "table",
				rowsPerPage: 20,
				showFilter: false,
				showNavigation: true,
				fields: [
					{ key: 'playerName', label: 'Player' },
					{ key: 'polls', label: 'Polls' },
					{ key: 'funding', label: 'Funding' },
					{ key: 'bonus', label: 'Bonus' },
					{ key: 'cost', label: 'Cost' },
					{ key: 'party', label: 'Party', hidden: true,
						cellClass: function () {
							var css = 'test';
							return css;
						}
					}
				]
			};
		}
	});
}

