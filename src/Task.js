import React from 'react'
import './App.css'

class Task extends React.Component {
  state = {
    active: ''
  }
  onClick(e) {
    // console.log(e.target);
    this.props.changeTask({list: e.target.attributes.list.value, name: e.target.attributes.name.value});
    if(this.state.active === 'active')
      this.setState({active: ''});
    else
      this.setState({active: 'active'});
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
      <div className={"task " + this.state.active}
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
