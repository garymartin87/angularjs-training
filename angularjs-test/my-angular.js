var app = angular.module('app', []);
app.controller('ItemsController', ItemsController);

function ItemsController($scope) {
  $scope.items = [
    {id: 1, name: 'Item 1'},
    {id: 2, name: 'Item 2'},
    {id: 3, name: 'Item 3'},
    {id: 4, name: 'Item 4'}
  ];

  $scope.destroy = function(item) {
    var index = $scope.items.indexOf(item);
    $scope.items.splice(index, 1);
  };
}