import React, { Component } from 'react';
import Task from './Task'
import List from './List'
import TodoForm from './TodoForm'

class App extends Component {

  constructor() {
    super();

    this.state = {
      todos: []
    }
  }

  onSubmit(e) {
    this.state.tasks.push(<Task name={e.target.task.value} list="todo"/>);
    this.setState({tasks: this.state.tasks});
  }

  addTask(val) {
    const todo = {name: val, list: "todo"};
    this.state.todos.push(todo);
    this.setState({todos: this.state.todos});
  }

  render() {
    console.log(this.state.tasks);
    return (
      <div>
        <TodoForm addTask={this.addTask.bind(this)}/>
        <div>
          <List tasks={this.state.todos}/>
        </div>
      </div>
    );
  }
}

export default App;
