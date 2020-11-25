# 1 栅格布局
## 1.1 原则
- `row`只位于`container`中，`col`必须在`row`中
- `row`可以分成`12`个`col`，可以利用`col-lg/md/sm/xl-n`控制在所有屏幕或者在不同大小下每列宽度
- `col`没有加上数字的话，可以一直超过`12`列，并且可以平均分配宽度，直到不能存放再多的列，才会分配到下一行

## 1.2 列偏移
可以通过列偏移指定列的偏移值，比如`offset-6`，偏移`6`列，可以做成响应式，比如`offset-lg/xl/sm/md-n`。

# 2 表单
- `form-inline`：内联表单，弹性布局
- `form-group`：堆叠表单，垂直
- `form-control`：块级，`input`专用，宽度`100%`，`0.25rem`圆角，过渡
- `form-check`：配合子元素使用，相对定位
- `form-check-input`：子元素绝对定位，和`form-check`使用，也就是说子元素使用`form-check-input`的话父元素就要使用`form-check`，对于选择框，一般需要把选择框放前面而把文字放在后面，比如先是`自动登录按钮`再`自动登录文字`



# 3 居中
- 水平居中：`text-center`
- 垂直居中：`align-self-center`

# 4 组件
## 4.1 下拉菜单
- `dropdown-toggle`：追加一个倒三角
- `dropdown-menu`：隐藏菜单项
- `data-toggle="dropdown"`：在按钮上面，点击按钮触发事件，事件触发时调用了某个函数，出现下拉列表项

## 4.2 按钮组
- `btn btn-group`：将所有按钮连在一起，横向，带指针悬停效果
- `btn btn-group-vertical`：垂直
- `btn btn-group-lg`：大按钮
- `btn btn-toolbar`：拉长按钮组，变成工具栏


## 4.3 信息提示框
- `alert`基类
- `alert-success/info/danger`：颜色
- `close`：可以配合`<span class="close" data-dismiss="alert">&times;</span>`做一个带关闭效果的&times;，如果不能关闭可以配合父元素`alert-dismissible`

## 4.4 导航栏
- `nav`：定义弹性布局
- `nav+justify-content-around`：水平均分布导航栏
- `nav+flex-column`：垂直导航栏

一般设置如下：

- `<ul class="nav justify-content-around">`
- `<li class="nav-item">`
- `<a class="nav-link">`：`nav-link`设置了`hover`样式


## 4.5 选项卡导航
- `ul+li+a`
- `ul`设置`nav nav-tabs`
- `li`设置`nav-item`
- `a`设置`nav-link`与`data-toggle="tab"`，可以加上`active`设置激活
- 选项卡内容使用`div`包裹，首先设置`tab-content`
- 子选项内容也`div`包裹，设置`tab-pane`，并加上`id`
- 最后使用上面的`a`链接到`tab-pane`中的`id`，比如`href="#tab1"`


## 4.6 胶囊导航
- `ul class="nav nav-pills"`
- `li class="nav-item"`
- `a class="nav-link" data-toggle="pill" href="#tabn"`
- `div class="tab-content"`（父）
- `div id="tabn" class="tab-pane"`（子）


## 4.7 导航栏
- 外层：`div.navbar`，默认垂直，加上`class="navbar-expand"后变成水平`
- 内层：`ul.navbar-nav`+`li.nav-item`+`a.nav-link`
- `navbar-expand`可以做响应式导航栏，`navbar-expand-md/sm/lg/xl`

## 4.8 折叠
- 可以使用`a/button`作为按钮
- 加上`data-toggle="collapse" data-target="#demo"`
- 目标使用`div.collapse`，`id`为`demo`，即可实现折叠

## 4.9 卡片
- `card`
- `card-header`
- `card-body`
- `card-footer`

## 4.10 轮播
- `carousel`：相对定位
- `carousel-inner`：溢出隐藏，`100% width`
- `carousel-item`：`display:none;`
- 最外层`div`需要添加`data-ride="carousel"` 

具体设置：

- 外层`div class="carousel" data-ride="carousel" id="demo"`
- 图片层外层`div carousel-inner`
- 图片层内层`div carousel-item active`+`<img class="w-100">`（`active`只需要加一个，`w-100`看情况加）
- 指示器与图片层外层同层次，`ul carousel-indicators`
- 指示器内`li class="active" data-slide-to="0-n" data-target="#demo"`，`data-slide-to`是图片下标，从`0`开始，`data-target`是最外层`div`的`id`
- 左右指示箭头使用`<a class="carousel-control-prev/next" data-slide="prev/next" href="#demo" >`，里面加一个图标`<span class="carousel-control-prev/next/icon">`
