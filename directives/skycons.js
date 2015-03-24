angular.module("WeatherApp")
	.directive("skycon", function(){
		return {
			restrict: 'E',
			scope: {
				condition: '='
			},
			template: '<canvas id="icon1" width="128" height="128"></canvas>',
			link: function($scope, elm, attr){

				var state;

				switch ($scope.condition) {
				    case "Cloudy":
				        state = Skycons.PARTLY_CLOUDY_DAY;
				        break;
				    case "Sunny":
				        state = Skycons.CLEAR_DAY;
				        break;
				    case "Snow":
				       	state = Skycons.SNOW;
				        break;
				    case "Windy":
				       	state = Skycons.WIND
				        break;
				    case "Foggy":
				        state = Skycons.FOG;
				        break;
				   	default:
				   		state = Skycons.PARTLY_CLOUDY_DAY;
				}

			    var skycons = new Skycons({"color": "#ffb74d"});
			    skycons.add("icon1", state);
			    skycons.play();
			}
		}
	})