angular.module('gemStore', []);

angular.module('gemStore')
  .controller('MessagesController', function() {
  	this.welcome = "Hello Angular!";
  });

angular.module('gemStore')
  .controller('StoreController', function() {
		this.gems = [
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

		this.soldOut = function(gem) {
			var index = this.gems.indexOf(gem);
	    this.gems[index].soldOut = true;
		}
	});

angular.module('gemStore')
  .controller('TabController', function() {
		this.tab = 1;
		
		this.setTab = function(newValue) {
			this.tab = newValue;
		};

		this.isSet = function(tabName) {
	    return this.tab === tabName;
	  };
	});

angular.module('gemStore')
	.controller('GalleryController', function() {
		this.current = 0;

		this.setCurrent = function(newValue) {
			this.current = newValue || 0;
		}
	});