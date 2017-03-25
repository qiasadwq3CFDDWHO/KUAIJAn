app.controller("cartCtrl", ['$scope', 'cartService', 'calcFactory', function ($scope, cartService, calcFactory) {
       
       
      function calculate(){
      	 $scope.price=calcFactory.calcPrice();
      	 $scope.num=calcFactory.calcNum();
      }
     // 从服务中读取所有的数据
    $scope.data = cartService.getAllGoods();
    //调用计算价格与数量函数
    calculate();
    var flag = true;
    $scope.isFlag=function(event){
    	var event = event || window.event;
    	//设置属性改变样式   	
    	var flage=$(event.target).attr("flage"); 
    	if(flage == 1){
    		$(event.target).removeClass("cone");
    		$(event.target).addClass("ctwo");
    		$(event.target).attr("flage",0); 
    		cartService.isFlase(this.item,false);
    		 //调用计算价格与数量函数
             calculate(); 
    	}else if(flage==0){
    		
    		$(event.target).removeClass("ctwo");
    		$(event.target).addClass("cone");
    		$(event.target).attr("flage",1);   
    		cartService.isFlase(this.item,true);
    		 //调用计算价格与数量函数
            calculate();
       }
    	  //判断按钮选中状态
    	//根据按钮选中状态控制全选按钮
    	var allSpan = $("#allSelect");
    	var spans = $(".shop-flag");
    	//循环遍历查看是否全部选中有一个没选中 就不全选
		for(var i = 0; i < spans.length; i++){
			if(parseInt($(spans[i]).attr("flage")) == 0){
				
				allSpan.addClass("ctwo");
				allSpan.attr("flage","0")
				allSpan.removeClass("cone");
				flag = false;
				break;
			}else{
				flag = true;
			}
		}
		if(flag){
			allSpan.addClass("cone");
			allSpan.removeClass("ctwo");
			allSpan.attr("flage","1")
		}
    }
   
     
    
    $scope.allFlag=function(){
       //定义ng-model的值默认为true
        $scope.flag=true;
    	//获取上面全部标签
    	var spans = $(".shop-flag");
    	
    	 var flage=$(".all-shop").attr("flage");
    	
    	if(flage==1){
    		
    		//全选状态
    		$scope.data.forEach(function(item){
    			  cartService.isFlase(item,false);
    		});
    		//改变上面单选框所有状态
            for(var i of spans){
            	$(i).attr("flage",0);
            }
    		//改变ng-modul的值为false
    		 $scope.flag=false;
    		$(".all-shop").attr("flage",0); 
    		 //调用计算价格与数量函数
            calculate(); 
    		console.log( $scope.flag)
    	}else if(flage==0){
    		 //全选状态
    		$scope.data.forEach(function(item){
    			  cartService.isFlase(item,true);
    		});
    		//改变上面单选框所有状态
            for(var i of spans){
            	$(i).attr("flage",1);
            }
    		//改变ng-modul的值为true
    		$scope.flag=true;
    		//改变自定义属性
    		$(".all-shop").attr("flage",1); 
    		//调用计算价格与数量函数
            calculate(); 
            console.log( $scope.flag)
    	}
    }
   
   
    //点击添加数量函数
	$scope.add=function(){
        //商品数量增加
		this.item.count++; 
	    //调用计算价格与数量函数
         calculate();
        
	}
	//点击减少调用reduceGoods函数
	$scope.reduce=function(){
		cartService.reduceGoods(this.item,true)
		 //调用计算价格与数量函数
         calculate() 
		
	}
  


  

}]);
