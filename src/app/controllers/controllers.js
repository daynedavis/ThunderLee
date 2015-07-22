angular.module("thunder.controllers", ['stripe.checkout', 'thunder.service'])

.controller("SuccessController", function($scope, $rootScope) {
	$rootScope.cart = {};
    localStorage.setItem('cart', JSON.stringify($rootScope.cart));
})

.controller("CartController", function($scope, $rootScope, Order, $state) {
	$scope.cart = $rootScope.cart;
	$scope.cartTotal = 0;

	_.forEach($scope.cart, function(item) {
		$scope.cartTotal+= item.quantity * 30;
	});

	$scope.checkout = function(token) {
		token.cartData = localStorage.getItem('cart');
		Order.create({data: token}).then(function(res) {
			if (res.data === 'error') {
				$state.go('error');
			} else {
				$state.go('success');
			}
		});
	};
})

.controller("ItemController", function($scope, $rootScope, $stateParams) {
	$scope.shirt = $stateParams.itemName;

	$scope.largeImg = $rootScope.itemInfo[$scope.shirt].imgLarge;
	$scope.smallImg1 = $rootScope.itemInfo[$scope.shirt].imgSmall1;
	$scope.smallImg2 = $rootScope.itemInfo[$scope.shirt].imgSmall2;
	$scope.itemText = $rootScope.itemInfo[$scope.shirt].text;

	$scope.addItem = function(size, quantity) {
		if (!size || !quantity) {
			alert('Please select size and quantity');
		} else {
			var key = $scope.shirt + '/' + size;
			$rootScope.cart[key] = $rootScope.cart[key] || {};
			$rootScope.cart[key].name = $scope.shirt;
			$rootScope.cart[key].size = size;
			$rootScope.cart[key].quantity = $rootScope.cart[key].quantity || 0;
			$rootScope.cart[key].quantity = $rootScope.cart[key].quantity + parseInt(quantity);
	    	localStorage.setItem('cart', JSON.stringify($rootScope.cart));
			alert('Item added!');
		}
	};
});
