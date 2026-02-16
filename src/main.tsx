import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './clases/strings.ts'
import './clases/array.ts'
import './clases/import.ts'
import'./clases/objetos.ts'
import Bancos from './Bancos.tsx'
import HolaMundo from './HolaMundo.tsx'
import Variables from './Variables.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HolaMundo />
    <Variables />
    <Bancos/>
  </StrictMode>,
)
