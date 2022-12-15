import React from 'react'
import { BrowserRouter as Browter } from "react-router-dom";
import ReactDOM from 'react-dom/client'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Browter>
        <App />
    </Browter>
  </React.StrictMode>
)
