if (Meteor.isClient) {
  Template.add_player.events({
    'submit form': function (event){
      event.preventDefault(); // we decide the rules
      var name = event.target.playerName.value;
      var party = event.target.party.value;
      var state = event.target.state.value;
      var bonus = event.target.bonus.value;
      var cost = event.target.cost.value;
      var polls = event.target.polls.value;
      var funding = event.target.funding.value;
      players.insert({
        playerName: name,
        party: party,
        state: state,
        bonus: bonus,
        cost: cost,
        polls: polls,
        funding: funding
      });
    }
  });
}