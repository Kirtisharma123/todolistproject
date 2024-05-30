import React from 'react';

const Filter = ({ setFilter }) => {
  return (
    <div>
      <button onClick={() => setFilter('all')} className="button">All</button>
      <button onClick={() => setFilter('active')} className="button">Active</button>
      <button onClick={() => setFilter('completed')} className="button">Completed</button>
    </div>
  );
};

export default Filter;
