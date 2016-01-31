if (Meteor.isClient){
	Template.display_players.helpers({
		settings: function () {
			return {
				collection: players,
				class: "table table-bordered table-hover",
				rowsPerPage: 20,
				showFilter: false,
				showNavigation: true,
				fields: [
					{ key: 'playerName', label: 'Player' },
					{ key: 'polls', label: 'Polls' },
					{ key: 'funding', label: 'Funding' },
					{ key: 'bonus', label: 'Bonus' },
					{ key: 'cost', label: 'Cost' },
					{label: 'button'}
				]
			};
		}
	});
}