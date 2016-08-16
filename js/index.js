define(['jquery','sweetalert'],function($,swal){
   $('.submit').on('click',function(){
       
           if($('.email').val()==''){
               swal({
                   title:"邮箱地址不能为空",
                   confirmButtonColor: "#6A5471"
               })

           }else if($('.password').val()==''){
               swal({
                   title:"密码不能为空",
                   confirmButtonColor: "#6A5471"
               })
           }else{
               swal({
                   title:"邮箱地址或者密码不正确,请重新输入",
                   confirmButtonColor: "#6A5471"
               })
               $('.top input').val('')
           }
       
   })
    $('.top input').on('input propertychange',function(){
        check()
    })
    function check(){
        var reg_email=/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/;
        var reg_password=/((?=.*\d)(?=.*\D)|(?=.*[a-zA-Z])(?=.*[^a-zA-Z]))^.{6,16}$/;
        //密码长度为6~16位 ,数字、字母、符号至少包含两种。
        var flag=false;
        if(reg_email.test($('.email').val()) && reg_password.test($('.password').val())){
           flag=true;
        }
        $('.submit').off().on('click',function(){
            if(flag){
                $.ajax({
                    url:('data/login.json'),
                    success:function(e){
                        var name=$('.email').val()
                        var psd=$('.password').val()
                        if(e.name==name){
                            if(psd==e.psd){
                                location.href='pages/Basement.html';
                            }else{
                                swal({
                                    title:"密码错误，请重新输入",
                                    confirmButtonColor: "#6A5471"
                                })
                                $('.password').val('')
                            }
                        }else{
                            swal({
                                title:"邮箱未注册",
                                confirmButtonColor: "#6A5471"
                            })
                        }
                    },
                    error:function(){
                        swal({
                            title:"请求失败，请重新请求本页面",
                            confirmButtonColor: "#6A5471"
                        })

                    }
                })
            }else{
                if($('.email').val()==''){
                    swal({
                        title:"邮箱地址不能为空",
                        confirmButtonColor: "#6A5471"
                    })

                }else if($('.password').val()==''){
                    swal({
                        title:"密码不能为空",
                        confirmButtonColor: "#6A5471"
                    })
                }else{
                    swal({
                        title:"邮箱地址或者密码不正确,请重新输入",
                        confirmButtonColor: "#6A5471"
                    })
                    $('.top input').val('')
                }
            }
        })
    }
});
