import React from 'react';
import './App.css';
import Input from './components/input';
import TodoItem from './components/TodoItem';

const todoList = [
  {
    item: 'todo1',
    done: false,
    id: 234234234234
  },
  {
    item: 'todo2',
    done: false,
    id: 234234677554
  },
]

function App() {
  return (
    <div className="app">
      <div className="app__container">
        <div className="todo__container">
          {
            todoList.map(item => (
              <TodoItem 
                name={item.item}
                done={item.done}
                id={item.id} 
              />
            ))
          }
        </div>
        <Input />
      </div>
    </div>
  );
}
 
export default App;
