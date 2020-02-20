import React, { Component } from 'react';

import Todos from './Todos';
import AddTodo from './AddTodo';


class App extends Component {
  state = {
    todos: [
      {id: 1, content: 'Make a todo app'},
      {id: 2, content: 'Learn React'}
    ]
  }

  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    });
    this.setState({
      todos: todos //ou só todos porque têm o mesmo nome
    })
    
  }
  addTodo = (todo) => {
    todo.id = Math.random();
    let todos  = [...this.state.todos, todo];
    this.setState({
      todos: todos //ou todos porque têm o mesmo nome
    })
  }
  render() {
    return (
      <div className="App container">
        <h1 className="center blue-text text-lighten-2 bold">Todo's</h1>
        <p className="center">Click on item to delete</p>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }

}

export default App;
