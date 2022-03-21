import TelaInicial from "./TelaInicial"
import TelaPerguntas from "./TelaPerguntas"
import React from "react"

export default function App(){
    const [estadoPaginaUm, setEstadoPaginaUm] = React.useState(0)

    if(estadoPaginaUm === 0){
        return(
            <>
                <TelaInicial setEstadoPaginaUm = {setEstadoPaginaUm}/>
            </>
        )
    }
    if(estadoPaginaUm === 1 ){
    return(
        <>
            {/* <TelaInicial/> */}
            <TelaPerguntas/>
        </>
    )}
}