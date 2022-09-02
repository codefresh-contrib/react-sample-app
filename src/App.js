import React from 'react';
import { datadogRum } from '@datadog/browser-rum';
import logo from './logo.svg';
import './App.css';

// Initialize Datadog
const enableDD = process.env.REACT_APP_DD_RUM_ENABLE;

function App() {
  if (enableDD === 'true') {
    datadogRum.init({
      applicationId: process.env.REACT_APP_DD_CLIENT_APP_ID,
      clientToken: process.env.REACT_APP_DD_CLIENT_TOKEN,
      site: 'datadoghq.com',
      service: 'rum-testing-features',
      env: process.env.REACT_APP_DD_ENV || 'not_found',
      version: process.env.DD_RELEASE_VERSION || '1.0.0',
      sampleRate: 100,
      premiumSampleRate: 100,
      trackInteractions: true,
      trackFrustrations: true
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
