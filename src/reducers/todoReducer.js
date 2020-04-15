const todoReducer = (state=[],action)=>{
    switch(action.type){
        case 'ADD_TODO':
            return state.concat([action.data]);
        
        case 'DELETE_TODO':
            return state.filter((todo)=>todo.id!== action.id)

        case 'EDIT_TODO':
             
            return state.map((todo)=>todo.id === action.id ? {...todo,editing:!todo.editing}:todo)

        case 'UPDATE_TODO':{
            return state.map((todo)=>{
                if(todo.id === action.id){
                    return {
                        ...todo,
                        name: action.data.newName,
                        editing: !todo.editing
                    } 
                }else return todo;
            })


        }    
            default:
                return state
    }

}

export default todoReducer;