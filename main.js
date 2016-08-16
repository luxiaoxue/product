require.config({
    paths:{
    	'template':'lib/template',
        'jquery':'lib/jquery-1.9.1.min',
        'artTemplate':'lib/template-native',
        'fast':'lib/fastclick',
        'zepto':'lib/zepto.min',
        'swiper':'lib/swiper.min',
        'sweetalert':'lib/sweetalert.min'
    }
})
require(['jquery','fast','js/index','js/Basement',"js/product-name",'js/menu','js/map','js/card','js/Account'],function($,fc){
	fc.attach(document.body);
	$('.container .back').on('click',function(){
		window.history.back()
        console.log('2')
	})
	$('.container .cart').on('click',function(){
		window.location.href='card.html'
	})
});