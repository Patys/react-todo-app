import React from 'react'
import './App.css'

class Task extends React.Component {

  state = {
    list: null
  }

  onClick(e) {
    console.log(e.target);
  }

  render() {
    return (
      <div className="task"
            draggable="true"
            onDragEnd={this.dragEnd.bind(this)}
            onDragStart={this.dragStart.bind(this)}
            onClick={this.onClick.bind(this)}>{this.props.name}</div>
    );
  }
}

Task.defaultProps = {
  name: 'Task'
}

export default Task
