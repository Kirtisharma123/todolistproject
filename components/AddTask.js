import React, { useState } from 'react';

const AddTask = ({ addTask }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(inputValue);
    setInputValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Add a new task"
        className="input-field"
      />
      <button type="submit" className="button">Add</button>
    </form>
  );
};

export default AddTask;
