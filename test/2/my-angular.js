var app = angular.module('app', []);

app.directive('modelsTable', function() {
  return {
    restrict: 'E',
    templateUrl: 'views/models-table.html',
    replace: true,
    link: function(scope, element, attrs) {
      scope.models = scope.$eval(attrs.models);
      scope.columns = attrs.columns.split(",");
    }
  };
});
app.controller('ItemsController', function($scope, $location) {
  $scope.path = $location.path;
  $scope.items = [
    {name: 'Item 1', color: 'green', price: 5.0},
    {name: 'Item 2', color: 'blue', price: 4.93}
  ];
});