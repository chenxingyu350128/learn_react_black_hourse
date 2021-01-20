import React from 'react';
// import { render } from 'react-dom';
export default class HelloClass extends React.Component{
  constructor(){
    super()
    this.state = {
      msg: '提示信息'
    };
  }
  render(){
    return  <div>
      <h1>{this.state.msg}</h1>
      {this.props.name} {this.props.age}岁,性别：{this.props.gender}
      </div>
  }
}