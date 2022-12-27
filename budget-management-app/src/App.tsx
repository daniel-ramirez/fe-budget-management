import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import Layout from './common/layout/Layout'
import Home from './features/home/Home';
import Login from './features/login/Login';
import Register from './features/register/Register';
import './App.css';

function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/signin' element={<Login />} />
            <Route path='/register' element={<Register />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </React.StrictMode>
  );
};

export default App;
