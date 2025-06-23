import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav style={{ display: 'flex', gap: '1rem', padding: '1rem', background: '#f5f5f5' }}>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/signup">Sign Up</Link>
      <Link to="/photos">Photos</Link>
      <Link to="/add">Add</Link>
      <Link to="/video">Video</Link>
      <Link to="/videoPlay">Video Player</Link>
    </nav>
  );
}

export default Navigation; 