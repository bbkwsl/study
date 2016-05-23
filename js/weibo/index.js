/**
 * @description [微博登录框js]
 * @author [silence_yfang@126.com]
 * @date  2016-05-23
 */

window.onload = function(){
    var oDiv = document.getElementById('div1');
    var oP = oDiv.getElementsByTagName('p')[0];
    var oT = oDiv.getElementsByTagName('textarea')[0];
    var oA = oDiv.getElementsByTagName('a')[0];

    var bBtn = true;

    oT.onfocus = function(){

        if (bBtn) {
            oP.innerHTML = '<span class="text">还可以输入</span><span class="number">140</span>字';
            bBtn = false;
        }
    };

    oT.onblur = function(){

        if (oT.value == '') {
            oP.innerHTML = '王健林叫板迪斯尼:有万达在,上海迪斯尼20年内盈不了利';
            bBtn = true;
        }
    };

    oT.oninput =  function() {

        var num = Math.ceil(getLength(oT.value)/2);
        var $span = oDiv.getElementsByTagName('span');
        var $textSpan = $span[0];
        var $numSpan = $span[1];

        if (!$numSpan) return;

        if (num <= 140) {
            $textSpan.innerHTML = '还可以输入';
            $numSpan.innerHTML = 140 - num;
            $numSpan.style.color = '';
        } else {
            $textSpan.innerHTML = '已超过';
            $numSpan.innerHTML = num - 140;
            $numSpan.style.color = 'red';
        }

        if (oT.value === '' || num > 140) {
            oA.className = 'disable';
        } else {
            oA.className = '';
        }
    };


    function getLength(str){
        return String(str).replace(/[^\x00-\xff]/g,'aa').length;
    }

    oA.onclick = function(){

        if(this.className == 'disable'){
            console.log('has problem!');
        } else {
            alert('发布成功！');
        }
    };
};
