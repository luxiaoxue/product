define(['jquery','sweetalert'],function($,swal){
    if (window.location.href.indexOf('Account.html')==-1) return;
    
    function isEmail(){
        var isEmail = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/; 
        if(isEmail.test($('.email').val())){
            return false;
        }else{
            if($('.email').val()==''){
                swal({
                    title:'邮箱地址不能为空',
                    confirmButtonColor: "#6A5471"
                })
                
            }else{
                swal({
                    title:'邮箱地址或者密码不正确,请重新输入',
                    confirmButtonColor: "#6A5471"
                })
                $('.email input').val('')
            }
        }
    }
})  

