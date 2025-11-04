import React, { useState, useEffect } from 'react';

const Notification = () => {
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    const handleNotification = (event) => {
      // Only show notification for login success
      if (event.detail.type === 'success') {
        setNotification(event.detail);
        setTimeout(() => {
          setNotification(null);
        }, 5000);
      }
    };

    window.addEventListener('showNotification', handleNotification);
    
    return () => {
      window.removeEventListener('showNotification', handleNotification);
    };
  }, []);

  if (!notification) return null;

  return (
    <div 
      style={{
        position: 'fixed',
        top: '20px',
        right: '20px',
        padding: '15px 20px',
        borderRadius: '8px',
        color: 'white',
        backgroundColor: '#28a745',
        zIndex: 99999,
        boxShadow: '0 6px 12px rgba(0,0,0,0.3)',
        fontSize: '16px',
        fontWeight: 'bold',
        minWidth: '250px',
        animation: 'slideIn 0.3s ease-out'
      }}
    >
      <span>{notification.message}</span>
      <button 
        onClick={() => setNotification(null)}
        style={{
          marginLeft: '10px',
          background: 'none',
          border: 'none',
          color: 'white',
          fontSize: '18px',
          cursor: 'pointer'
        }}
      >
        ×
      </button>
    </div>
  );
};

export default Notification;