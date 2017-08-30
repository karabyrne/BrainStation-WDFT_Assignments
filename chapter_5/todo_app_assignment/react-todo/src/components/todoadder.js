import React from 'react';

class ToDoAdder extends React.Component {
	constructor() {
		super();
		this.state = {
		}
		this.handleChange = this.handleChange.bind(this);
	}

	handleSubmit = (e) => {
		const todo = { text: this.state.value, done: false, id: this.props.data.length + 1 };
		this.props.add(todo)
		e.preventDefault();
		console.log("Button was clicked");
		// get value of text box and pass it to the parent to be 
		// added to the list of todos (need to write function for this - needs to be
		// passed in as a prop)
	}

	handleChange(event) {
		this.setState({ value: event.target.value });
	}





	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<div className="input-group">
						<span className="input-group-btn">
							<button className="btn btn-primary" type="submit">Add</button>
						</span>
						<input onChange={this.handleChange} type="text" className="form-control" placeholder="add a todo" />
					</div>
				</form>
			</div>
		)
	}
}

export default ToDoAdder