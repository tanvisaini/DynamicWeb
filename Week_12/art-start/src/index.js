import React from 'react'
// we only need the one import from ReactDOM
import {createRoot} from 'react-dom/client'
import App from './App'
import './index.css'

const root = createRoot(document.getElementById('root'))
root.render(<App />)
