import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'https://deployment-and-devops-essentials-ebk0.onrender.com';

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
    <div className="App">
      <header className="App-header">
        <h1>💬 Chat App</h1>
        <p>Full-stack MERN application deployed on Render</p>
        
        <div className="status-cards">
          <div className="status-card">
            <h3>Backend Status</h3>
            <p>{backendStatus}</p>
          </div>
          <div className="status-card">
            <h3>Health Check</h3>
            <p>{healthStatus}</p>
          </div>
        </div>

        <div className="buttons">
          <button 
            onClick={() => testApiCall('/')}
            disabled={loading}
          >
            Test Main API
          </button>
          <button 
            onClick={() => testApiCall('/health')}
            disabled={loading}
          >
            Test Health API
          </button>
        </div>

        {apiResponse && (
          <div className="api-response">
            <h4>API Response from {apiResponse.endpoint}:</h4>
            <pre>{JSON.stringify(apiResponse, null, 2)}</pre>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;


