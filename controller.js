angular.module("AppCatalogo",[])
	.controller("IndexController",function($scope,$http){
		$http.get("Data/Tomos.json")
		.success(function(data){
				$scope.mangas = data;
				console.log($scope.mangas);
			})
		.error(function(err){

		});
    });
