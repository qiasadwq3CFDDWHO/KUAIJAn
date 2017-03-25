app.controller('zitiCtrl', function ($scope, $http) {
	$http.get('../json/mapData.json').success(function (data) {
		$scope.data = data.data.store_info;
		//默认显示第一个数据
		$scope.data1 = data.data.store_info[0].store_list;
	});
	

	$scope.choseArea = function () {
		$scope.data1 = this.item.store_list;
	};
	
	$scope.choseTitle = function () {
		$scope.title = this.item.title;
	}
})