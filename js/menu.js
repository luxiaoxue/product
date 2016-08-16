define(['jquery'],function($){
    if (window.location.href.indexOf('menu.html')==-1) return;
    json()
    function json(){
        $.ajax({
            url:'../data/menu.json',
            success:function(json){
                //console.log(data)
                render(json)
            },error:function(){
                alert('加载失败，请重新加载本页面')
            }
        })
    }
    function render(data){
        var str=''
        $.each(data.result,function(i,v){
            str+="<dl data-id='"+v.id+"'>"+
                "<dt><img src='../"+v.src+"' alt=''></dt>"+
                "<dd>"+
                    "<p>"+v.name+"</p>"+
                    "<p>"+v.p+"</p>"+
                    "<p class='p'>"+v.ps+"</p>"+
                    "<p>"+v.price+"$</p>"+
                "</dd>"+
            "</dl>"
        })
        $('.bottom').html(str)
        addEvent()
    }
    function addEvent(){
        $('.bottom dl').on('click',function(){
           var  id=$(this).attr('data-id');
            window.location.href='map.html?id='+id
        })
    }
});
