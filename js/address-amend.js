//拿数据更改
var val=document.getElementsByClassName("w_address-value1");
var val1=document.getElementsByClassName("w_value2")[0];
val[0].value=window.localStorage.vu1;
val[1].value=window.localStorage.vu2;
val1.value=window.localStorage.vu3.substr(0,11);
val[2].value=window.localStorage.vu3.substr(11);;
window.localStorage.clear();
//mui地址插件选项
(function($, doc) {
    $.init();
    $.ready(function() {
        var cityPicker3 = new $.PopPicker({
            layer: 3
        });
        cityPicker3.setData(cityData3);
        var showCityPickerButton = doc.getElementById('showCityPicker3');
        var cityResult3 = doc.getElementById('cityResult3');
        showCityPickerButton.addEventListener('tap', function(event) {
            cityPicker3.show(function(items) {
                cityResult3.value = (items[0] || {}).text + " " +"-"+ (items[1] || {}).text + " " +"-"+ (items[2] || {}).text;
                //返回 false 可以阻止选择框的关闭
                // return false;
            });
        }, false);
    });
})(mui, document);
//编辑收货地址的输入是否正确判断
var value1=document.getElementsByClassName("w_address-value1");
var butt=document.getElementsByClassName("w_address-butt")[0];
var value2=document.getElementsByClassName("w_value2")[0];
butt.addEventListener("tap",function(){
   if(value1[0].value=="") {
    mui.toast('请输入姓名',{ duration:'long(3500ms)', type:'div' }) 
   }else{
        if( value1[1].value.length!=11){
            mui.toast('请输入有效手机号',{ duration:'long(3500ms)', type:'div' }) 
        }else{
            if(value2.value==""){
                mui.toast('请选择省市区',{ duration:'long(3500ms)', type:'div' }) 
            }else{
                if(value1[2].value==""){
                    mui.toast('详情地址不能为空',{ duration:'long(3500ms)', type:'div' }) 
                }else{// 输入正确用localStorage传数据
                   
                    $(".w_address-cont form")[0].action="address-edit.php"
                    setTimeout(() => {
                        mui.toast('地址保存成功',{ duration:'long(3500ms)', type:'div' })
                    }, 2000);
                }
            }
        }
   }
})
// 控制删除这个地址
mui('.w_address-clear').on("tap",'input',function(){
    mui.confirm('确定要删除这个地址吗？','',['取消','确定'],null,'div')
    var clea=document.getElementsByClassName("mui-popup-button-bold")[0];
    clea.addEventListener("tap",function(){
        $(".w_address-cont form")[0].action="address-amend.php"
    })
})
