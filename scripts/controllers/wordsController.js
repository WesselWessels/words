angular
	.module('words')
		.controller('wordsController', function($scope, $window, wordsService) {
			$scope.hello = "Yoyoyo";
			$scope.words = theWords();
			$scope.fontSize = 40;

			$scope.getWords = function() {
				theWords();

			}

			$scope.changeColor = function(one, two) {

				var currentColor = $scope.myColors[one][two];
				var newColor = "transparent";
				if (currentColor == "transparent") {
					newColor = "red";
				} else if (currentColor == "red") {
					newColor = "blue";
				} else if (currentColor == "blue") {
					newColor = "grey";
				} else if (currentColor == "grey")  {
					newColor = "black";
				} else {
					newColor = "transparent";
				}
				$scope.myColors[one][two] = newColor;

			}

			$scope.textColor = function(one, two) {
				var currentColor = $scope.myColors[one][two];
				var newColor = "white";
				if (currentColor == "transparent") {
					newColor = "black";
				} else if (currentColor == "red") {
					newColor = "black";
				} else {
					newColor = "white";
				}
				return newColor;
			}

			function theWords() {
				var result = wordsService.getRandomWords();
					console.log(result);
					$scope.myColors = getColors(5);
					$scope.words = result;
					$scope.apply;
					// return(result);

			}

			function getColors(size) {
				var result = [];
				for (var i = 0; i < size; i++) {
					var temp = [];
					for (var j = 0; j < size; j++) {
						temp.push("transparent");
					}
					result.push(temp);
				}
				return result;
			}
			$scope.myColors = getColors(5);
			theWords();
		});
