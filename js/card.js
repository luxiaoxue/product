define(['jquery','sweetalert'],function($,swal){
    if (window.location.href.indexOf('card.html')==-1) return;
	function auto(){//计算
		var numall=0;
		$(".section dl").each(function(){
			var price=$(this).find(".price ").html();
			var num1=$(this).find(".num").html();
			var p=price*num1;
			numall+=p;
		})
		var freight=$(".freight").html();
		$(".all").html(numall);
		$(".allnum").html(Number(numall)+Number(freight));
	}
	auto()
	var ls=window.localStorage;
	if(!ls.getItem('product')){
	    ls.setItem('product','[]')
	}
	function show(){
		var ls=window.localStorage;
		var arr=JSON.parse(ls.getItem('product'))
		if(arr.length==0){
		    swal({
		        title:"购物车内没有商品",
		        confirmButtonColor: "#6A5471"
		    })
		}else{
		    ajax(arr)
		} 
	}
	var json;
	$.ajax({
		url:'../data/Basement.json',
		async:'false',
		success:function(e){
			json=e;
			show()
		}
	})
	function ajax(arr){
		var str="";
		for(var i=0;i<arr.length;i++){
			$.each(json.bsaement,function(idx,v){
				if(arr[i]==v.id){
					str+="<dl data-id='"+i+"'>"+
			            "<dt><img src='../"+v.src+"' alt=''></dt>"+
			            "<dd>"+
			                "<span>"+v.name+"</span>"+
			                "<span class='E90'>"+v.short+"</span>"+
			                "<span><i class='price'>"+v.number+"</i><b>$</b></span>"+
			            "</dd>"+
			            "<p>"+
			                "<span class='subtraction'>-</span>"+
			                "<span class='num'>1</span>"+
			                "<span class='addition'>+</span>"+
			            "</p>"+
			        "</dl>";
				}
			})
		}
		$('.section').prepend(str)
		addEvent()
	}
	function addEvent(){
		$(".container .subtraction").on("click",function(){//减
			var num=$(this).next().html();
			num--;
			if(num<0) num=0;
			$(this).next().html(num);
			auto()
		})
		$(".container .addition").on("click",function(){//加
			var num=$(this).prev().html();
			num++;
			if(num<0) num=0;
			$(this).prev().html(num);
			auto()
		})
	}
	
	$('.container .PROCEED').on('click',function(){
        window.location.href='Account.html';
    })
    $('.checkout').on('click',function(){
    	window.location.href='Account.html';
    })
})	

	
	

