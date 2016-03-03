var gemStore = angular.module('gemStore', []);
gemStore.controller('MessagesController', MessagesController);
gemStore.controller('StoreController', StoreController);
gemStore.controller('TabController', TabController);

function MessagesController($scope) {
  $scope.welcome = "Hello, Angular!";
}

function StoreController($scope) {
	$scope.gems = [
		{
			name: "Azurite",
			price: 110.50,
			description: "asdasdasd",
			canPurchase: true,
			soldOut: false,
			images: ['gem-01.gif','gem-02.gif','gem-03.gif']
		},
		{
			name: "Bloodstone",
			price: 25,
			description: "asdasdasd",
			canPurchase: true,
			soldOut: false,
			images: ['gem-04.gif','gem-05.gif','gem-06.gif']
		},
		{
			name: "Zircon",
			price: 56,
			description: "asdasdaasdasdsd",
			canPurchase: true,
			soldOut: false,
			images: ['gem-07.gif','gem-08.gif','gem-09.gif']
		}
	];

	$scope.soldOut = function(gem) {
		var index = $scope.gems.indexOf(gem);
    $scope.gems[index].soldOut = true;
	}
}

function TabController($scope) {
	$scope.tab = 1;
	
	$scope.setTab = function(newValue) {
		console.log("asdasd");
		$scope.tab = newValue;
	};

	$scope.isSet = function(tabName) {
		console.log("asd");
    return $scope.tab === tabName;
  };
}