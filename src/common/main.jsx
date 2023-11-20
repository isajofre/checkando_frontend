import React from 'react'
import ReactDOM from 'react-dom/client'
import Routing from './Routing.jsx'
// Import our custom CSS
import './../../scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'


ReactDOM.createRoot(document.getElementById('root')).render(

    <React.StrictMode>
    
    <Routing />
    
  </React.StrictMode>,
)
