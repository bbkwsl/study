### sass 学习笔记
#### 声明变量
##### 定义变量的语法: 以美元符"$"开头.
```sass
$width: 300px;
```
以上例子清楚的说明,sass变量包含三部分:
1. 声明变量的符号"$".
2. 变量名称.
3. 赋予变量的值.

普通变量与默认变量
普通变量
定义之后可以在全局范围内使用。
$fontSize: 12px;
body{
    font-size:$fontSize;
}
编译后的css代码：
body{
    font-size:12px;
}

默认变量
sass 的默认变量仅需要在值后面加上 !default 即可。
$baseLineHeight:1.5 !default;
body{
    line-height: $baseLineHeight;
}
编译后的css代码：
body{
    line-height:1.5;
}

sass 的默认变量一般是用来设置默认值，然后根据需求来覆盖的，覆盖的方式也很简单，只需要在默认变量之前重新声明下变量即可。

$baseLineHeight: 2;
$baseLineHeight: 1.5 !default;
body{
    line-height: $baseLineHeight;
}
编译后的css代码：
body{
    line-height:2;
}
局部变量和全局变量
Sass 中变量的作用域在过去几年已经发生了一些改变。直到最近，规则集和其他范围内声明变量的作用域才默认为本地。如果已经存在同名的全局变量，从 3.4 版本开始，Sass 已经可以正确处理作用域的概念，并通过创建一个新的局部变量来代替。

全局变量与局部变量

先来看一下代码例子：

//SCSS
$color: orange !default;//定义全局变量(在选择器、函数、混合宏...的外面定义的变量为全局变量)
.block {
  color: $color;//调用全局变量
}
em {
  $color: red;//定义局部变量
  a {
    color: $color;//调用局部变量
  }
}
span {
  color: $color;//调用全局变量
}

css 的结果：

//CSS
.block {
  color: orange;
}
em a {
  color: red;
}
span {
  color: orange;
}
上面的示例演示可以得知，在元素内部定义的变量不会影响其他元素。如此可以简单的理解成，全局变量就是定义在元素外面的变量，如下代码：

$color:orange !default;
$color 就是一个全局变量，而定义在元素内部的变量，比如 $color:red; 是一个局部变量。

除此之外，Sass 现在还提供一个 !global 参数。!global 和 !default 对于定义变量都是很有帮助的。我们之后将会详细介绍这两个参数的使用以及其功能。

全局变量的影子

当在局部范围（选择器内、函数内、混合宏内...）声明一个已经存在于全局范围内的变量时，局部变量就成为了全局变量的影子。基本上，局部变量只会在局部范围内覆盖全局变量。

上面例子中的 em 选择器内的变量 $color 就是一个全局变量的影子。

//SCSS
$color: orange !default;//定义全局变量
.block {
  color: $color;//调用全局变量
}
em {
  $color: red;//定义局部变量（全局变量 $color 的影子）
  a {
    color: $color;//调用局部变量
  }
}
什么时候声明变量？

我的建议，创建变量只适用于感觉确有必要的情况下。不要为了某些骇客行为而声明新变量，这丝毫没有作用。只有满足所有下述标准时方可创建新变量：

该值至少重复出现了两次；
该值至少可能会被更新一次；
该值所有的表现都与变量有关（非巧合）。
基本上，没有理由声明一个永远不需要更新或者只在单一地方使用变量。



嵌套-选择器嵌套
Sass 中还提供了选择器嵌套功能，但这也并不意味着你在 Sass 中的嵌套是无节制的，因为你嵌套的层级越深，编译出来的 CSS 代码的选择器层级将越深，这往往是大家不愿意看到的一点。这个特性现在正被众多开发者滥用。

选择器嵌套为样式表的作者提供了一个通过局部选择器相互嵌套实现全局选择的方法，Sass 的嵌套分为三种：

选择器嵌套
属性嵌套
伪类嵌套
1、选择器嵌套

假设我们有一段这样的结构：

<header>
<nav>
    <a href=“##”>Home</a>
    <a href=“##”>About</a>
    <a href=“##”>Blog</a>
</nav>
<header>
想选中 header 中的 a 标签，在写 CSS 会这样写：

nav a {
  color:red;
}

header nav a {
  color:green;
}
那么在 Sass 中，就可以使用选择器的嵌套来实现：

nav {
  a {
    color: red;

    header & {
      color:green;
    }
  }
}

嵌套-伪类嵌套
其实伪类嵌套和属性嵌套非常类似，只不过他需要借助`&`符号一起配合使用。我们就拿经典的“clearfix”为例吧：

.clearfix{
&:before,
&:after {
    content:"";
    display: table;
  }
&:after {
    clear:both;
    overflow: hidden;
  }
}
编译出来的 CSS：

clearfix:before, .clearfix:after {
  content: "";
  display: table;
}
.clearfix:after {
  clear: both;
  overflow: hidden;
}
避免选择器嵌套：

选择器嵌套最大的问题是将使最终的代码难以阅读。开发者需要花费巨大精力计算不同缩进级别下的选择器具体的表现效果。
选择器越具体则声明语句越冗长，而且对最近选择器的引用(&)也越频繁。在某些时候，出现混淆选择器路径和探索下一级选择器的错误率很高，这非常不值得。
为了防止此类情况，我们应该尽可能避免选择器嵌套。然而，显然只有少数情况适应这一措施。


混合宏-声明混合宏
如果你的整个网站中有几处小样式类似，比如颜色，字体等，在 Sass 可以使用变量来统一处理，那么这种选择还是不错的。但当你的样式变得越来越复杂，需要重复使用大段的样式时，使用变量就无法达到我们目了。这个时候 Sass 中的混合宏就会变得非常有意义。在这一节中，主要向大家介绍 Sass 的混合宏。

1、声明混合宏

不带参数混合宏：

在 Sass 中，使用“@mixin”来声明一个混合宏。如：

@mixin border-radius{
    -webkit-border-radius: 5px;
    border-radius: 5px;
}
其中 @mixin 是用来声明混合宏的关键词，有点类似 CSS 中的 @media、@font-face 一样。border-radius 是混合宏的名称。大括号里面是复用的样式代码。

带参数混合宏：

除了声明一个不带参数的混合宏之外，还可以在定义混合宏时带有参数，如：

@mixin border-radius($radius:5px){
    -webkit-border-radius: $radius;
    border-radius: $radius;
}
复杂的混合宏：

上面是一个简单的定义混合宏的方法，当然， Sass 中的混合宏还提供更为复杂的，你可以在大括号里面写上带有逻辑关系，帮助更好的做你想做的事情,如：

@mixin box-shadow($shadow...) {
  @if length($shadow) >= 1 {
    @include prefixer(box-shadow, $shadow);
  } @else{
    $shadow:0 0 4px rgba(0,0,0,.3);
    @include prefixer(box-shadow, $shadow);
  }
}
这个 box-shadow 的混合宏，带有多个参数，这个时候可以使用“ … ”来替代。简单的解释一下，当 $shadow 的参数数量值大于或等于“ 1 ”时，表示有多个阴影值，反之调用默认的参数值“ 0 0 4px rgba(0,0,0,.3) ”。



占位符 %placeholder
Sass 中的占位符 %placeholder 功能是一个很强大，很实用的一个功能，这也是我非常喜欢的功能。他可以取代以前 CSS 中的基类造成的代码冗余的情形。因为 %placeholder 声明的代码，如果不被 @extend 调用的话，不会产生任何代码。来看一个演示：

%mt5 {
  margin-top: 5px;
}
%pt5{
  padding-top: 5px;
}
这段代码没有被 @extend 调用，他并没有产生任何代码块，只是静静的躺在你的某个 SCSS 文件中。只有通过 @extend 调用才会产生代码：

//SCSS
%mt5 {
  margin-top: 5px;
}
%pt5{
  padding-top: 5px;
}

.btn {
  @extend %mt5;
  @extend %pt5;
}

.block {
  @extend %mt5;

  span {
    @extend %pt5;
  }
}
编译出来的CSS

//CSS
.btn, .block {
  margin-top: 5px;
}

.btn, .block span {
  padding-top: 5px;
}



混合宏 VS 继承 VS 占位符
初学者都常常纠结于这个问题“什么时候用混合宏，什么时候用继承，什么时候使用占位符？”其实他们各有各的优点与缺点，先来看看他们使用效果：

a) Sass 中的混合宏使用

举例代码见右侧 2-24 行
编译出来的 CSS 见右侧结果窗口。

总结：编译出来的 CSS 清晰告诉了大家，他不会自动合并相同的样式代码，如果在样式文件中调用同一个混合宏，会产生多个对应的样式代码，造成代码的冗余，这也是 CSSer 无法忍受的一件事情。不过他并不是一无事处，他可以传参数。

个人建议：如果你的代码块中涉及到变量，建议使用混合宏来创建相同的代码块。

b) Sass 中继承

同样的，将上面代码中的混合宏，使用类名来表示，然后通过继承来调用：

代码见右侧 26-48 行
总结：使用继承后，编译出来的 CSS 会将使用继承的代码块合并到一起，通过组合选择器的方式向大家展现，比如 .mt, .block, .block span, .header, .header span。这样编译出来的代码相对于混合宏来说要干净的多，也是 CSSer 期望看到。但是他不能传变量参数。

个人建议：如果你的代码块不需要专任何变量参数，而且有一个基类已在文件中存在，那么建议使用 Sass 的继承。

c) 占位符

最后来看占位符，将上面代码中的基类 .mt 换成 Sass 的占位符格式：

代码见右侧 50-72 行
总结：编译出来的 CSS 代码和使用继承基本上是相同，只是不会在代码中生成占位符 mt 的选择器。那么占位符和继承的主要区别的，“占位符是独立定义，不调用的时候是不会在 CSS 中产生任何代码；继承是首先有一个基类存在，不管调用与不调用，基类的样式都将会出现在编译出来的 CSS 代码中。”

来看一个表格：



数据类型
 Sass 和 JavaScript 语言类似，也具有自己的数据类型，在 Sass 中包含以下几种数据类型：

 数字: 如，1、 2、 13、 10px；
 字符串：有引号字符串或无引号字符串，如，"foo"、 'bar'、 baz；
 颜色：如，blue、 #04a3f9、 rgba(255,0,0,0.5)；
 布尔型：如，true、 false；
 空值：如，null；
 值列表：用空格或者逗号分开，如，1.5em 1em 0 2em 、 Helvetica, Arial, sans-serif。

SassScript 也支持其他 CSS 属性值（property value），比如 Unicode 范围，或 !important 声明。然而，Sass 不会特殊对待这些属性值，一律视为无引号字符串 (unquoted strings)。






