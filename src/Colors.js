import React from 'react';
import { Link } from 'react-router-dom';

function Colors({ colors }) {
  return (
    <div>
      <h1>Welcome to the Color Factory!</h1>
      <h2><Link to="/colors/new">Add a New Color</Link></h2>
      <div>
        <h3>Please select a color:</h3>
        <ul>
          {colors.map((color, idx) => (
            <li key={idx}>
              <Link to={`/colors/${color.name}`}>{color.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Colors;
