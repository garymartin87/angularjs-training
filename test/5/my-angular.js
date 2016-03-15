var app = angular.module('app', ['ngRoute']);

app.config(function($locationProvider) {
  $locationProvider.html5Mode(true);
});

app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      controller: 'ItemsController',
      template: '<div class="well well-sm" ng-bind="location"></div>\
                 <a ng-href="/angularjs-training/test/5/items?color=red">Red items</a>'
    })
    .when('/items', {
      controller: 'ItemsController',
      templateUrl: '/angularjs-training/test/5/views/items/index.html'
    });
});


app.factory('Item', function(filterFilter) {

  var items = [
    {id: 1, name: 'Item 1', color: 'red'},
    {id: 2, name: 'Item 2', color: 'blue'},
    {id: 3, name: 'Item 3', color: 'red'},
    {id: 4, name: 'Item 4', color: 'white'}
  ];

  return {
    query: function(params) {
      return filterFilter(items, params);
    },
    get: function(params) {
      return this.query(params)[0];
    }
  };
});


app.controller('ItemsController', function($scope, $location, Item) {
  $scope.location = $location.absUrl();
  $scope.items = Item.query({color: $location.search().color});
});