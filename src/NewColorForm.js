import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function NewColorForm({ addColor }) {
  const [form, setForm] = useState({ name: '', value: '#000000' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addColor(form);
    navigate('/colors'); // Redirect to the color list
  };

  return (
    <div>
      <h1>Add a New Color</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Color Name: </label>
          <input
            type="text"
            name="name"
            id="name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="value">Pick Color: </label>
          <input
            type="color"
            name="value"
            id="value"
            value={form.value}
            onChange={handleChange}
            required
          />
        </div>
        <button>Add Color</button>
      </form>
    </div>
  );
}

export default NewColorForm;
