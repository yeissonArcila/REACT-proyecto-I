import React from 'react'
import  Menu  from './menu/Menu'
import styles from './App.css'
import Inicio from './seccion-Inicio/Inicio'
import Noticias from './noticias/Noticias.jsx'
 import Carreras from './carreras/Carreras'


const App = () => {
  return (
    <div>
      <Menu/>
      <Inicio/>
      <Noticias/>
      <Carreras/> 

    </div>
  )
}

export default App
