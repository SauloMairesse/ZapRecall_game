import React from 'react'

export default function TelaInicial(){
    const [estadoPrimeiraTela, setEstadoPrimeiraTela] = React.useState('on')

    return (
        //Primeira tela
        <div keyword="telainicial" className={estadoPrimeiraTela}>
            <section className="logo">
                <img src="ZapRecall-Recursos/logo.png" alt="logo"/>
                <h1>ZapRecall</h1>
            </section>
            <button  onClick={() => setEstadoPrimeiraTela('off')} className="iniciar">Iniciar Recall!</button>
        </div>)
}