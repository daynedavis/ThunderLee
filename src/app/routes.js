angular.module("thunder.routes", ["ui.router"])

.config(function($stateProvider) {
	$stateProvider

	.state("home", {
		url: "/#/home",
		views: {
			"main@": {
				templateUrl: "./src/app/templates/home.tpl.html"
			}
		}
	});

});
