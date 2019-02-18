import React, { Component } from 'react';
class  TodoItem  extends Component {
  handleDelete () {
    this.props.delte(this.props.index)
  }
  constructor(props) {
    super(props);
    this.handleDelete=this.handleDelete.bind(this)
  }
  render () {
    const  {content}=this.props
    return (
      <div onClick={this.handleDelete}>{content}</div>
    )
  }
}

export  default TodoItem;