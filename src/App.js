import React, { Component } from 'react';
import Task from './Task'
import List from './List'
import TodoForm from './TodoForm'
import './App.css'

class App extends Component {

  constructor() {
    super();

    this.state = {
      todos: [],
      currentList: '',
      search: '',
      editTask: false,
      editedTask: {name: '', list: ''}
    }
  }

  onSubmit(e) {
    this.state.tasks.push(<Task name={e.target.task.value} list="todo"/>);
    this.setState({tasks: this.state.tasks});
  }

  addTask(val, list) {
    if(this.state.editTask) {
      this.applyChangedTask(this.state.editedTask, {name: val, list: list});
    } else {
      const todo = {name: val, list: list};
      this.state.todos.push(todo);
      this.setState({todos: this.state.todos});
    }
  }

  renderLists() {
    let lists = this.state.todos.map(todo => todo.list);
    lists = [ ...new Set(lists) ];
    if(this.state.currentList !== '')
      lists = lists.filter(list => list===this.state.currentList);

    if(this.state.search !== '') {
        lists = lists.filter(list => list.toLowerCase().includes(this.state.search.toLowerCase()));
    }

    let arr = [];
    lists.forEach((list) => {
      arr.push({list: list, todos: this.state.todos.filter((todo)=> todo.list === list)});
    });

    return (
      <div>
        {lists.map(list => <List changeTask={this.changeTask.bind(this)} moveTodo={this.moveTodo.bind(this)} tasks={arr.filter(a => a.list === list)}/>)}
      </div>
    )
  }

  onSelectChange(e) {
    this.setState({currentList: e.target.value});
  }

  changeTask(task) {
    this.setState({editTask: true, editedTask: task})
  }

  applyChangedTask(task, newTask) {
    let todos = this.state.todos.reduce((todos, todo)=>{
      if(todo.name === task.name && todo.list === task.list) {
        todo.name = newTask.name;
        todo.list = newTask.list;
      }
      todos.push(todo);
      return todos;
    }, []);
    this.setState({todos: todos, editTask: false});
  }

  renderSelect() {
    let lists = this.state.todos.map(todo => todo.list);
    lists = [ ...new Set(lists) ];

    return(
      <div>
        <select onChange={this.onSelectChange.bind(this)} value={this.state.currentList}>
        <option value=''>-</option>
        {lists.map(list => <option value={list}>{list}</option>)}
        </select>
      </div>
    )
  }

  moveTodo(todo) {
    if(todo.target === undefined || todo.val === undefined ||
      todo.val.val === undefined || todo.val.attributes === undefined) {
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

  onChangeSearch(e) {
    this.setState({search: e.target.value});
  }

  renderSearchBox() {
    return(
      <div>
        <label>Search</label>
        <input type="text" onChange={this.onChangeSearch.bind(this)}/>
      </div>
    )
  }

  render() {
    let todoTasks = this.state.todos.filter(todo => todo.list==='todo');

    return (
      <div>
        <TodoForm edit={this.state.editTask} addTask={this.addTask.bind(this)}/>
        <div>
          {this.renderSearchBox()}
          {this.renderSelect()}
          {this.renderLists()}
          <div className="screen">
            <p>Screen:</p>
            <img src="./screen.png" alt="screen"/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
