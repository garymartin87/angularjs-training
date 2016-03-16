app.controller('LoginController', function(UsersDataService) {
  this.checkCredentials = function(user) {
    return UsersDataService.get(user);
  };
});