app.controller('dltz',['$scope','$state',function($scope,$state){
	$scope.qq = function(){
		$state.go('qqtiao')
	}
	$scope.zhuce = function(){
		$state.go('zhuce')
	}
	$scope.zhaoh = function(){
		$state.go('zhaohui')
	}
}])