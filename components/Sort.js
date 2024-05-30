import React from 'react';

const Sort = ({ setSort }) => {
  return (
    <div>
      <button onClick={() => setSort('none')} className="button">None</button>
      <button onClick={() => setSort('asc')} className="button">Ascending</button>
      <button onClick={() => setSort('desc')} className="button">Descending</button>
    </div>
  );
};

export default Sort;
