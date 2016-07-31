var appModule = angular.module('TestFormModule', []);
appModule.controller('TestFormModule', ['$scope', function($scope){
	$scope.user = {
		userName: "jackcsl",
		password: ""
	};
	$scope.save = function(){
		alert("保存数据");
	}
}])
