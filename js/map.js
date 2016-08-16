define(['jquery'],function(){
    //判断是否是在map.html
    if(window.location.href.indexOf('map.html')==-1) return;
        var ls=window.localStorage;
        if(ls.getItem('product')){
            var arr=JSON.parse(ls.getItem('product'))
            $('.cart').html(arr.length)
        }else{
            ls.setItem('product','[]')
        }
    	$.ajax({
    		url:"../data/menu.json",
            dataType: "json",
            success:function(data){
            	storeData(data);
            },
            error:function(){
            	alert("请求失败")
            }
    	})
    	function storeData(data){
    		var id=location.search.substr(1),
    			arr=id.split('='),
    			str="";
    		$.each(data.result,function(index,value){
    			if(value.id==arr[1]){
    				str ='<p class="section-p1">Store name</p>'+
    							'<p class="section-p2">'+
    							'<b class="b1">'+value.p+'</b><br>'+
    							'<b class="b2">'+value.day[0]+' - '+value.day[1]+': 10 AM - 9 PM</b>'+
    						'</p>'+
    						'<p class="section-p3">'+
    							'<b class="b1">STORE HOURS</b><br>'+
    							'<b class="b2">'+value.address+'</b><br>'+
    							'<b class="b3">Any Countyr, Any City</b>'+
    						'</p>'+
    						'<p class="section-p4">'+
    							'<b class="b1">'+value.number[0]+''+"&nbsp"+''+"-"+value.number[1]+''+"-"+value.number[2]+''+"-"+value.number[3]+'</b><br>'+
    							'<b class="b1">'+value.number[0]+''+"&nbsp"+''+"-"+value.number[1]+''+"-"+value.number[2]+''+"-"+value.number[3]+'</b>'+
    						'</p>';
    			}
    		})
    		$(".scroll").html(str);
    	} 
});