var order = document.getElementsByClassName("all-order");
var footer = document.getElementsByClassName("x-foot-list");

for(var i=0; i<order.length; i++) {
    order[i].index=i;
    order[i].addEventListener("tap",function() {
        localStorage.setItem("index",this.index);
    })
}
    
// 底部点击切换

for(var i=0; i<footer.length; i++) {
    footer[i].addEventListener("tap",function() {
        for(var j=0;j<footer.length;j++){        
            footer[j].classList.remove('x-active');
        }
        this.classList.add('x-active');
    })
}

$(function() {
        $.ajax({
            url: 'mine.php?user='+localStorage.getItem("userStatus"),
            type: 'get',
            success: function(data) {
                console.log(data)
                // for() {
                    $(".x-head-user p").html(data[0].telphone);
                    $(".x-head-user span i").html(data[0].integral);
                    $(".x-head-img img").attr("src",data[0].headPortrait);
                    var arr = data[0].telphone.split("");
                    arr.splice(3,4,"****");
                    var tel=arr.join("");
                    $(".x-bind-tel span").html(tel)
                // }
            }
        })
    
})
console.log(localStorage.getItem("userStatus"))