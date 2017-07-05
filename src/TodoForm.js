import React from 'react'

class TodoForm extends React.Component {

  addTask() {
    this.props.addTask(this.input.value, this.list.value);
    this.input.value = '';
    this.list.value = '';
  }

  render() {
    return(
      <div>
        <input ref={node => {this.input = node;}} type="text" placeholder="Type task..."/>
        <input ref={node => {this.list = node;}} type="text" placeholder="Type list..."/>
        <button onClick={() => {this.addTask()}}>Add</button>
      </div>
    )
  }
}

export default TodoForm
