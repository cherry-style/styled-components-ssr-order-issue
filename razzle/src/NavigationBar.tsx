import React from 'react';
import { Link } from 'react-router-dom';

export const NavigationBar: React.FC = () => (
  <ul>
    <li>
      <Link to="/">BasicButtonPage</Link>
    </li>
    <li>
      <Link to="/anchor-button-page">AnchorButtonPage</Link>
    </li>
  </ul>
);
