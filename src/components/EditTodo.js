import React, { Component } from 'react';
import {connect} from 'react-redux';

class EditTodo extends Component {

    handleEdit = (e)=>{
        e.preventDefault();
        const newName = this.getName.value;

        const data = {
            newName,
        }

        this.props.dispatch({type:'UPDATE_TODO', id:this.props.todo.id, data:data})
    }

    render() {
        return (
            <div className='todo'>
                <form onSubmit={this.handleEdit}>
                    <input required type="text" ref={(input) => this.getName = input}
                        defaultValue={this.props.todo.name} placeholder="Enter todo name" /><br /><br />
                        <button>Update</button>

                </form>  
            </div>
        );
    }
}

export default connect() (EditTodo);