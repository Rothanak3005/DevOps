import React, { useState } from 'react';

export default function ViewForm() {
    const [appointments, setAppointments] = useState([]);
    const [id, setId] = useState('');

    const container = {
        maxWidth: '600px',
        margin: '40px auto',
        padding: '20px',
        textAlign: 'center'
    };

    const inputStyle = {
        padding: '8px',
        margin: '8px',
        borderRadius: '4px',
        border: '1px solid #ccc'
    };

    const buttonStyle = {
        padding: '8px 16px',
        backgroundColor: '#4caf50',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        fontWeight: 'bold'
    };

    const card = {
        border: '1px solid #ddd',
        borderRadius: '6px',
        padding: '10px',
        margin: '10px 0',
        textAlign: 'left'
    };

    const fetchAppointments = async () => {
        const res = await fetch('http://localhost:5000/appointments');
        const data = await res.json();
        if (id) {
            const filtered = data.filter(a => a.id === parseInt(id));
            setAppointments(filtered);
        } else {
            setAppointments(data);
        }
    };

    return (
        <div style={container}>
            <h2>View Appointments</h2>
            <input
                type="number"
                placeholder="Filter by ID"
                value={id}
                onChange={(e) => setId(e.target.value)}
                style={inputStyle}
            />
            <button onClick={fetchAppointments} style={buttonStyle}>View</button>
            <div>
                {appointments.map(appt => (
                    <div key={appt.id} style={card}>
                        <p><strong>ID:</strong> {appt.id}</p>
                        <p><strong>Patient Name:</strong> {appt.patient_name}</p>
                        <p><strong>Date:</strong> {appt.date}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
