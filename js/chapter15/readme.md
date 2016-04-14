#### 选取文档元素:
    id选取:document.getElementById
    name选取：document.getElementsByName
    标签名选取：document.getElmentByTagName, document.forms, document.images, document.links, document.body, document.head
	css选取元素：document.getElementsByClassName
#### Node重要属性：
	parentNode: 父节点,Document对象为父节点。
	childNodes: 子节点。
	firstChild: 子节点最后一个。
	lastChild: 子节点第一个。
	nextSibling: 下一个兄弟节点。
	previoursSibling: 前一个兄弟节点。
	nodeType: 节点类型。1 Element,3 Text节点，8 Comment, 9 Document 11 DocumentFragment。
	nodeValue: 节点文本内容。
	nodeName: 元素标签名。
#### html属性：
	hasAttribute(): 检测命名属性是否存在。
	removeAttribute(): 删除属性。