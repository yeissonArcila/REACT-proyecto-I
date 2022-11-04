import React from 'react'
import './inicio.css'
import cerebro from '../assets/cerebro.png'
import numeral from '../assets/nuemeral-azul-claro.png'
import flecha from '../assets/Eslash-felcha-amatillo.png'

export const Inicio = () => {
  return (
    <div>
        <main className='section-cover' id='inicio'>
            <section className='cover'>
                <ul className='slider'>
                    <li id='new1'>
                        <section className='text'>
                            <h1>EL CRIMEN NO PAGA TANTO COMO EL CODIGO</h1>
                            
                        </section>
                        {/* <section className='imagen-cover'>
                            <img src={cerebro}/>
                        </section> */}
                        <section className="numeral-cover">
                        <img src={numeral} alt=""/>
                    </section>
                    <section className="eslash-cover">
                        <img src={flecha} alt=""/>
                    </section>
                    </li>

                    <li id="new2"></li>

                 <li id="new3"></li>
                  </ul>

            </section>

        </main>

    </div>
  )
}
export default Inicio
