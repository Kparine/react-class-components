import React, { Component } from 'react';
import shortId from 'shortid'

class AddTodo extends Component {
  constructor(props){
    super(props)

    this.state = {
      newTodo: ''
    }
  }

  handleChange = (e) => {

    this.setState({
      [ e.target.name ] : e.target.value
      //The square brackets evaluate the key of the object
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const todo = {
      id: shortId.generate(),
      description: this.state.newTodo,
      completed: false
    }  
    this.props.addTodo(todo)
    this.setState({
      newTodo: ''
    })
  }

  render(){
    return(
    <form onSubmit={this.handleSubmit}>
    <input type='text' name='newTodo' value={this.state.newTodo} onChange={this.handleChange}/>
    <input type='submit' name='Add todo'/>
    </form>
    )
  }
}

export default AddTodo;