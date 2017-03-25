app.controller('spxqCtrl', ['$scope', '$stateParams', '$state', 'cartService', function ($scope, $stateParams, $state, cartService) {
	$scope.id = JSON.parse($stateParams.id);
//	console.log($scope.id);
	
	$scope.goodsxq = function () {
		$state.go('home.spxq.goodsxq', {id: JSON.stringify($scope.id)});
	}
	
	//点击到购物车
	$scope.gogood = function () {
		$state.go('cart')
	}
	//点击到商品评价
	$scope.pingjia = function () {
		$state.go('home.spxq.pingjia')
	}

}]);