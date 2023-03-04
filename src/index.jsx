import React from 'react';
import { createRoot } from 'react-dom/client';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import {smartHomeData} from './smartHomeData';
import './style.css';

const App = () => (
  <>
    <div className="container">
      <Header className="header" title={'Chytrý dům'}/>
      <Dashboard data={smartHomeData}/>
    </div>
  </>
);

createRoot(
  document.querySelector('#app'),
).render(<App />);