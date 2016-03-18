app.controller('BorrowedController', function($sessionStorage) {
  this.userLogged = $sessionStorage.userLogged;
  this.comics = this.userLogged.borrowed;
  angular.forEach(this.comics, function (comic) {
    comic.stars = parseFloat(comic.stars);
  });
});