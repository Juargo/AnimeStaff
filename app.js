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
		.when("/CatalogoPrincipal/seriesjapo/:option",{
			controller: "SeriesjapoController",
			templateUrl: "templates/Seriesjapo.html"
		})
		.when("/CatalogoPrincipal/seriesjapo/manga/:option",{
			controller: "MangatomosController",
			templateUrl:"templates/MangaTomos.html"
		})
})

