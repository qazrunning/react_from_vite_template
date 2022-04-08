# README

开发记录以及开发计划

## context 组件传值 跨组件传值

跨组件通信的react解决 方案

```tsx
import React from 'react'

const con = React.createContext()
//提供服务 函数组件的方式
<con.Provider value="dsf"></con.Provider>
//使用服务
<con.Consumer>
{
	context=>{
		return(<div>{context}</div>)
	}
}
</con.Consumer>


//另一种方式 class类的方式
//类里直接写静态属性
static contextType = con


//function
有hooks
```

## react的生命周期

- componentWillMount （即将被废弃）
- componentDidMount （组件挂载后）

慢慢补吧

## events 时间总线

兄弟组件传值

## PrueComponent

阻止render重复渲染？ 代替component的方案，提升性能

简单来说，实现了shouldComponentUpdate。

通过props和state进行了浅比较，浅比较是react源码的内置函数

百度在看看吧

只在一些纯展示的组件上使用比较好。

## setState

setState在生命周期中是异步的

## 无所谓

1. 复杂页面建议用class 会更清晰。简单页面用function
2. 数据不多也可以用function
3. 其实你开心就好。
4. 还有一个区分点 看看你需不需要使用生命周期

所以让我选 我肯定全程函数式组件开发



## ts中type和interface的区别

type主要是描述类型

而interface侧重描述数据结构。多用于接口相关的定义

。。。自己在慢慢看，慢慢总结吧
