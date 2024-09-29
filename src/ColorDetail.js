import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom'; // Added Link import

function ColorDetail({ colors }) {
  const { color } = useParams();
  const selectedColor = colors.find(c => c.name === color);

  if (!selectedColor) {
    return <Navigate to="/colors" />;
  }

  return (
    <div style={{ backgroundColor: selectedColor.value, height: '100vh' }}>
      <h1>This is {selectedColor.name}!</h1>
      <h3>Isn't it beautiful?</h3>
      {/* Use Link to go back to all colors */}
      <p><Link to="/colors">Go back to all colors</Link></p>
    </div>
  );
}

export default ColorDetail;
