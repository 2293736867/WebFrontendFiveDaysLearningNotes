# 1 响应式布局
## 1.1 概念
根据浏览设备的不同自动改变布局，图片，文字效果等。

## 1.2 特征
- 不能固定元素的宽度，必须流式布局（默认文档流+浮动）
- 文字和图片随着容器的大小改变
- 媒体查询技术

主要过于复杂的页面不适合响应式。

# 2 媒体查询技术
设备包括：

- `PC`
- 平板
- 手机

## 2.1 媒体查询
根据当前浏览设备的不同，有选择性地选择执行一部分`CSS`样式，忽略其他样式。


# 3 `Bootstrap`
## 3.1 分辨率
- `xl`：`>=1200px`
- `lg`：`>=992px`
- `sm`：`>=768px`
- `xs`：`<768px`

## 3.2 默认字体大小
`16px`，`0.25rem`。

## 3.3 变宽容器
`container-fluid`。

## 3.4 按钮相关样式
- `btn primary`：蓝
- `btn success`：绿
- `btn info`：青
- `btn danger`：红

## 3.5 不同边框按钮
`btn-outline-xxxx`，比如`btn-outline-danger`，`btn-outline-success`

## 3.6 大小按钮
`btn-sm`、`btn-lg`

## 3.7 块按钮
`btn-block`


# 4 图片
- `rounded`：`0.25rem`圆角
- `rounded-circle`：圆角`50%`
- `img-thumbnail`：缩略图 加边框
- `img-fluid`：响应式图片，不会超过图片原始大小

# 5 文本
## 5.1 颜色
- `text-danger`
- `text-warning`
- `text-success`
- `text-info`

## 5.2 大小写
- `text-uppercase`
- `text-lowercase`
- `text-capitalize`

## 5.3 粗细
- `font-weight-bold`
- `font-weight-normal`
- `font-weight-light`

## 5.4 对齐
- `text-left`
- `text-right`
- `text-center`

# 6 列表
- `list-unstyled`：去掉小圆点且左内边距清零
- `list-group`：列表组
- `list-group-item`：列表项 
- `list-gorup-item-xxxx`：列表项颜色
- `active`/`disable`：激活

# 7 表格
- `table`：上下边框+自动格式化
- `table-borderd`：每一个单元格边框
- `table-primary`/`table-success`/`table-info`：颜色
- `table-striped`：隔行变色
- `table-hover`：带鼠标悬停效果
- `table-response`：响应式表格，但是需要写在`<table>`父元素上面

# 8 边框
- `border`：普通上下左右边框
- `border-left`/`border-bottom`：边框位置
- `border-success`：颜色
- `border-0`/`border-left-0`：清除边框

# 9 浮动
- `float-xl/lg/sm/xs-left/right/none`：响应式浮动
- `clearfix`：清除浮动，写在父元素上

# 10 显示隐藏
- `visible`
- `invisible`

# 11 背景颜色
`bg-primary/info/success`

# 12 圆角
- `rounded`：不明显，`0.25rem`，标准比例下为`4px`
- `rounded-0`：去掉圆角  
- `rounded-right/left/bottom/top`：会设置两个位置的圆角，比如`left`，会设置左上和左下圆角

# 13 内外边距
- `m`代表`margin`
- `p`代表`padding`
- `l/r/t/b`代表`left/right/top/bottom`
- `m-auto`：`margin:auto`
- `m-0/5`：代表`0.25rem-3rem
- `m-xl/lg/sm/xs`：响应式


# 14 栅格布局
- 必须放在`container/container-fluid`中
- 每一行占`12`列
- `col`必须在`row`里面
- 可以使用`col-xl/lg/md/sm`设置在不同屏幕下的每个元素所占的列的大小，比如`col-lg-3`，`col-sm-8`
