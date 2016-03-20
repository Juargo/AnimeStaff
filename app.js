angular.module("AppPrincipal",["ngRoute"])
.config(function($routeProvider){
	$routeProvider
		.when("/",{
			controller: "HomeController",
			templateUrl:"templates/home.html"
		})
		.when("/CatalogoPrincipal/:option",{
			controller: "CatalogoController",
			templateUrl: "templates/CatalogoPrincipal.html"
		})
})

