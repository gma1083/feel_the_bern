if (Meteor.isClient) {
  Template.add_player.events({
    'submit form' : function (event){
      event.preventDefault(); // we decide the rules
      createPlayer();
    }
  });
}

function createPlayer() {
  var name = event.target.playerName.value;
  var party = event.target.party.value;
  var state = event.target.state.value;
  var positions = getPositions();
  var polls = event.target.polls.value;
  var funding = event.target.funding.value;
  var bonus = event.target.bonus.value;
  var cost = event.target.cost.value;
  players.insert({
    playerName: name,
    party: party,
    state: state,
    positions: positions,
    polls: polls,
    funding: funding,
    bonus: bonus,
    cost: cost
  });
}

function getPositions() {
  console.log("nick");
  var positions = [];
  var inputElements = document.getElementsByClassName('position');
  //console.log(inputElements);
  for(var i=0; inputElements[i]; ++i){
        if(inputElements[i].checked){
             positions.push(inputElements[i].value);
        }
  }
    console.log(positions);

  return positions;
}

