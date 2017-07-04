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
      <div className="task" onClick={this.onClick.bind(this)}>{this.props.name}</div>
    );
  }
}

Task.defaultProps = {
  name: 'Task'
}

export default Task
