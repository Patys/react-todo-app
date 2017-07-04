import React from 'react';
import Task from './Task'

class List extends React.Component {
  render() {
    console.log(this.props.tasks);
    return (<div>
      {this.props.tasks.map(task => <Task name={task.text} />)}
    </div>)
  }
}

export default List
