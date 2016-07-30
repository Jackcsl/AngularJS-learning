var userInfoModule = angular.module("UserInfoModule",[]);
userInfoModule.controller('UserInfoCtrl', ['$scope', function($scope){
	$scope.userInfo = {
		email:"1113968807@qq.com",
		password:"1113968897",
		autoLogin:true
	};
	$scope.getFormData = function(){
		console.log($scope.userInfo);
	};
	$scope.setFormData = function(){
		$scope.userInfo = {
			email:"2343968807@qq.com",
			password:"132479813759",
			autoLogin:false
		};
	}
	$scope.resetFormData = function(){
		$scope.userInfo = {
			email:"1113968807@qq.com",
			password:"1113968897",
			autoLogin:true
		};
	}
}])