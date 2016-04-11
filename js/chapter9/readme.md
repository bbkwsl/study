#### js权威指南第9章  类和模块
##### 类的扩充
1. 去除字符串开头和结尾的空格
```
    String.prototype.trim = String.prototype.trim || function () {
        if (!this) return this;
        return this.replace(/^\s+|\s+$/g, "");
    };
```