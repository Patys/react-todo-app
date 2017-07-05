import React from 'react'

class TodoForm extends React.Component {

  addTask() {
    this.props.addTask(this.input.value, this.list.value);
    this.input.value = '';
    this.list.value = '';
  }

  render() {
    let text = this.props.edit===true ? 'Edit' : 'Add';
    return(
      <div>
        <input ref={node => {this.input = node;}} type="text" placeholder="Type task..."/>
        <input ref={node => {this.list = node;}} type="text" placeholder="Type list..."/>
        <button onClick={() => {this.addTask()}}>{text}</button>
      </div>
    )
  }
}

export default TodoForm
