if (Meteor.isClient) {
  Template.add_player.events({
    'submit form': function (event){
      event.preventDefault(); // we decide the rules
    }
  });
}