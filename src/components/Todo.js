import React, { Component } from 'react';

import {connect} from 'react-redux'

class Todo extends Component {

    handleDelete=()=>{
        this.props.dispatch({
            type:'DELETE_TODO',
            id:this.props.todo.id
        })
    }

    handleEdit=()=>{
        this.props.dispatch({
            type:'EDIT_TODO',
            id:this.props.todo.id
        })
    }

    
    render() {
        return (
            <div className='todo'>
                <h3 className='todo_title'>{this.props.todo.name}</h3>
                <div className='control-buttons'>
                <button className='edit' onClick={this.handleEdit}>Edit</button>
                <button className='delete' onClick={this.handleDelete}>Delete</button>
                </div>
                
            </div>
        );
    }
}

export default connect()(Todo);