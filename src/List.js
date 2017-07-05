import React from 'react';
import Task from './Task'
import './App.css'

class List extends React.Component {
  render() {

    return (<div className="list">
      {this.props.tasks[0].list}
      {this.props.tasks[0].todos.map(task => <Task name={task.name} list={this.props.tasks[0].list}/>)}
    </div>)
  }
}

export default List
