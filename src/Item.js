import React from 'react';

const Item = ({ item, onDelete }) => {
  return (
    <div className="item">
      <h2>{item.name}</h2>
      <p>{item.description}</p>
      <button onClick={() => onDelete(item._id)}>Delete</button>
    </div>
  );
};

export default Item;
