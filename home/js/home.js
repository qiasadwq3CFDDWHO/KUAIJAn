app.controller('homeSwiperCtrl', ['$scope', '$http', '$timeout', '$state', 'cartService', function ($scope, $http, $timeout, $state, cartService) {
	$scope.name = '1111';
//	var self =this;
	//轮播图
	$http.get('../json/lunbo.json').success(function (data) {
		//self.data = data.data.slide;
		$scope.data = data.data.slide;
	});
	$timeout(function() {
		var swiper = new Swiper('.swiper-container', {
			autoplay: 1000,
			loop: true,
			pagination: '.swiper-pagination',
		});
	}, 1000);
	
	$http.get('../json/data.json').success(function (data) {
//		console.log(data.page.content);
		$scope.data1 = data.page.content;
	})
	
	$scope.showSpxq = function (){
//		console.log(this.item);
//		console.log(this.item.orgProductItem.goodsName);
		$state.go('home.spxq', {id: JSON.stringify(this.item)});
	}
	
	$scope.addGoods = function () {
		cartService.addGoods(this.item);
	}
	
}]);