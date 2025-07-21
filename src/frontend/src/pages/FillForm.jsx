import React, { useState } from 'react';

export default function FillForm() {
    const [patientName, setPatientName] = useState('');
    const [date, setDate] = useState('');

    const formContainer = {
        maxWidth: '400px',
        margin: '40px auto',
        padding: '20px',
        border: '1px solid #ddd',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0,0,0,0.1)'
    };

    const inputStyle = {
        width: '100%',
        padding: '10px',
        margin: '8px 0',
        borderRadius: '4px',
        border: '1px solid #ccc'
    };

    const buttonStyle = {
        width: '100%',
        padding: '10px',
        backgroundColor: '#4caf50',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        fontWeight: 'bold'
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch('http://localhost:5000/appointments', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ patient_name: patientName, date }),
        });
        if (res.ok) {
            alert('Appointment created successfully!');
            setPatientName('');
            setDate('');
        } else {
            alert('Failed to create appointment.');
        }
    };

    return (
        <div style={formContainer}>
            <h2>Fill Appointment Form</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Patient Name"
                    value={patientName}
                    onChange={(e) => setPatientName(e.target.value)}
                    style={inputStyle}
                    required
                />
                <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    style={inputStyle}
                    required
                />
                <button type="submit" style={buttonStyle}>Submit</button>
            </form>
        </div>
    );
}
