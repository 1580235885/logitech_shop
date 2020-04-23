// var mSearchInput = document.getElementById("m-search-input");
// mSearchInput.onclick = function () {
//   window.location = "./search-details.html"
// }
//轮播js
var swiper = new Swiper('.banner1', {
  pagination: {
    el: '.banner1-page'
  },
  autoplay: {
    delay: 3000,//1秒切换一次
  },
  loop: true
});

var swiper1 = new Swiper('.banner2', {
  slidesPerView: 'auto',
  spaceBetween: 10,
});

var swiper2 = new Swiper('.banner3', {
  slidesPerView: 3,
  freeMode: true,
  observer: true,//修改swiper自己或子元素时，自动初始化swiper
  observeParents: true//修改swiper的父元素时，自动初始化swiper
});
var swiper3 = new Swiper('.banner4', {
  slidesPerView: 2,
  slidesPerColumn: 2,
  spaceBetween: 30,

  observer: true,//修改swiper自己或子元素时，自动初始化swiper
  observeParents: true,//修改swiper的父元素时，自动初始化swiper
  pagination: {
    el: '.banner4-page',
    clickable: true,
    
  },
});

var xhr = new XMLHttpRequest()
xhr.onreadystatechange = function () {
  var discounts = document.getElementById("discounts");
  var discounts1 = document.getElementById("discounts1")
  var  more = document.getElementsByClassName("more")
  if (xhr.readyState === 4 && xhr.status === 200) {
      var movies = JSON.parse(xhr.responseText);
      // console.log(movies, 1111)
      function test1(i) {
        discounts.innerHTML += `
            <div class="swiper-slide " >
              <a href="shop-details.html?id=${movies[i].id}" class="more">
                  <img src="${movies[i].img}" alt="">
                  <p class="banner3-top">${movies[i].name}</p>
                  <p class="banner3-bottom">
                      <span>${movies[i].newprice}</span>
                      ${movies[i].integral}
                  </p>
              </a>
          </div>
          `
      }
      
      for (var i = 0; i < 5; i++) {
        test1(i)
      }
      discounts.innerHTML += `
            <div class="swiper-slide more more-bgc">
                <a href="javascript:void(0)">
                <p class="show-more">查看更多
                    <span class="iconfont">
                      &#xe62a;
                      </span>
                </p>
                </a>
            </div>
            `


      function test2(i) {
        discounts1.innerHTML += `
                <div class="swiper-slide more">
                  <a href="shop-details.html?id=${movies[i].id}">
                      <img src="${movies[i].img}" alt="">
                      <p class="banner3-top">${movies[i].name}</p>
                      <p class="banner3-bottom">
                          <span>${movies[i].newprice}</span>
                        
                      </p>
                  </a>
                </div>
              `
      }
      for (var i = 5; i < 11; i++) {
        test2(i)
      }
      discounts1.innerHTML += `
            <div class="swiper-slide more more-bgc">
                <a href="javascript:void(0)">
                <p class="show-more">查看更多
                    <span class="iconfont">
                      &#xe62a;
                      </span>
                </p>
                </a>
            </div>
            `

      var length = movies.length
      // console.log(length)
      var str = "游戏鼠标";
      var lists=[]
        for (var i = 0; i < length; i++) {
          var reg = movies[i];
          
          if (reg.labels.indexOf(str) != -1) {
            lists.push(movies[i])
          }
        }
        // console.log(lists[],222)
        var gamemouse = document.getElementById("gamemouse")
        for (var i = 0;i<7;i++){
          mouse(i)
        }
        function mouse(i){
          gamemouse.innerHTML+=`
          <div class="swiper-slide cancel">
              <a  href="shop-details.html?id=${movies[i].id}" class="game-link">
                  <img src="${lists[i].img}" alt="#">
                  <div>
                      <h3>${lists[i].title}/h3>
                      <p class="game-first">${lists[i].detail} </p>
                      <p class="game-second">
                          <span>${lists[i].oldprice} </span>
                      </p>
                  </div>
              </a>
          </div>
          `
        }
      }
        var gameKey = "游戏键盘";
        var key=[]
        for (var i = 0; i < length; i++) {
          var reg = movies[i];
          if (reg.labels.indexOf(gameKey) != -1) {
            key.push(reg)
          }
        }
        // console.log(key)
        var gameKey = document.getElementById("gameKey")
        for (var i = 0;i<4;i++){
            keyValue(i)
        }
        function keyValue(i){
          gameKey.innerHTML+=`
          <div class="swiper-slide cancel">
              <a  href="shop-details.html?id=${movies[i].id}" class="game-link">
                  <img src="${key[i].img}" alt="#">
                  <div>
                      <h3>${key[i].title}/h3>
                      <p class="game-first">${key[i].detail} </p>
                      <p class="game-second">
                          <span>${key[i].oldprice} </span>
                      </p>
                  </div>
              </a>
          </div>
          `
        }

        var productList = document.getElementById("productList");
        for (var i = 0;i<10;i++){
          if(movies[i].oldprice==null){
            movies[i].oldprice=''
          }
          productList.innerHTML+=`
          <li class="shopList">
            <a href="shop-details.html?id=${movies[i].id}">
              <div class="list-content">
                  <div>
                      <img src="${movies[i].img}" alt="">
                  </div>
                  <div class="list-detail">
                      <p>${movies[i].title}</p>
                      <p> ${movies[i].detail}</p>
                      <p>
                      <span>${movies[i].newprice}</span>
                      <del>${movies[i].oldprice}</del>
                      </p>
                  </div>
              </div>
              <div class="list-bottom">
                  <span>无线鼠标</span>
                  <span>有线鼠标</span>
                  <span>游戏鼠标</span>
              </div>
            </a>
          </li>
          `
        }
       
        
        mui.init({
          swipeBack: false,
          keyEventBind: {
            backbutton: false //关闭back按键监听
          },
          pullRefresh: {
            container: '#pullrefresh',
            up: {
              contentrefresh: '正在加载...',
              callback: pullupRefresh
            }
          }
        });
        var count = 0;
        /**
         * 上拉加载具体业务实现
         */
        
        function pullupRefresh() {
          setTimeout(function() {
            mui('#pullrefresh').pullRefresh().endPullupToRefresh((++count > 2)); //参数为true代表没有更多数据了。
            var table = document.body.querySelector('.mui-table-view');
            var cells = document.body.querySelectorAll('.mui-table-view-cell');
            for(var i = 10, len = i + 10; i < len; i++) {
              var li = document.createElement('li');
              li.className = 'shopList';
                li.innerHTML += `
                <a href="shop-details.html?id=${movies[i].id}">
                  <div class="list-content">
                      <div>
                          <img src="${movies[i].img}" alt="">
                      </div>
                      <div class="list-detail">
                          <p>${movies[i].title}</p>
                          <p> ${movies[i].detail}</p>
                          <p>
                          <span>${movies[i].newprice}</span>
                          <del>${movies[i].oldprice}</del>
                          </p>
                      </div>
                  </div>
                  <div class="list-bottom">
                      <span>无线鼠标</span>
                      <span>有线鼠标</span>
                      <span>游戏鼠标</span>
                  </div>
                </a>
                `
              table.appendChild(li);
            }
          }, 1000);
        }
    }


    
xhr.open('GET', 'index.php', true);
xhr.send();



