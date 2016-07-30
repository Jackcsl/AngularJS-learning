var myCssModule = angular.module('MyCssModule', []);
myCssModule.controller('HeaderController', ['$scope', function($scope){
	$scope.isError = false;
	$scope.isWarning = false;
	$scope.showError = function(){
		$scope.messageText = "This is an error";
		$scope.isError = true;
		$scope.isWarning = false;
	};
	$scope.showWarning = function(){
		$scope.messageText = "Just an warning,please try again";
		$scope.isWarning = true;
		$scope.isError = false;
	}
}])