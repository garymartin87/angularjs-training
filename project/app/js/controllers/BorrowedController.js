app.controller('BorrowedController', function($scope, ComicsDataService, UsersDataService, $sessionStorage, $state) {
  this.userLogged = $sessionStorage.userLogged;
  this.comics = this.userLogged.borrowed;
  angular.forEach(this.comics, function (comic) {
    comic.stars = parseFloat(comic.stars);
  });

  this.logout = function() {
    delete $sessionStorage.userLogged;
    $state.go('login');
  }

  this.goToMyBorrowedComics = function() {
    $state.go('borrowed');
  }

  this.goToHome = function() {
    $state.go('home');
  }
});