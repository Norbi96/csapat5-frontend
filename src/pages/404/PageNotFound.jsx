import React from 'react';

function NotFound() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>404 - Az oldal nem található</h1>
      <p style={styles.text}>A keresett oldal nem létezik.</p>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f4f4f4',
  },
  heading: {
    fontSize: '2rem',
    marginBottom: '1rem',
  },
  text: {
    fontSize: '1rem',
  },
};

export default NotFound;
