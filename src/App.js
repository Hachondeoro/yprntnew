import React from 'react';

// react router dom
import { BrowserRouter } from 'react-router-dom';

import Markup from './markup/Markup';

// css
import 'bootstrap/dist/css/bootstrap.min.css';

// sass
import './assets/scss/style.scss';

// js
import 'bootstrap/dist/js/bootstrap.min.js';

const App = () => {
  return (
    <BrowserRouter basename="/">
      <Markup />
    </BrowserRouter>
  );
};

export default App;
