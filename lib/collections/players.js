players = new Mongo.Collection("players");

Meteor.methods({
	createPlayer: function(player){
	    players.insert({
	      playerName: player.playerName,
	      party: player.party,
	      state: player.state,
	      positions: player.positions,
	      polls: player.polls,
	      funding: player.funding,
	      bonus: player.bonus,
	      cost: player.cost
	    });
	},
	deletePlayer: function(id){
		players.remove(id);
	}
});