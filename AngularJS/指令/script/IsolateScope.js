var myModule = angular.module('MyModule', []);
myModule.directive("hello",function(){
	//没有设置独立的scope，在一个框里输入内容，四个都会变化
	return {
		restrict: "AE",
		//scope: {},		独立scope，设置之后在每个输入框里输入内容，互相不会影响
		template: "<div><input type='text' ng-model='userName' />{{userName}}</div>",
		replace: true
	}
})