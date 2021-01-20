import React from 'react';
import CmtUnit from '@cpnts/cmtUnit'
import cssobj from '../css/cmtList.scss'
import bootcss from 'bootstrap/dist/css/bootstrap.css'
//#region

//#endregion
console.log(cssobj)
export default class CmtList extends React.Component{
  constructor(){
    super()
    this.state = {
      commentList: [
        { id: 1, user: '张三', content: '土豆~~' },
        { id: 2, user: '李四', content: '山药~~' },
        { id: 3, user: '狗蛋', content: '萝卜~~' },
        { id: 4, user: '春花', content: '冬瓜~~' },
        { id: 5, user: '铁柱', content: '番茄~~' },
      ],
      title: '这是一个评论表',
      msg: 'wow'
    }
    this.inputChange = this.inputChange.bind(this)
  };
  render(){
    return <div>
      <h1 className={cssobj.title}>{this.state.msg}</h1>
      <input type="text" ref="text" value={this.state.msg} onChange={this.inputChange} ></input>
      {this.state.commentList.map(item => <CmtUnit key={item.id} {...item}/>)}
      <button onClick={()=>{this.clickEvent()}} className='btn btn-primary'>按钮</button>
    </div>
  };
  inputChange (e){
    console.log(e)
    console.log(this)
    this.setState({
      msg: e.target.value
    })
  }
  clickEvent() {
    console.log(this)
    // this.setState是异步执行的~
    this.setState(
      {
        title: '123'
      },
      () => {
        console.log('haha')
      }
    )
  }
}