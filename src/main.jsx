import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Intro from './Intro'
import Timeline from './Timeline'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Intro />
    <App />
    <Timeline />
  </React.StrictMode>
)
