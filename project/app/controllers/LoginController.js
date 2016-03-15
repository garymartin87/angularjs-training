app.controller('LoginController', function(UsersDataServices) {
  
  this.checkCredentials = function(user) {
    return UsersDataServices.CheckCredentials(user);
  };

});