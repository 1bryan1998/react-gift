import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import  './styles.css'
import { GiftExpertApp } from './GiftExpertApp' 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GiftExpertApp />
  </StrictMode>
)
