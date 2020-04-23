//编辑输入正确用localStorage接受数据

var addul=document.getElementsByClassName("w_address-ul")[0];
(function(){
$.ajax({
    type: "GET",
    url: "address.php",
    success: function(data) {
       for(var i=0;i<data.length;i++){
           var phone=data[i].telphone.substr(0,3)+"****"+data[i].telphone.substr(7);
           var address=data[i].address.split("-").join("")
           addul.innerHTML+=`
            <li class="w_address-li">
                <div class="w_add-list1">
                    <span class="w_addlist-sp1">${data[i].username}</span>
                    <span class="w_addlist-sp2">${phone}</span> 
                    <p class="w_addlist-p">${address}</p>
                </div>
                <div class="w_add-list2 ">
                    <a href="address-amend.html">
                        <span class="amend w_addlist-span mui-icon mui-icon-compose"></span>
                    </a>
                </div>
            </li>
            `
        }
    }
})
})()
(function(){
    setTimeout(function(){
    mui.init()
    mui(".w_add-list2").on("tap",".amend",function(e){
    var vu1=e.target.parentNode.parentNode.parentNode.children[0].children[0].innerHTML
    var vu2=e.target.parentNode.parentNode.parentNode.children[0].children[1].innerHTML
    var vu3=e.target.parentNode.parentNode.parentNode.children[0].children[2].innerHTML
    window.localStorage.setItem("vu1",vu1)
    window.localStorage.setItem("vu2",vu2)
    window.localStorage.setItem("vu3",vu3)
    })
},1000)
})()
