import React from 'react';
// 创建函数组件
export default function Hello(props) {
  console.log(props)
  return <div>{props.name} {props.age}岁,性别：{props.gender}</div>
}
