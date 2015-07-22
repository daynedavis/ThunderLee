angular.module("thunder.controllers", [])

.controller("ListController", function($scope, $rootScope) {
	console.log('List controller');
})

.controller("CartController", function($scope, $rootScope) {
	$scope.cart = $rootScope.cart;

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
		console.log(size, quantity);
	};
});
