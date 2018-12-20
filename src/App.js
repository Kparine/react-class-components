import React, { Component } from 'react';
import shortId from 'shortid'
import AddTodo from './AddTodo'
import NewList from './NewList'

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      todos: [
        { id: shortId.generate(), description: 'Gotta go fast', completed: false },
        { id: shortId.generate(), description: 'Recover chaos emeralds', completed: false },
        { id: shortId.generate(), description: 'Find time to chill with Tails', completed: true },
      ]
    }
  }

  handleCompleteAll = (e) => {
    const newTodos = this.state.todos.map(todo => ({...todo, completed: true }))
  
    this.setState({
      todos: newTodos
    })
  }

  handleComplete = (todo) => {
  const newTodos = this.state.todos.map(el => {
    if (el === todo) return {...el, completed: true}
    else return {...el}
    })

    this.setState({
      todos: newTodos

    })
  }

  handleDelete = (todo) => {
    const newTodos = this.state.todos.filter(el => el !== todo)

    this.setState({
      todos: newTodos
    })
  }

  addTodo = (todo)=> {
    this.setState({
      todos: [...this.state.todos, todo]
    })
  }

  render() {
    return (
      <div>
        <div>
          <img src="https://yt3.ggpht.com/a-/AN66SAzMIYayieByccBHaOSxi-Tl5zluCmvk7sivKQ=s900-mo-c-c0xffffffff-rj-k-no" style={{width:'200px'}}/>
        </div>
 
      <NewList 
      todos={this.state.todos}
      handleComplete={this.handleComplete}
      handleDelete={this.handleDelete}
      />

        <button onClick={this.handleCompleteAll} >Complete All</button>

      <AddTodo addTodo={this.addTodo}/>
      

      </div>
    );
  }
}

export default App;
