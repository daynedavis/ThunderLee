angular.module("thunder.controllers", [])

.controller("ListController", function($scope, $rootScope) {
	console.log('List controller');
})

.controller("CartController", function($scope, $rootScope) {
	$scope.cart = $rootScope.cart;
	$scope.cartTotal = 0;
	_.forEach($scope.cart, function(item) {
		$scope.cartTotal+= item.quantity * 30;
	});
	console.log($scope.cartTotal);
	$scope.checkout = function(cart) {

	};
})

.controller("ItemController", function($scope, $rootScope, $stateParams) {
	$scope.shirt = $stateParams.itemName;

	$scope.largeImg = $rootScope.itemInfo[$scope.shirt].imgLarge;
	$scope.smallImg1 = $rootScope.itemInfo[$scope.shirt].imgSmall1;
	$scope.smallImg2 = $rootScope.itemInfo[$scope.shirt].imgSmall2;
	$scope.itemText = $rootScope.itemInfo[$scope.shirt].text;

	$scope.addItem = function(size, quantity) {
		var key = $scope.shirt + '/' + size;
		$rootScope.cart[key] = $rootScope.cart[key] || {};
		$rootScope.cart[key].name = $scope.shirt;
		$rootScope.cart[key].size = size;
		$rootScope.cart[key].quantity = $rootScope.cart[key].quantity || 0;
		$rootScope.cart[key].quantity = $rootScope.cart[key].quantity + parseInt(quantity);
    	localStorage.setItem('cart', JSON.stringify($rootScope.cart));
	};
});
