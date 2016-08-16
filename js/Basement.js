define(['zepto', 'swiper'], function(Zepto) {
    if (window.location.href.indexOf('Basement.html')==-1) return;
    $(window).on('resize', function() {
        window.location.reload();
    })
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        loop: true,
        autoplay: true,
        speed: 2000,
        autoplayDisableOnInteraction: false
    });
    $.ajax({
        url: "../data/Basement.json",
        type: "post",
        dataType: "json",
        success: function(data) {
            change(data);
        },
        error:function() {
          alert('请求数据失败,请检查网络');
        }
    })
    function change(data) {
         var str = "";
        $.each(data.bsaement,function(index,value) {
                //console.log(val)
                str+='<dl data-id="'+value.id+'">'+
              '<dt><img src="../'+value.src+'" alt="" /></dt>'+
              '<dd>'+
                  '<h3>'+value.name+'</h3>'+
                  '<h4>'+value.short+'</h4>'+
                  '<h5>'+value.number+'</h5>'+
             ' </dd>'+
         ' </dl>';
        })
            $(".section").html(str);
    }
    $('.section').on('click','dl',function(){
        var id=$(this).attr('data-id');
        location.href='product-name.html?id='+id
    })
   
    
})