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
    this.setState({over: this.over, val: val.val}, ()=> {
      this.props.moveTodo({val: val, target: this.over});
    });
  }

  changeTask(task) {
    this.props.changeTask(task);
  }

  render() {

    return (<div className="list"
      list={this.props.tasks[0].list}
      onDragOver={this.onDragOver.bind(this)}
      onDrop={this.dragEnd.bind(this)}>
      {this.props.tasks[0].list}
      {this.props.tasks[0].todos.map(task => <Task name={task.name} changeTask={this.changeTask.bind(this)} list={this.props.tasks[0].list} dragEnd={this.dragEnd}/>)}
    </div>)
  }
}

export default List
