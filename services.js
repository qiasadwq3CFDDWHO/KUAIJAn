// 服务
app.service('cartService', function () {
    // 定义数组，用于保存所有购物车数据
    var arr = [];
    
    //判断是否选中
    this.isgoods=function(obj,isFlag){
    	 arr.forEach(function (item) {
	    	if(item.orgProductItem.brandId === obj.orgProductItem.brandId
		        ) {
		        	item.isFlag=isFlag;
		        	
		        }
	    });
    	obj.isFlag=true;
	        
    }
    // 添加商品的方法
    this.addGoods = function (obj) { 
    	
        var flag = false;         
	    arr.forEach(function (item) {
	        if(item.orgProductItem.brandId === obj.orgProductItem.brandId
	        ) {
	            item.count++;	            
	            flag = true;	            
	        }
	    	       
	    });
	     // 2.把新商品push到数组中
        if (flag === false) {
        	obj.isFlag=true;
            // 记录购物车商品数量
            obj.count = 1;
            arr.push(obj);
        }
      
    };
    //减少商品的函数
    this.reduceGoods=function(obj){
    	arr.forEach(function(item, i) {
                if (item.orgProductItem.brandId === obj.orgProductItem.brandId) { // 获取对应的商品
                    // 如果当前商品数量为1，则直接从数组中移除当前元素
                    if (item.count === 1) {
                        arr.splice(i, 1);
                    } else {
                        item.count--;
                    }
                }
        });      
    };
    this.isFlase=function(obj,isFlase){
    	obj.isFlag=isFlase;
    }
    // 获取所有商品的方法
    this.getAllGoods = function () {
        return arr;
    }
   
});
