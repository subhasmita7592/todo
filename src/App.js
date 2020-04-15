import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';


function App() {
  return (
    <div className="App">
      <div className='navbar'>
        <h1 className='center'>Todo Application</h1>
      </div>
      <TodoForm/>
      <TodoList/>
    </div>
  );
}

export default App;
