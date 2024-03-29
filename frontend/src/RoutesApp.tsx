import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header/Header';
import Records from './pages/Records';
import Charts from './pages/Charts';

const RoutesApp = () => (
    <BrowserRouter>
    <Header />
        <Routes>
			<Route path="/" element={<Home />} />
            <Route path="/records" element={<Records />} />
            <Route path="/charts" element={<Charts />} />
		</Routes>
    </BrowserRouter>
);

export default RoutesApp; 