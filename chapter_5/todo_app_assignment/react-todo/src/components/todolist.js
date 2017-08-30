import React from 'react';

class ToDoList extends React.Component {
    constructor() {
        super();
        this.state = {
        }
    }


    render() {
        return (
            <div>
                 {this.props.data.map((todo, index) =>
                    <li key={todo.id} className={"list-group-item" + (todo.done ? " done" : "")} >
                        <label>
                            <input onChange={()=>{this.props.toggle(index)}} type="checkbox" value="on" checked={todo.done === true ? "checked" : ""} />
                            {todo.text}
                        </label>
                    </li>
                )}
            </div>

        )
    }
}


export default ToDoList