import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Use environment variables - Vite automatically exposes VITE_* variables
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';
const APP_TITLE = import.meta.env.VITE_APP_TITLE || 'Chat App';

function App() {
  const [backendStatus, setBackendStatus] = useState('checking...');
  const [healthStatus, setHealthStatus] = useState('checking...');
  const [loading, setLoading] = useState(false);
  const [apiResponse, setApiResponse] = useState(null);

  useEffect(() => {
    checkBackendHealth();
  }, []);

  const checkBackendHealth = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/health`);
      setHealthStatus('✅ Online');
      setBackendStatus('✅ Connected');
    } catch (error) {
      setHealthStatus('❌ Offline');
      setBackendStatus('❌ Connection Failed');
    }
  };

  const testApiCall = async (endpoint) => {
    setLoading(true);
    setApiResponse(null);
    try {
      const response = await axios.get(`${API_BASE_URL}${endpoint}`);
      setApiResponse({
        success: true,
        data: response.data,
        endpoint: endpoint
      });
    } catch (error) {
      setApiResponse({
        success: false,
        error: error.message,
        endpoint: endpoint
      });
    }
    setLoading(false);
  };

  return (
    <div className="app">
      <div className="header">
        <h1>💬 {APP_TITLE}</h1>
        <p>Full-stack MERN application deployed on Render</p>
        <p><small>API URL: {API_BASE_URL}</small></p>
        <p><small>Environment: {import.meta.env.MODE}</small></p>
      </div>

      <div className="status-cards">
        <div className="status-card">
          <h3>Backend Status</h3>
          <p>{backendStatus}</p>
        </div>
        <div className="status-card">
          <h3>Health Check</h3>
          <p>{healthStatus}</p>
        </div>
        <div className="status-card">
          <h3>Environment</h3>
          <p>{import.meta.env.MODE}</p>
        </div>
      </div>

      <div className="buttons">
        <button 
          className={`button ${loading ? 'loading' : ''}`}
          onClick={() => testApiCall('/')}
          disabled={loading}
        >
          Test Main API
        </button>
        <button 
          className={`button ${loading ? 'loading' : ''}`}
          onClick={() => testApiCall('/health')}
          disabled={loading}
        >
          Test Health API
        </button>
        <a 
          href={API_BASE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="button"
        >
          View Backend API
        </a>
      </div>

      {apiResponse && (
        <div className="api-response">
          <h4>API Response from {apiResponse.endpoint}:</h4>
          <pre>{JSON.stringify(apiResponse, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default App;
