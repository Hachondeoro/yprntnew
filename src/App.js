import React from 'react';

// react router dom
import { BrowserRouter } from 'react-router-dom';

import AppRoutes from './markup/AppRoutes';

// css
import 'bootstrap/dist/css/bootstrap.min.css';

// sass
import './assets/scss/style.scss';

// js
import 'bootstrap/dist/js/bootstrap.min.js';

const App = () => {
  return (
    <BrowserRouter basename="/">
      <AppRoutes />
    </BrowserRouter>
  );
};

export default App;
