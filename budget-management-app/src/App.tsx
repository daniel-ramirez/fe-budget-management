import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import Layout from './common/layout/Layout'
import Home from './features/home/Home';
import Login from './features/login/Login';
import Register from './features/register/Register';
import './App.css';
import BankAccounts from './features/bank/BankAccounts';
import AddBankAccount from './features/bank/AddBankAccount';

function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/signin' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/bank-accounts' element={<BankAccounts />} />
            <Route path='/bank-accounts/add' element={<AddBankAccount />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </React.StrictMode>
  );
};

export default App;
