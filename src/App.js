import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Colors from './Colors';
import ColorDetail from './ColorDetail';
import NewColorForm from './NewColorForm';
import './Color.css';
import './NotFound';

function App() {
  const [colors, setColors] = useState([]);

  // Load colors from localStorage on component mount
  useEffect(() => {
    const storedColors = localStorage.getItem('colors');
    if (storedColors) {
      setColors(JSON.parse(storedColors));
    }
  }, []);

  // Save colors to localStorage whenever colors change
  useEffect(() => {
    localStorage.setItem('colors', JSON.stringify(colors));
  }, [colors]);

  // Add new color to the list
  const addColor = (color) => {
    setColors([color, ...colors]); // Add the new color at the top
  };

  return (
    <Router>
      <Routes>
        <Route path="/colors" element={<Colors colors={colors} />} />
        <Route path="/colors/new" element={<NewColorForm addColor={addColor} />} />
        <Route path="/colors/:color" element={<ColorDetail colors={colors} />} />
        <Route path="/" element={<Navigate to="/colors" />} />
        <Route path="*" element={<Navigate to="/colors" />} />
      </Routes>
    </Router>
  );
}

export default App;
