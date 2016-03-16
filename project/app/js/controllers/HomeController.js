app.controller('HomeController', function($scope, ComicsDataService) {
  this.comics = ComicsDataService.query();
  this.newComic = {};

  this.addComic = function() {
  	this.newComic.cover = "no-image.png";

  	stars = [];
  	for (var i = 0; i <= this.newComic.stars; i++) {
  		k = i.toString();
  		stars.push({k:'s'});
  	};
  	this.newComic.stars = stars;

  	ComicsDataService.add(this.newComic);
  	this.newComic = {};
  }
});