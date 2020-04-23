var h1=document.getElementsByClassName("w_top")[0].offsetHeight;
var changhig=document.getElementsByClassName("w_change-cont")[0];
function heightchange(){
     var doheight=document.documentElement.clientHeight;
    changhig.style.height=(doheight-h1-10)+"px";
}
heightchange()
window.onresize=function(){
    heightchange()
}
var change=document.getElementsByClassName("w_button-change")[0];
var phone=document.getElementsByClassName("w_input-inp")[0];
var ph=document.getElementsByClassName("w_input-inpt")[0];
var num=document.getElementsByClassName("w_input-but")[0];
num.addEventListener("tap",function(){
    if(ph.value.length==4 ){ 
       mui.toast('ok',{ duration:'long(3500ms)', type:'div' })
    }else {
        mui.toast('请输入有效验证码',{ duration:'long(3500ms)', type:'div' }) 
    }
})
change.addEventListener("tap",function(){
    if(phone.value.length!=11){
        mui.toast('请输入有效手机号',{ duration:'long(3500ms)', type:'div' }) 
    }else if(ph.value.length!=4){
        mui.toast('请输入有效验证码',{ duration:'long(3500ms)', type:'div' }) 
    }else {
        setTimeout(() => {
            window.history.go(-1)
        }, 2000);
        
    }
})