import React from 'react';

import ToDoAdder from "./components/todoadder"
import ToDoList from "./components/todolist"

class App extends React.Component{
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


export default App;



// filter through this.state.todos to find items we want to keep in new "filtered" array




// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <div className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h2>Welcome to React</h2>
//         </div>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

// export default App;
