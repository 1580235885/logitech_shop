var num = localStorage.getItem("index");
	
var showTitle = document.getElementsByClassName("mui-control-item");
var showItem = document.getElementsByClassName("mui-control-content");

for(var i=0; i<showItem.length; i++) {
    if(num==i) {
        showTitle[i].classList.add("mui-active");
        showItem[i].classList.add("mui-active");

    }else {
        showTitle[i].classList.remove("mui-active");
        showItem[i].classList.remove("mui-active");
    }
}

$(function() {
    $.ajax({
        url: 'myOrder.php',
        success: function(data) {
            console.log(data)
            $(".mui-scroll-wrapper").append($("<div class='x-product-list'></div>"));
            for(var i=0; i<data.length; i++) {
                for(j=0; j<$(".x-list").length; j++) {
                    if($(".mui-table-view-cell").eq(j).children().hasClass("x-no-commodity")) {
                        $(".x-product-list").eq(j).append(`
                            <div class="x-product-item">
                                <a href="">
                                    <div class="x-img">
                                        <img src="${data[i].img}" alt="">
                                    </div>
                                    <div class="x-item-info">
                                        <h3>${data[i].title}</h3>
                                        <p class="x-intro">${data[i].detail}</p>
                                        <p>￥<span>${data[i].newprice}</span></p>
                                    </div>
                                </a>
                            </div>
                        `);
                    }
                    
                }
                
            }
            
        }
    })
})
// function getProduct() {
//     var xhr = new XMLHttpRequest();
//     console.log(xhr)
//     xhr.onreadystatechange=function() {
//         if(xhr.readyState===4 && xhr.status===200) {
//             var productList = document.getElementsByClassName("x-product-list");
//             console.log(productList)
//             var arr = JSON.parse(xhr.responseText);
//             for(var j=0; j<productList.length; i++) {
//                 for(var i=0; i<arr.length; i++) {
                    // productList[j].innerHTML+=`
                        // <div class="x-product-item">
                        //     <a href="">
                        //         <div class="x-img">
                        //             <img src="${arr[i].img}" alt="">
                        //         </div>
                        //         <div class="x-item-info">
                        //             <h3>${arr[i].title}</h3>
                        //             <p class="x-intro">${arr[i].detail}</p>
                        //             <p>￥<span>${arr[i].newprice}</span></p>
                        //         </div>
                        //     </a>
                        // </div>
//                     // `;
//                 }  
//             }
            
//             console.log(arr)
//         }
//     }
//     xhr.open("GET","http:php/my-order.php",true);
//     xhr.send()
// }
// function getProduct() {
//     var productList = document.getElementsByClassName("x-product-list");
//     for(var i=0;i<productList.length; i++) {
//         productList[i].innerHTML="1"
//     }
    
// }
// window.onload = function() {
    
//         getProduct()
    
// }