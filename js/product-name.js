define(['jquery','sweetalert'],function($,swal){
    if (window.location.href.indexOf('product-name.html')==-1) return;
    var ls=window.localStorage;
    if(!ls.getItem('product')){
        ls.setItem('product','[]')
    }else{
        var arr=JSON.parse(ls.getItem('product'))
        $('.cart').html(arr.length)
    }
    //向下
    $(".down").on("click",function(){
    	$(".slide").slideToggle();		
    	var hig=$(".slide").height();
    	if(hig==1){
    		$(this).addClass("add");
    	}else{
    		$(this).removeClass("add");
    	}
    })
    $.ajax({
    	url:"../data/Basement.json",
    	success:function(e){
    		var str="";
    		var str1="";
    		var str2="";
    		var idx=location.search.substr(1);
    		var arr = idx.split("=");
    		console.log(arr);		
    		$.each(e.bsaement,function(key,value){
    			if(value.id==arr[1]){
    				str ='<h3 class="num">'+value.star+'</h3>'+
    						'<h4 class="money">'+value.number+'</h4>';
    				str1='<h1>'+value.name+'</h1>';
    				str2='<img src=../'+value.src+' alt="">'
                    //判断星星点亮状态
                    var star_num;
                    if(value.star>0 && value.star<=5){
                        star_num=1;
                    }else if(value.star>5 && value.star<=10){
                        star_num=2;
                    }else if(value.star>10 && value.star<=15){
                        star_num=3;
                    }else if(value.star>15 && value.star<=20){
                        star_num=4;
                    }else if(value.star>20 && value.star<=25){
                        star_num=5;
                    }
                    for(var i=0;i<star_num;i++){
                        $('.star li').eq(i).addClass('yellow');
                    }
    			}
    		})
    		$(".small").append(str);
    		$(".name").append(str1);
    		$(".river").append(str2);
    	},error:function(){
            swal({
                title:"请求失败，请重新请求本页面",
                confirmButtonColor: "#6A5471"
            })
        }
    })
    //点赞
    $(".heart").on("click",function(){
        $("#om").css({
            "color":'red'
        })
    })
    //购买
    $('.buy').on('click',function(){
        var idx=location.search.substr(1);
        var arr_idx= idx.split("=");  
        var arr=JSON.parse(ls.getItem('product'))
        var already=true;
        //判断是否购买过
        if(arr.length==0){
            arr.unshift(arr_idx[1])
            ls.setItem('product',JSON.stringify(arr))
            swal({
                title:"购买成功了",
                confirmButtonColor: "#6A5471"
            })
            $('.cart').html(arr.length)
        }else{//购买已有内容。比较是否已经购买过
            $.each(arr,function(idx,val){
                if(val==arr_idx[1]){
                    already=false;
                }
            })
            if(!already){
                swal({
                    title:"已经购买过了",
                    confirmButtonColor: "#6A5471"
                })
            }else{
                arr.push(arr_idx[1])
                ls.setItem('product',JSON.stringify(arr))
                swal({
                    title:"购买成功了",
                    confirmButtonColor: "#6A5471"
                })
                $('.cart').html(arr.length)
            }
        } 
        
    })
});
