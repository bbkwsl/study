/**
 * @description [第14章  window对象]
 * @author [silence]
 * @date  16/4/8
 */
// var p = showModalDialog("http://www.baidu.com",
//                         ['Enter 3d point coordinates', 'x', 'y', 'z'],
//                         'dialogwidth: 400;dialogheight:300;resizeable:yes');
// p();

/**
 * 查询窗口的视口尺寸
 * @param w
 */
function getViewportSize(w) {
    // 使用指定窗口,如果不带参数则使用当前窗口
    w = w || window;

    // 除了ie8及更早的版本以外,其他浏览器都能用
    if (w.innerWidth != null) {
        return {
            w: w.innerWidth,
            h: w.innerHeight
        }
    }
    // 标准浏览器
    var d = w.document;
    if (document.compatMode == 'CSS1Compat') {
        return {
            w: d.documentElement.clientWidth,
            h: d.documentElement.clientHeight
        }
    }
    // 怪异模式下的浏览器
    return {
        w: d.body.clientWidth,
        h: d.body.clientHeight
    }

}

// var res = getViewportSize();
// console.log(res);

// console.log(document.forms)