import React, { Component } from 'react';
import Task from './Task'
import List from './List'

class App extends Component {

  constructor() {
    super();

    this.state = {
      lists: ["todo", "done"],
      tasks: []
    }
  }

  onSubmit(e) {
    let newArr = this.state.tasks;
    newArr.push({text: e.target.value, list: "todo"});

    this.setState({tasks: newArr});
  }

  render() {
    console.log(this.state.tasks);
    return (
      <div>
        <form onSubmit={this.onSubmit.bind(this)}>
          <input type="text" placeholder="Type task..."/>
          <input type="submit" value="Add"/>
        </form>
        <div>
          <List tasks={this.state.tasks}/>
        </div>
      </div>
    );
  }
}

export default App;
