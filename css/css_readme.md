####css学习笔记
#####css基本概念
    css---Cascading Style Sheets。
    css初始化的作用？
    相同元素，比如li，在不同浏览器下显示的效果不同。是因为浏览器对各元素的margin,padding,boder,font-size等略有不同，为杜绝这种情况，我们通过css reset强制让所有元素属性值一致。
#####css引入方式
1. 外部使用link标签引入，例如：'&lt;link rel="stylesheet"  href="style.css">'。
2. 内嵌style标签，例如：'&lt;style> body {background-color: #fff; }&lt;/style>'。
3. 行内样式，例如：'&lt;div style="padding: 20px; ">这是一段文字。。&lt;div>'。
4. 使用import导入样式。

**样式优先级：**  行内样式 > 外部引入 > 浏览器默认