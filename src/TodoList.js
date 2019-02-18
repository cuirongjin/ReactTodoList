import React, { Component,Fragment } from 'react';
import TodoItem from './TodoItem'
class TodoList extends Component {
  handleBtnClick () {
    this.setState({
      list:[...this.state.list,this.state.inputValue],
      inputValue:''
    })
  }
  handleInputClick (e) {
    console.log(e.target.value);
    this.setState({
      inputValue:e.target.value,
    }) 
  }
  hadleDelte (index) {
    console.log(index)
    const  list=[...this.state.list]
    list.splice(index,1)
    this.setState({
      list:list
    })
  }
  getTodoList () {
    return (
      this.state.list.map((item,index)=>{
        return (
          <TodoItem  delte={this.hadleDelte} content={item}  index={index} key={index}/>
        )
       })
    )
         
    
  }
  constructor(props) {
    super(props);
    this.state={
      list:[],
      inputValue:''
    }
    this.handleInputClick=this.handleInputClick.bind(this);
    this.handleBtnClick=this.handleBtnClick.bind(this);
    this.hadleDelte=this.hadleDelte.bind(this);
  }
  render() {
    return (
      <Fragment className="App">
         <div>
          <input  value={this.state.inputValue} onChange={this.handleInputClick}></input>
          <button onClick={this.handleBtnClick}>add</button>
         </div>
         <ul>       
            {this.getTodoList()}
         </ul>
      </Fragment>
    );
  }
}
export default TodoList;
