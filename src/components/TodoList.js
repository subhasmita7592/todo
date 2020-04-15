import React, { Component } from 'react';
import { connect } from 'react-redux';
import Todo from './Todo';
import EditTodo from './EditTodo';


class TodoList extends Component {
    render() {
        return (
            <div>
                <h1 className='todo_heading'>Todo List</h1>
                {console.log('todos',this.props.todos)}
                {this.props.todos.map((todo)=>(
                    <div key={todo.id}>
                        {todo.editing? <EditTodo todo={todo} key={todo.id}/>:
                <Todo  todo={todo}/>}
                </div>
                ))}

            </div>
        );
    }
}

const mapStateToProps = (state)=>{
    return {
        todos:state
    }
}

export default connect(mapStateToProps) (TodoList);