import React from 'react';

const Dashboard: React.FC = () => {
    return (
        <div style={{ padding: '20px' }}>
            <h1>Sports Dashboard</h1>
            <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }}>
                <div style={{ width: '30%', backgroundColor: '#f0f0f0', padding: '10px', borderRadius: '5px' }}>
                    <h2>Upcoming Matches</h2>
                    <ul>
                        <li>Team A vs Team B - 20th Oct</li>
                        <li>Team C vs Team D - 22nd Oct</li>
                        <li>Team E vs Team F - 25th Oct</li>
                    </ul>
                </div>
                <div style={{ width: '30%', backgroundColor: '#f0f0f0', padding: '10px', borderRadius: '5px' }}>
                    <h2>Recent Results</h2>
                    <ul>
                        <li>Team G 2-1 Team H</li>
                        <li>Team I 3-3 Team J</li>
                        <li>Team K 0-2 Team L</li>
                    </ul>
                </div>
                <div style={{ width: '30%', backgroundColor: '#f0f0f0', padding: '10px', borderRadius: '5px' }}>
                    <h2>Top Players</h2>
                    <ul>
                        <li>Player 1 - 10 Goals</li>
                        <li>Player 2 - 8 Goals</li>
                        <li>Player 3 - 7 Goals</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;