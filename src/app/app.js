angular.module('thunder', ['ui.router'])

.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider

        // HOME STATES AND NESTED VIEWS ========================================
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
            templateUrl: 'app/templates/mens.tpl.html'
        })
        .state('womens', {
            url: '/womens',
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
	$locationProvider.html5Mode(true);



});
