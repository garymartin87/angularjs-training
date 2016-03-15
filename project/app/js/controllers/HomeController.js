app.controller('HomeController', function($scope, ComicsDataService) {
  $scope.comics = ComicsDataService.query();
});