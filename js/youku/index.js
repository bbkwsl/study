/**
 * @author [silence_yfang@126.com]
 * @date  2016-06-12
 */
var data = [
    {
        src: '../../images/normal.jpeg',
        name: '欢乐颂',
        desc: '樊胜美奇葩父母引众怒'
    },
    {
        src: '../../images/normal.jpeg',
        name: '欢乐颂',
        desc: '樊胜美奇葩父母引众怒'
    },
    {
        src: '../../images/normal.jpeg',
        name: '欢乐颂',
        desc: '樊胜美奇葩父母引众怒'
    },
    {
        src: '../../images/normal.jpeg',
        name: '欢乐颂',
        desc: '樊胜美奇葩父母引众怒'
    },
    {
        src: '../../images/normal.jpeg',
        name: '欢乐颂',
        desc: '樊胜美奇葩父母引众怒'
    },
    {
        src: '../../images/normal.jpeg',
        name: '欢乐颂',
        desc: '樊胜美奇葩父母引众怒'
    }
];
window.onload = function() {

    var content = document.getElementById("list");
    var li, img, dl, dt, dd;
    for(var i = 0, len = data.length;i < len; i++){
        li = createDom('li');
        img = createDom('img');
        dl = createDom('dl');
        dt = createDom('dt');
        dd = createDom('dd');
        // 赋值
        img.src = data[i].src;
        dt.innerHTML = data[i].name;
        dd.innerHTML = data[i].desc;
        // 按结构拼装元素
        dl.appendChild(dt);
        dl.appendChild(dd);
        li.appendChild(img);
        li.appendChild(dl);
        content.appendChild(li);
    }
};

// 生成dom节点
function createDom(name) {
    return document.createElement(name);
}