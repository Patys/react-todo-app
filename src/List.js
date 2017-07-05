import React from 'react';
import Task from './Task'
import './App.css'

class List extends React.Component {
  over = null

  onDragOver(e) {
    e.preventDefault();
    this.over = e.target;
  }

  dragEnd = (val) => {
    this.props.moveTodo({val: val.val, target: this.over});
  }

  render() {

    return (<div className="list"
      list={this.props.tasks[0].list}
      onDragOver={this.onDragOver.bind(this)}
      onDrop={this.dragEnd.bind(this)}>
      {this.props.tasks[0].list}
      {this.props.tasks[0].todos.map(task => <Task name={task.name} list={this.props.tasks[0].list} dragEnd={this.dragEnd}/>)}
    </div>)
  }
}

export default List
