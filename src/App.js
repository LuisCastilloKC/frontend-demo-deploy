import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ItemList from './ItemList';

const App = () => {
  const [items, setItems] = useState([]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await axios.get('https://chingu-demo-api.onrender.com/items');
      setItems(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://chingu-demo-api.onrender.com/items', { name, description });
      fetchItems();
      setName('');
      setDescription('');
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://chingu-demo-api.onrender.com/items/${id}`);
      fetchItems();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="app">
      <h1>CRUD App with React</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Create Item</button>
      </form>
      <ItemList items={items} onDelete={handleDelete} />
    </div>
  );
};

export default App;