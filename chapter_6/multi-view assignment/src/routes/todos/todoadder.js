import React from 'react';

class ToDoAdder extends React.Component {
	constructor() {
		super();
		this.state = {
			currentText: ""
		}
	}

    handleSubmit = (e) => {
		e.preventDefault();
		this.props.add({text: this.state.currentText, done: false, id: this.props.data.length +1})
// get value of text box and pass it to the parent to be 
// added to the list of todos (need to write function for this - needs to be
// passed in as a prop)
	}

	handleInputChange = (e) => {
		this.setState({
			currentText: e.target.value
		})
	}












	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<div className="input-group">
						<span className="input-group-btn">
							<button className="btn btn-primary" type="submit">Add</button>
						</span>
						<input onChange={this.handleInputChange} value={this.state.value} className="form-control" placeholder="add a todo" />
					</div>
				</form>
			</div>
		)
	}
}

export default ToDoAdder