"use client"
import React, { useState } from 'react';

export default function SoloLevelingApp() {
  const [mood, setMood] = useState('');
  const [task, setTask] = useState('');

  const moods = {
    'Broken': 'Daily Quest: Walk 500 steps and drink water. (Recovery)',
    'Sad': 'Daily Quest: Message a friend "Thank you". (Social Link)',
    'Angry': 'Daily Quest: 20 Pushups. Channel the heat.'
  };

  const selectMood = (m) => {
    setMood(m);
    setTask(moods[m]);
  };

  return (
    <div style={{ background: '#0a0a0a', color: '#00ccff', minHeight: '100vh', padding: '20px', textAlign: 'center', fontFamily: 'sans-serif' }}>
      <h1>SYSTEM: MOOD TRACKER</h1>
      <div>
        {Object.keys(moods).map(m => (
          <button key={m} onClick={() => selectMood(m)} style={{ margin: '10px', padding: '10px', border: '1px solid #00ccff', background: 'transparent', color: '#00ccff', cursor: 'pointer' }}>
            {m}
          </button>
        ))}
      </div>

      {task && (
        <div style={{ border: '2px solid #00ccff', padding: '20px', marginTop: '20px', backgroundColor: 'rgba(0, 204, 255, 0.1)' }}>
          <h3>ACTIVE QUEST:</h3>
          <p>{task}</p>
        </div>
      )}

      <div id="id-card" style={{ width: '300px', height: '180px', background: 'linear-gradient(45deg, #1a1a1a, #333)', border: '2px solid silver', borderRadius: '10px', margin: '40px auto', padding: '20px', color: 'silver', position: 'relative', textAlign: 'left' }}>
        <h2 style={{ margin: '0', fontSize: '1.2rem' }}>HUNTER ID</h2>
        <p style={{ fontSize: '0.8rem' }}>RANK: S (Developer)</p>
        <p style={{ marginTop: '40px', fontWeight: 'bold' }}>NAME: PLAYER_01</p>
        <div style={{ position: 'absolute', bottom: '10px', right: '10px', fontSize: '10px' }}>SYSTEM AUTHENTICATED</div>
      </div>
      <p style={{ fontSize: '12px', color: '#555' }}>Vercel Build Status: Ready</p>
    </div>
  );
            }
