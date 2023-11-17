import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navegacion from './components/Navegacion.jsx'
import InicioContainer from './components/Inicio/InicioContainer.jsx'
import PostContainer from './components/PostContainer/PostContainer.jsx'
import Footer from '../src/components/Footer.jsx'
import './index.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Navegacion/>
    <Routes>
      <Route path='/' element={<InicioContainer/>}/>
      <Route path='/:categoryId' element={<PostContainer/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  </React.StrictMode>,
)
