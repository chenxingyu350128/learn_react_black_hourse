import React from 'react';
import cssobj from '../css/cmtList.scss'

export default class CmtUnit extends React.Component{
  constructor(){
    super()
  }
  render(){
    return <div className={cssobj.unitBox}>
        <h2 className={cssobj.h2}>评论人{this.props.user}</h2>
        <p>喜欢吃{this.props.content}</p>
      </div>
  }
}