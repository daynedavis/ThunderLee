angular.module("thunder.routes", ["ui.router"])

.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider

        .state('home', {
            url: '/',
            templateUrl: 'app/templates/home.tpl.html'
        })
        .state('featured', {
            url: '/featured',
            templateUrl: 'app/templates/featured.tpl.html'
        })
        .state('mens', {
            url: '/mens',
            controller: "ListController",
            templateUrl: 'app/templates/mens.tpl.html'
        })
        .state('womens', {
            url: '/womens',
            controller: "ListController",
            templateUrl: 'app/templates/womens.tpl.html'
        })
        .state('cart', {
            url: '/cart',
            templateUrl: 'app/templates/cart.tpl.html'
        })
        .state('about', {
            url: '/about',
            templateUrl: 'app/templates/about.tpl.html'
        })
        .state('item', {
            url: '/item/:itemName',
            controller: "ItemController",
            templateUrl: 'app/templates/item.tpl.html'
        });

	$locationProvider.html5Mode(true);
});
