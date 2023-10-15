import React, { useState } from 'react';

const TodoList = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');

  const addItem = () => {
    if (newItem) {
      setItems([...items, newItem]);
      setNewItem('');
    }
  };

  const resetItems = () => {
    setItems([]); // Clear the items array
  };

  const removeItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => removeItem(index)}>Remove</button>
          </li>
        ))}
      </ul>
      <div>
        <input type="text" value={newItem} onChange={(e) => setNewItem(e.target.value)}/>
        <button onClick={addItem}>Add Item</button>
        <button onClick={resetItems}>Reset</button>
      </div>
    </div>
  );
};

export default TodoList;