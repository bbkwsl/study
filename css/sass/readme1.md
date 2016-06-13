@for循环（上）
在制作网格系统的时候，大家应该对 .col1~.col12 这样的印象较深。在 CSS 中你需要一个一个去书写，但在 Sass 中，可以使用 @for 循环来完成。在 Sass 的 @for 循环中有两种方式：

@for $i from <start> through <end>
@for $i from <start> to <end>
$i 表示变量
start 表示起始值
end 表示结束值
这两个的区别是关键字 through 表示包括 end 这个数，而 to 则不包括 end 这个数。

如下代码，先来个使用 through 关键字的例子：

@for $i from 1 through 3 {
  .item-#{$i} { width: 2em * $i; }
}
编译出来的 CSS:

.item-1 {
  width: 2em;
}

.item-2 {
  width: 4em;
}

.item-3 {
  width: 6em;
}
再来个 to 关键字的例子：

@for $i from 1 to 3 {
  .item-#{$i} { width: 2em * $i; }
}
编译出来的 CSS:

.item-1 {
  width: 2em;
}

.item-2 {
  width: 4em;
}