if (Meteor.isClient) {
  Template.addPlayer.events({
    'submit form' : function (event, template){
      event.preventDefault();
      var player = {
        playerName: event.target.playerName.value,
        party: event.target.party.value,
        state: event.target.state.value,
        positions: getPositions(),
        polls: event.target.polls.value,
        funding: event.target.funding.value,
        bonus: event.target.bonus.value,
        cost: event.target.cost.value
      }
      Meteor.call('createPlayer', player, function(error){
        if(error) return alert(error.reason);
      });
      template.find("form").reset();
    }
  });
}

function getPositions(){
  var positions = [];
  var inputElements = document.getElementsByClassName('position');
  for(var i=0; inputElements[i]; ++i){
    if(inputElements[i].checked){
         positions.push(inputElements[i].value);
    }
  }
  return positions;
}

