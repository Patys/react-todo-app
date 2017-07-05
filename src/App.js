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

  addTask(val, list) {
    const todo = {name: val, list: list};
    this.state.todos.push(todo);
    this.setState({todos: this.state.todos});
  }

  renderLists() {
    let lists = this.state.todos.map(todo => todo.list);
    lists = [ ...new Set(lists) ];
    let arr = [];
    lists.forEach((list) => {
      arr.push({list: list, todos: this.state.todos.filter((todo)=> todo.list === list)});
    });

    return (
      <div>
        {lists.map(list => <List tasks={arr.filter(a => a.list === list)}/>)}
      </div>
    )
  }

  render() {
    let todoTasks = this.state.todos.filter(todo => todo.list==='todo');

    return (
      <div>
        <TodoForm addTask={this.addTask.bind(this)}/>
        <div>
          {this.renderLists()}
        </div>
      </div>
    );
  }
}

export default App;
