import React, { useState } from 'react';
import ToDoLists from './ToDoLists';

const App = () => {
  const [inputList, setInputList] = useState('');
  const [items, setItems] = useState([]);

  const addItem = (event) => {
    setInputList(event.target.value);
  };

  const listOfItems = (event) => {
    event.preventDefault();
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList("");
  };

  const deleteItem = (id) => {
    setItems((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };

  return (
    <>
      <div className='main_div'>
        <div className='center_div'>
          <br />
          <h1>ToDo List</h1>
          <br />
          <form onSubmit={listOfItems}>
            <input type="text" placeholder='Enter your to do item' onChange={addItem} value={inputList} />
            <button type='submit'>+</button>
          </form>
          <ol>
            {items.map((itemVal, index) => {
              return (
                <ToDoLists
                  key={index}
                  id={index}
                  text={itemVal}
                  onSelect={deleteItem}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default App;
