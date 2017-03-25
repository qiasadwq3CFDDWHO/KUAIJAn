var app = angular.module('myApp', ['ui.router']);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	
	//配置默认锚点
	$urlRouterProvider.when('', '/home');
	$urlRouterProvider.when('kuaijiegou', '/kuaijiegou/all');
	
	//配置路由
	$stateProvider.
	//home
	state('home', {
		url: '/home',
		templateUrl: '../home/home.html',
		controller : 'homeSwiperCtrl as hsCtrl',
	})
	.state('home.spxq', {
		url: '/spxq/:id',
		templateUrl: '../home/spxq.html',
		controller : 'spxqCtrl',
	})
	.state('home.ziti', {
		url: '/ziti',
		templateUrl: '../home/ziti.html',
		controller : 'zitiCtrl', 
	})
	.state('home.spxq.goodsxq', {
		url: '/goodsxq/:id',
		templateUrl : '../home/goodsxq.html',
		controller: 'goodsxqCtrl',
	})
	.state('home.spxq.pingjia', {
		url: '/pingjia',
		templateUrl : '../home/pingjia.html',
		
	})
	
	//快捷购
	.state('kuaijiegou', {
		url: '/kuaijiegou',
		templateUrl: './kuaijiegou/kuai-shop.html',
		controller : "kuaijiegou",
	})
	
	//购物车
	.state('cart', {
		url: '/cart',
		templateUrl: './cart/cart2.html',
		controller: 'cartCtrl',
	})
	
	//订单
	.state('dl', {
		url: '/dl',
		templateUrl: './dl/dl.html',
		controller: 'dltz',
	})
	
	//我的
	.state('mine', {
		url: '/mine',
		templateUrl: './mine/mine.html',
	})
	.state('mine.account', {
        url: '/account',
        templateUrl: './mine/account.html',
        controller: 'accountCtrl'
    })
    .state('mine.member', {
        url: '/member',
        templateUrl: './mine/member.html'
       
    })
    .state('mine.ticket', {
        url: '/ticket',
        templateUrl: './mine/ticket.html',
        controller: 'ticketCtrl'
    })
	
	//qq跳转
	.state('qqtiao', {
		url: '/qqtiao',
		templateUrl: './dl/qq.html',
	})
	
	//注册跳转
	.state('zhuce', {
		url: '/zhuce',
		templateUrl: './dl/zhuce.html',
	})
	
	//找回密码跳转
	.state('zhaohui', {
		url: '/zhaohui',
		templateUrl: './dl/zhaohui.html',
	})
	
	
}])