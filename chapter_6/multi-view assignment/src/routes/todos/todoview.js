import React from 'react';

import ToDoAdder from "./todoadder"
import ToDoList from "./todolist"

class TodoView extends React.Component{
	constructor(){
		super();
		this.state = {
			todos: [
				{ text: 'learn angular', done: false, id: 1 },
				{ text: 'write the content for the next module', done: false, id: 2 },
				{ text: 'buy cheese', done: true, id: 3 },
				{ text: 'buy milk', done: true, id: 4 }
			]
			
		}
		this.clickSubmit = this.clickSubmit.bind(this)
		this.toggleDone = this.toggleDone.bind(this)
	}

	clickSubmit(passedTodo){
		//get current todo array
		const todoArray = this.state.todos
		// add passedtodo to current todo array
		todoArray.push(passedTodo)
		// set this.state.todos to new array with passedtodo added
			
		this.setState({
			todos: todoArray
		})
	}

	toggleDone(passedIndex){	
		const todoArray = this.state.todos;
		todoArray[passedIndex].done = (todoArray[passedIndex].done === true ? false : true);
		//  find index of todo that's been clicked in array
		this.setState({
			todos: todoArray
		})
	}




	render(){
		return(
			<div>
				<h1>todos</h1>
				<div className="container">
					<ToDoAdder data={this.state.todos} add={this.clickSubmit} />
					<ToDoList data={this.state.todos} toggle={this.toggleDone} />
				</div>
			</div>
		)
	}
}


export default TodoView;
