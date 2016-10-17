var calculator = angular.module('calculator',[]);

calculator.controller('calculate',function($scope, $http){
	$scope.result=0;
	$scope.input="0";
	$scope.operation="+";
	$scope.otherError=true;
	$scope.error=true;
	$scope.calculate = function(){

		$http({
			method : "POST",
			url : '/calculate',
			data : {
				"operation" : $scope.operation,
				"result" : $scope.result,
				"input" : $scope.input
			}
		}).success(function(data) {
			//checking the response data for statusCode
			if (data.statusCode == 200) {
				$scope.result = data.result;
			}
			else
				{
				$scope.error = false;
				}
				//Making a get call to the '/redirectToHomepage' API
				//window.location.assign("/homepage"); 
		}).error(function(error) {
			$scope.otherError = false;
		});

	/*	if ($scope.operation == "+") {
			if(parseFloat($scope.input))
			{
				$scope.result=parseFloat($scope.result)+parseFloat($scope.input);
			}
		}
		if ($scope.operation == "-") {
			if(parseFloat($scope.input))
			{
				$scope.result=parseFloat($scope.result)-parseFloat($scope.input);
			}
		}
		if ($scope.operation == "*") {
			if(parseFloat($scope.input))
			{
				$scope.result=parseFloat($scope.result)*parseFloat($scope.input);
			}
		}
		if ($scope.operation == "/") {
			if(parseFloat($scope.input) && parseInt($scope.input)!=0)
			{
				$scope.result=parseFloat($scope.result)/parseFloat($scope.input);
			}
			else
			{
				$scope.show=true;
			}
		}

	*/
	};

	$scope.buttonPressed = function(value){
		if($scope.input == "0")
		{
			$scope.input = ""+value;
		}
		else
		{
			$scope.input = $scope.input + value;
		}
	};

	$scope.reset = function(){
		$scope.input=""+0;
		$scope.result=0;
	}

	$scope.delete = function(){
		var temp = $scope.input;
		temp = temp.substring(0,temp.length-1);
		$scope.input = temp;
	}
	
	$scope.add = function(){
		$scope.operation = "+";
	};
	$scope.subtract = function(){
		$scope.operation = "-";
	};
	$scope.multiply = function(){
		$scope.operation = "*";
	};
	$scope.divide = function(){
		$scope.operation = "/";
	};

});