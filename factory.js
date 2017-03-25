// 工厂
app.factory('calcFactory', function (cartService) {
    return {
        calcPrice: function () {
            var money = 0;
            
            cartService.getAllGoods().forEach(function (item) {
            	if(item.isFlag===true){
            		money += Number(item.orgProductItemAide.showPrice)*Number(item.count);
            	}
                
            });
            //取小数后一位
            money=parseInt(money*Math.pow(10,1)+0.5,10)/Math.pow(10,1);
            return money;
        },
        //返回商品数量
        calcNum: function(){
        	var num=0;
        	cartService.getAllGoods().forEach(function (item) {
        		if(item.isFlag===true){
            		num += Number(item.count);
            	}
        	});
        	return num;
        }
    };
});
