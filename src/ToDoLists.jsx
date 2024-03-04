import React from 'react';

const ToDoLists = (props) => {
  return (
    <div>
      <li>{props.text}
        {/* Adding a button to delete the item */}
        <button onClick={() => {
          props.onSelect(props.id);
        }}>X</button>
      </li>
    </div>
  );
};

export default ToDoLists;
