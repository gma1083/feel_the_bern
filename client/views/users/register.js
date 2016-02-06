Template.register.events({
    'submit form': function(event){
        event.preventDefault()
        console.log("working")
        var user = {
        	email: event.target.registerEmail.value,
        	password: event.target.registerPassword.value 
        };
        Accounts.createUser({
            email: user.email,
            password: user.password
        }, function(error){
            if(error){
                alert("all your base")
            }
            else{
                Modal.hide()
            }
        });
    }
});