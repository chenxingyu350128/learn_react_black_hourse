import React from 'react';
import ReactDOM from 'react-dom';
console.log('yoo!')
// ----------------------------------------------------------

// 创建虚拟dom元素
// const h1Text = '一级标题作为变量'
// const colors = ['red', 'green', 'blue', 'orange', 'puple']
// const MyDiv = <div id="myDiv">
//   <h1>{h1Text+'Yo!'}</h1>
//   这是jsx创建的div
//   {/* 注释 */}
//   {colors.map((item,i) => <h5 key={i}>{i}:{item}</h5>)}
//   <hr/>
//   {/* class */}
//   <p className="haha">haha</p>
//   <label htmlFor="forInput">label</label>
// </div>
// ReactDOM.render(MyDiv, document.getElementById('app'));
// ------------------------------------------------------

// 创建函数组件
// function Hello(props) {
//   console.log(props)
//   return <div>{props.name} {props.age}岁,性别：{props.gender}</div>
// }

// import Hello from '@cpnts/hello'
// const user = {
//   name: 'cxx',
//   age: 29,
//   gender: '男'
// }
// ReactDOM.render(<Hello {...user}></Hello>, document.getElementById('app'));

// ----------------------------------------------------------

// import HelloClass from '@cpnts/hello_class'
// const user = {
//   name: 'cxx',
//   age: 29,
//   gender: '男'
// }
// ReactDOM.render(<HelloClass {...user}></HelloClass>, document.getElementById('app'));
// ----------------------------------------------------------

import CmtList from '@cpnts/cmtList'
ReactDOM.render(<CmtList></CmtList>, document.getElementById('app'));
