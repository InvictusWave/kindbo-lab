import React from 'react';

const EmptyState = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '80vh',
      textAlign: 'center',
      padding: '20px',
      backgroundColor: '#f8f9fa',
      color: '#343a40'
    }}>
      <h1 style={{ fontSize: '2.5em', marginBottom: '15px' }}>Video pembelajaran KindboLab Segera hadir</h1>
      <p style={{ fontSize: '1.2em', maxWidth: '600px' }}>Segera hadir video pembelajaran yang membantu orang tua memahami dunia belajar anak — dengan cara yang sederhana, bermakna, dan penuh kehangatan.</p>
    </div>
  );
};

export default EmptyState;
