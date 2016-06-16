/**
 * @author [silence_yfang@126.com]
 * @since  2016-06-16
 */
/**
 * @author [silence_yfang@126.com]
 * @date  2016-06-12
 */
var data1 = [
    {
        src: 'http://img15.3lian.com/2015/f1/6/d/4.jpg',
        name: '欢乐颂',
        desc: '樊胜美奇葩父母引众怒'
    },
    {
        src: 'http://img15.3lian.com/2015/f1/6/d/4.jpg',
        name: '欢乐颂',
        desc: '樊胜美奇葩父母引众怒'
    },
    {
        src: 'http://img15.3lian.com/2015/f1/6/d/4.jpg',
        name: '欢乐颂',
        desc: '樊胜美奇葩父母引众怒'
    },
    {
        src: 'http://img15.3lian.com/2015/f1/6/d/4.jpg',
        name: '欢乐颂',
        desc: '樊胜美奇葩父母引众怒'
    },
    {
        src: 'http://img15.3lian.com/2015/f1/6/d/4.jpg',
        name: '欢乐颂',
        desc: '樊胜美奇葩父母引众怒'
    },
    {
        src: 'http://img15.3lian.com/2015/f1/6/d/4.jpg',
        name: '欢乐颂',
        desc: '樊胜美奇葩父母引众怒'
    },
    {
        src: 'http://img15.3lian.com/2015/f1/6/d/4.jpg',
        name: '欢乐颂',
        desc: '樊胜美奇葩父母引众怒'
    },
    {
        src: 'http://img15.3lian.com/2015/f1/6/d/4.jpg',
        name: '欢乐颂',
        desc: '樊胜美奇葩父母引众怒'
    }
];
var data2 = [
    {
        src: 'http://img15.3lian.com/2015/f1/6/d/4.jpg',
        desc: '樊胜美奇葩父母引众怒'
    },
    {
        src: 'http://img15.3lian.com/2015/f1/6/d/4.jpg',
        desc: '樊胜美奇葩父母引众怒'
    },
    {
        src: 'http://img15.3lian.com/2015/f1/6/d/4.jpg',
        desc: '樊胜美奇葩父母引众怒'
    },
    {
        src: 'http://img15.3lian.com/2015/f1/6/d/4.jpg',
        desc: '樊胜美奇葩父母引众怒'
    },
    {
        src: 'http://img15.3lian.com/2015/f1/6/d/4.jpg',
        desc: '樊胜美奇葩父母引众怒'
    },
    {
        src: 'http://img15.3lian.com/2015/f1/6/d/4.jpg',
        desc: '樊胜美奇葩父母引众怒'
    },
    {
        src: 'http://img15.3lian.com/2015/f1/6/d/4.jpg',
        desc: '樊胜美奇葩父母引众怒'
    },
    {
        src: 'http://img15.3lian.com/2015/f1/6/d/4.jpg',
        desc: '樊胜美奇葩父母引众怒'
    },
    {
        src: 'http://img15.3lian.com/2015/f1/6/d/4.jpg',
        desc: '樊胜美奇葩父母引众怒'
    },
    {
        src: 'http://img15.3lian.com/2015/f1/6/d/4.jpg',
        desc: '樊胜美奇葩父母引众怒'
    },
    {
        src: 'http://img15.3lian.com/2015/f1/6/d/4.jpg',
        desc: '樊胜美奇葩父母引众怒'
    },
    {
        src: 'http://img15.3lian.com/2015/f1/6/d/4.jpg',
        desc: '樊胜美奇葩父母引众怒'
    },
    {
        src: 'http://img15.3lian.com/2015/f1/6/d/4.jpg',
        desc: '樊胜美奇葩父母引众怒'
    },
    {
        src: 'http://img15.3lian.com/2015/f1/6/d/4.jpg',
        desc: '樊胜美奇葩父母引众怒'
    }
];
window.onload = function () {
    renderRightContent();
    renderbottomContent();
    changeTvContent();
    switchPage();
    switchPage();
};

/**
 * tv-轮播
 */
function switchPage() {
    var timer;
    function tvlb(c){
        var ad = parseInt($("panel-x").style.left) + c;
        $("panel-x").style.left = ad + 'px';
        if(ad <= -2640){
            $("panel-x").style.left = -1320 +'px';
        }
        if(ad >= 0){
            $("panel-x").style.left = -1320 +'px';
        }
    }
    $("prev").onclick = function(){tvlb(-220);}
    $("next").onclick = function(){tvlb(220);}
    function play(){
        timer = setInterval(function(){
            $("prev").onclick();
        },3000)
    }
    function stop(){
        clearInterval(timer);
    }
    $("prev").onmouseover = $("next").onmouseover = stop;
    $("prev").onmouseout = $("next").onmouseout = play;
    play();
}

/**
 * 切换tv内容
 */
function changeTvContent() {
    var oLi = $("f-s").children;
    var oDiv = $("cen-dra").children;
    for (var i = 0; i < oLi.length; i++) {
        oLi[i].index = i;
        oLi[i].onmouseover = function() {
            show(this.index);
        }
    };
    function show(a){
        index = a ;
        for (var j = 0; j < oLi.length; j++){
            oLi[j].className = "";
            oDiv[j].style.display = "none";
        };
        oLi[index].className = "f-n";
        oDiv[index].style.display = "block";
    }
}
/**
 * 页面之间切换
 */
function switchPage() {
    var searchs = $("search").children;
    var centrals = $("central").children;
    for (var i = 0; i < searchs.length; i++) {
        searchs[i].index = i;
        searchs[i].onclick = function() {
            mento(this.index);
        }
    };
    function mento(w){
        index = w ;
        for (var j = 0; j < searchs.length; j++){
            searchs[j].className = "";
            centrals[j].style.display = "none";
        };
        searchs[index].className = "f-x";
        centrals[index].style.display = "block";
    }
}

/**
 * 渲染右侧数据
 */
function renderRightContent() {
    var content = document.getElementById("dra");
    var li, img, dl, dt,a, dd;
    for(var i = 0, len = data1.length;i < len; i++){
        li = createDom('li');
        a = createDom('a');
        img = createDom('img');
        dl = createDom('dl');
        dt = createDom('dt');
        dd = createDom('dd');

        img.src = data1[i].src;
        dt.innerHTML = data1[i].name;
        dd.innerHTML = data1[i].desc;
        dl.appendChild(a);
        a.appendChild(dt);
        dl.appendChild(dd);
        li.appendChild(img);
        li.appendChild(dl);
        content.appendChild(li);
    }
}
/**
 * 渲染底部数据
 */
function renderbottomContent() {
    var content = document.getElementById('panel-x');
    var div, img, p;

    for(var i = 0, len = data2.length; i < len; i++) {

        div = createDom('div');
        img = createDom('img');
        p = createDom('p');

        div.className = 'yk-ds';
        img.src = data2[i].src;
        p.innerHTML = data2[i].desc;

        div.appendChild(img);
        div.appendChild(p);
        content.appendChild(div);
    }
}

/**
 * 创建dom元素
 * @param name
 * @returns {Element}
 */
function createDom(name) {
    return document.createElement(name);
}
/**
 * dom选择器
 * @param id
 * @returns {Element}
 */
function $(id){
    return document.getElementById(id);
}
