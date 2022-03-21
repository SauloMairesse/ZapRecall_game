import React from 'react'

export default function TelaInicial({setEstadoPaginaUm}){


    const [estadoPrimeiraTela, setEstadoPrimeiraTela] = React.useState('on')

    return (
        <div keyword="telainicial">
            <section className="logo">
                <img src="ZapRecall-Recursos/logo.png" alt="logo"/>
                <h1>ZapRecall</h1>
            </section>
            <button onClick={() => setEstadoPaginaUm(1)} className="iniciar">Iniciar Recall!</button>
        </div>)}