angular.module("WeatherApp")
	.directive("week", function(){
		return {
			restrict: 'E',
			scope: {
				data: "="
			},
			template: "<td>{{ day.date }}</td><td>{{ day.low }}&#176; - {{ day.high }}&#176; F</td><td>{{ day.text }}</td>",
			controller: function($scope){
				console.log($scope.data);
			}
		}
	})
