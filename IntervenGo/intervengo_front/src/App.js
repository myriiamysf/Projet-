// import logo from './logo.svg';
import './App.css';

import React from 'react';
import "./index.css";
import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard';
import Form from './pages/Form/Form'
import Liste from './pages/Liste/Liste';
import CreateIntervention from './pages/CreateIntervention/CreateIntervention';



function App() {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/liste" element={<Liste />} />
      <Route path="/form" element={<Form />} />
      <Route path="/create-intervention" element={<CreateIntervention />} />
    </Routes>
  );
}

export default App;
