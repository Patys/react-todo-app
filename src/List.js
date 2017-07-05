import React from 'react';
import Task from './Task'
import './App.css'

class List extends React.Component {

  state = {
    target: 'unassigned'
  }

  onDragOver(e) {
    this.setState({target: e.target.attributes.list.value});
    console.log('over', this.state.target);
  }

  dragEnd(val) {
    console.log('state', this.state.target);
    console.log('val', val.val);
    this.props.moveTodo({val: val.val, target: this.state.target});
  }

  render() {

    return (<div className="list"
      list={this.props.tasks[0].list}
      onDragOver={this.onDragOver.bind(this)}>
      {this.props.tasks[0].list}
      {this.props.tasks[0].todos.map(task => <Task name={task.name} list={this.props.tasks[0].list} dragEnd={this.dragEnd.bind(this)}/>)}
    </div>)
  }
}

export default List
