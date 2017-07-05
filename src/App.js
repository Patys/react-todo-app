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
        {lists.map(list => <List moveTodo={this.moveTodo.bind(this)} tasks={arr.filter(a => a.list === list)}/>)}
      </div>
    )
  }

  renderSelect() {
    let lists = this.state.todos.map(todo => todo.list);
    
    return(
      <div>
        <select>
        {lists.map(list => <option>{list}</option>)}
        </select>
      </div>
    )
  }

  moveTodo(todo) {
    if(todo.target === undefined || todo.val === undefined) {
      console.log('error t:',todo.target);
      console.log('error v:',todo.val);
      return;
    }
    console.log(todo.val);
    console.log(todo.val.val);
    let name = todo.val.val.attributes.name.value;
    let list = todo.val.val.attributes.list.value;
    let temp = this.state.todos.filter(todo => (todo.name!==name || todo.list!==list));

    let newname = todo.val.attributes.name.value;
    let newlist = todo.target.attributes.list.value;

    temp.push({name: newname, list: newlist});
    this.setState({todos: temp});
  }

  render() {
    let todoTasks = this.state.todos.filter(todo => todo.list==='todo');

    return (
      <div>
        <TodoForm addTask={this.addTask.bind(this)}/>
        <div>
          {this.renderSelect()}
          {this.renderLists()}
        </div>
      </div>
    );
  }
}

export default App;
