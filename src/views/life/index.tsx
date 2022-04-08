import React,{Component} from "react";

class Life extends Component{
  state = {
    list:[1,2,3],
    time:new Date()
  }

  // props 可以自己定义 否则就是any
  constructor(props:any){
    super(props)
    // 初始化阶段
    console.log('1.初始化阶段',props,this.state)
  }
  // 即将被淘汰了。UNSAFE_ 清除报错
  //只会在挂载前调用一次，在render之前调用。一般我们可以在这个阶段调用接口
  //还可以在这个阶段 setState改变状态，并且不会额外调用一次render
  componentWillMount(){
    console.log('2.组件加载前')
  }
  componentDidMount(){
    //dom节点已经生成，只在挂载完成后调用一次，在render之后调用，这里已经可以获取DOM节点了
    console.log('3.组件挂载后')
  }
  // 找文档来慢慢补吧
  render(){
    console.log("组件挂载了")
    return (
      <>
        <h3>生命周期</h3>
        <button>点我</button>
      </>
    )
  }
}
export default Life
