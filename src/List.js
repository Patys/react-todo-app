import React from 'react';
import Task from './Task'

class List extends React.Component {
  render() {
    console.log(this.props.tasks);
    return (<div>
      {this.props.tasks.map(task => <Task name={task.name} list={task.list}/>)}
    </div>)
  }
}

export default List
