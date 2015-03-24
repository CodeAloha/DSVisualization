/*
	Define Modules, Routes and Dependencies
*/
angular.module("ds-app", ['ui.router'])
	.config(function ($stateProvider, $urlRouterProvider){
		$stateProvider
			.state('home', {
				url: "/",
				templateUrl: "views/app.html",
				abstract: true
			})
			.state('home.binary-tree', {
				url: "binary-tree",
				templateUrl: "views/binary-tree.html"
			})
			.state('home.quick-sort', {
				url: "quick-sort",
				templateUrl: "views/quick-sort.html"
			});
		$urlRouterProvider.otherwise("/binary-tree");
	});

/*
	Define Controllers, compile into services.
*/
angular.module("ds-app")
	.controller("launchApp", function ($scope){

		$scope.exec = function(){
			console.log( $scope.searchValue );
			if($scope.searchValue == undefined){
				alert("Please Enter a value from 1, to 99.");
			}
			var bst = new BinaryTree();
			bst.resetTree();
			bst.generateTree(31);

			bst.dfs( $scope.searchValue );

		}
	})
	.controller("getWeek", function ($scope, $http){
		//?
	});

