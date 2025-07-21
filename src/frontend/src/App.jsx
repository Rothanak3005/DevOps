import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import FillForm from  "./pages/FillForm";
import ViewForm from "./pages/viewform";

export default function App() {
    const navStyle = {
        display: 'flex',
        gap: '20px',
        padding: '10px',
        backgroundColor: '#4caf50',
        color: 'white'
    };

    const linkStyle = {
        color: 'white',
        textDecoration: 'none',
        fontWeight: 'bold'
    };

    return (
        <div>
            <nav style={navStyle}>
                <Link to="/fill-form" style={linkStyle}>Fill Form</Link>
                <Link to="/view-form" style={linkStyle}>View Forms</Link>
            </nav>
            <Routes>
                <Route path="/fill-form" element={<FillForm />} />
                <Route path="/view-form" element={<ViewForm />} />
            </Routes>
        </div>
    );
}
