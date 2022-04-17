import React from 'react'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home'
import { Box } from '@mui/material';
import Navbar from './components/Navbar';
import FilterJwel from './components/FilterJwel';
import FilterClothing from './components/FilterClothing';
import FilterWomenClothing from './components/FilterWomenClothing';
import FilterElectronic from './components/FilterElectronics';

function App() {
  return (
    <>
      <Router>
          <Box>
             <Navbar/>
          </Box>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/jwelery" element={<FilterJwel/>}/>                     
            <Route path="/clothing" element={<FilterClothing />} />
            <Route path="/womensClothing" element={<FilterWomenClothing />} />
            <Route path="/electronics" element={<FilterElectronic/>} />

            
          </Routes>
      </Router>
      
    </>
  );
}

export default App;
