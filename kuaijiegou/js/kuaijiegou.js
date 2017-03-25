app.controller("kuaijiegou",["$scope","$rootScope","$http","cartService",function($scope,$rootScope,$http,cartService){
	//设置隐藏
	$scope.flag=false;
	//保存的数组
	$scope.datas=cartService.getAllGoods();
    //json路径放在一个数组
	$scope.obj={lingshi : "lingshi.json", jiushui : "jiushui.json",
	           shipin : "shipin.json", liangyou : "liangyou.json",
	           gehu : "gehu.json" ,bangong : "bangong.json",
	           shengxian : "shengxian.json" ,wucan : "wucan.json"
	
	
	};
	 //通过把json路径存在对象里面模仿切换        
	$scope.shop={
	17 : "17.json" , 19 : "19.json"	, 20 : "20.json" , 22 : "22.json",
	23 : "23.json" , 24 : "24.json" , 25 : "25.json" , 26 : "26.json",
	27 : "27.json" , 28 : "28.json" , 29 : "29.json" , 30 : "30.json",	
	31 : "31.json" , 32 : "32.json" , 33 : "33.json" ,
	34 : "34.json",35 : "35.json",36 : "36.json" , 37 : "37.json" ,
	38 : "38.json" , 39 : "39.json" , 41 : "41.json" , 42 : "42.json" ,
	43 : "43.json" , 49 : "49.json" , 52 : "52.json" , 53 : "53.json" ,
	54 : "54.json" , 56 : "56.json" ,59 : "59.json" , 63 : "63.json" ,
	68 : "68.json" , 69 : "69.json" ,72 : "72.json" , 73 : "73.json" ,
	77 : "77.json" , 79 : "79.json" ,80 : "80.json" , 82 : "82.json"
	};
  
	//默认显示第一个页面
	$scope.obj.names=$scope.obj.lingshi;
    //	点击切换函数
	$scope.change=function(name,e){
		$scope.obj.name=$scope.obj[name];
		$http.get('../json/'+$scope.obj.name).success(function (data) {
		$scope.data = data.listClassLevelTwo;	
	
		});
		var e=e || window.event;
		$(e.target).siblings("ul").show();
		$(e.target).parents(".shop-type").siblings("div").find("ul").hide();
		num();
	};
	$scope.flag2 = "";

	
	//加载函数
	function jiazaiData(count){
		$http.get('../json/'+count).success(function (data) {
			$scope.commons=data.page.content;		 
		});	
		num();
	}
	//默认加载第一页数据
	$scope.shop.value=$scope.shop[31];
	jiazaiData($scope.shop.value);
	//点击切换函数
	$scope.getShop=function(value){
		num();
		var e = e||window.event;
		$scope.shop.value=$scope.shop[value];
	 	jiazaiData($scope.shop.value);
	 	$scope.flag=true;	 	 	
	};
	
	
	//默认进入页面初始化页面
	$scope.datas.forEach(function(item){
		//先匹配页面元素
		
		if(item.count){
			$(".num-shoping").text(item.count);
		}
	});
	
	
	
	//调取添加商品到购物车函数
	$scope.add=function(event){
		var event = event || window.event;
	    //让减号与中间数量显示
		$(event.target).siblings(".num-shoping").show();
		$(event.target).siblings(".reduce").show(); 
        cartService.addGoods(this.item);
		$(event.target).siblings(".num-shoping").text(this.item.count);
		num();
		
	}
	$scope.reduce=function(){
		//使用service方法减少商品
		cartService.reduceGoods(this.item,true);
		 if($(event.target).siblings(".num-shoping").text() <= 1){
			$(event.target).siblings(".num-shoping").text(0);
			$(event.target).hide();
			$(event.target).siblings(".num-shoping").empty();
			return;
		}
		$(event.target).siblings(".num-shoping").text(this.item.count);
		
		num();
	}
	function num(){
		
			var $shopNum=$(".num-shoping");
			$scope.datas.forEach(function(item){
				for(var i =0; i<$shopNum.length; i++){
					if( $($shopNum[i]).attr("val")==item.orgProductItem.brandId){
					$($shopNum[i]).text(item.count);
					$($shopNum[i]).show();
					$($shopNum[i]).siblings(".reduce").show();
					}
	    		}
	
			})
		
		
	}
	
	
	
	
}])