import React, { Component } from 'react';
import {connect} from 'react-redux'

class TodoForm extends Component {

    handleSubmit = (e)=>{
        e.preventDefault();
        const name = this.getName.value
        const data = {
            id:new Date(),
            name,
            editing:false
        }
        console.log(data)

        this.props.dispatch({
            type:'ADD_TODO',
            data
        });
        this.getName.value = '';
    }
    render() {
        return (
            <div className='todo-container'>
                <h1 className='todo_heading'>Create Todo</h1>
                <form onSubmit={this.handleSubmit} className='form'>
                    <input required type='text'ref={(input)=>this.getName = input} placeholder='Enter todo name'/><br/><br/>
                    <button>Add</button>
                </form>
            </div>
        );
    }
}

export default connect()(TodoForm);