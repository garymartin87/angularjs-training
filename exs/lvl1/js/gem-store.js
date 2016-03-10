var gemStore = angular.module('gemStore', []);
gemStore.controller('MessagesController', MessagesController);
gemStore.controller('StoreController', StoreController);

function MessagesController($scope) {
  $scope.welcome = "Hello, Angular!";
}

function StoreController($scope) {
	$scope.gems = [


		{
			name: "Azurite",
			price: 110.50,
			canPurchase: true,
			soldOut: false,
		},
		{
			name: "Bloodstone",
			price: 25,
			canPurchase: true,
			soldOut: false,
		},
		{
			name: "Zircon",
			price: 56,
			canPurchase: true,
			soldOut: false,
		}
	];

	$scope.soldOut = function(gem) {
		var index = $scope.gems.indexOf(gem);
    $scope.gems[index].soldOut = true;
	}
}