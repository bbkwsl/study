/**
 * @description [通用事件处理工具类]
 * @author [silence]
 * @date  2016-04-14
 */
var EventUtil = {
    /**
     * 获取事件
     */
    getEvent: function (event) {
        return event || window.event;
    },
    /**
     * 得到目标对象
     */
    getTarget: function (event) {
        return event.target || event.srcElement;
    },
    /**
     * 添加监听事件
     * @param ele   目标对象
     * @param type  事件类型
     * @param handler  事件处理函数
     */
    on: function (ele, type, handler) {
        if (ele.addEventListener) {
            ele.addEventListener(type, handler, false);
            return handler;
        } else if (ele.attachEvent) {
            // 在事件处理程序内,this关键字指的是事件目标.
            // 使用addEventListener()注册时,调用的处理程序使用事件目标作为它们的this值.
            // 对于attachEvent()注册的处理程序作为函数调用时,它们的this值是全局window对象
            var _handler = function () {
                handler.call(ele, event);
            };
            ele.attachEvent('on' + type, _handler);
            return _handler;
        }
    },
    /**
     * 移除监听事件
     * @param ele    目标对象
     * @param type   事件类型
     * @param handler  事件处理函数
     */
    off: function (ele, type, handler) {
        if (ele.removeEventListener) {
            ele.removeEventListener(type, handler, false);
        } else if(ele.detachEvent){
            ele.detachEvent('on'+type, handler);
        }
    },
    /**
     * 取消事件的默认行为
     */
    cancelHandler: function (event) {
        if (event.preventDefault) {
            event.preventDefault();
        } else if(event.returnValue) {
            event.returnValue = false;
        }
    },
    /**
     * 阻止冒泡
     */
    stopPropagation: function (event) {
        if (event.stopPropagation) {
            event.stopPropagation();
        } else if (event.cancelBubble) {
            event.cancelBubble = true;
        }
    }
};