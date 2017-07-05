import React from 'react'
import './App.css'

class Task extends React.Component {

  state = {
    list: null
  }

  onClick(e) {
    // console.log(e.target);
  }

  onDragStart(e) {
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData("text/html", e.currentTarget);
  }

  onDragEnd(e) {
    // console.log('END', e.dataTransfer.getData("text/html"));
    
    this.props.dragEnd({val: e.target});
  }

  render() {
    return (
      <div className="task"
            list={this.props.list}
            name={this.props.name}
            draggable="true"
            onDragEnd={this.onDragEnd.bind(this)}
            onDragStart={this.onDragStart.bind(this)}
            onClick={this.onClick.bind(this)}>{this.props.name}</div>
    );
  }
}

Task.defaultProps = {
  name: 'Task'
}

export default Task
