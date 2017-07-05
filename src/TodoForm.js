import React from 'react'

class TodoForm extends React.Component {

  addTask() {
    this.props.addTask(this.input.value);
    this.input.value = '';
  }

  render() {
    return(
      <div>
        <input ref={node => {this.input = node;}} type="text" placeholder="Type task..."/>
        <button onClick={() => {this.addTask()}}>Add</button>
      </div>
    )
  }
}

export default TodoForm
