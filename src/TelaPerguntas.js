import React from "react"

const perguntasINFO =    [{numPergunta: "1", pergunta: "Oque é JSX ?", resposta: "JSX é uma sintaxe para escrever HTML dentro do JS"},
                          {numPergunta: "2", pergunta: "O React é ...", resposta: "Uma biblioteca JavaScript para construção de interfaces"},
                          {numPergunta: "3", pergunta: "Componentes devem iniciar com...", resposta: "Letra maiúscula"},
                          {numPergunta: "4", pergunta: "podemos colocar (_____) debtro do JSX", resposta: "Expressões"},
                          {numPergunta: "5", pergunta: "O ReactDOM nos ajuda ...", resposta: "nteragindo com a DOM para colocar componentes React na mesma"},
                          {numPergunta: "6", pergunta: "Usamos o npm para ...", resposta: "gerenciar os pacotes necessários e suas dependências"},
                          {numPergunta: "7", pergunta: "Usamos props para ...", resposta: " passar diferentes informações para componentes "},
                          {numPergunta: "8", pergunta: "Usamos estado (state) para ...", resposta: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"}]

let arrayNomeIcones = [];

function IconesCheck(props){
  return(
    <ion-icon class={props.corDoIcone} name={props.iconeNOME}></ion-icon>)}

function Pergunta(props){
  const [telaPergunta, setTelaPergunta] = React.useState(0);
  const [perguntaRespondida, setPerguntaRespondida] = React.useState('')
  const [nomeIcone, setNomeIcone] = React.useState("play-outline")

  const classPrimeiraTelaCSS = `pergunta-primeira-tela ${perguntaRespondida}`

  if(telaPergunta === 0 ){
    return(
      <div className="pergunta">
        <button className = {classPrimeiraTelaCSS} > 
          <p>Pergunta {props.numPergunta} </p>
          <ion-icon onClick={ () => setTelaPergunta(1) } className="icone-pergunta" name={nomeIcone}></ion-icon>
        </button>
      </div>)}

  if(telaPergunta === 1){
    return(
      <div className="pergunta">
        <div className="pergunta-segunda-tela">
          <p> {props.pergunta} </p>
          <ion-icon onClick={() => setTelaPergunta(2)} className="icone-pergunta" name="repeat-outline"></ion-icon>
        </div>
      </div>)}

  if(telaPergunta === 2){
    return(
      <div className="pergunta">
        <div className="resposta-pergunta">
          <p> {props.resposta} </p>
          <div className="opcoes">

            <div onClick = {() => {setTelaPergunta(0) 
                                  setPerguntaRespondida('resposta-nao')
                                  setNomeIcone('close-circle')
                                  props.setArray([...props.array, 'close-circle'])}}
                                              className="nao-lembrei"><p>Não lembrei!</p>
            </div>
            <div onClick = {() => {setTelaPergunta(0) 
                                  setPerguntaRespondida('resposta-quase')
                                  setNomeIcone('help-circle')
                                  props.setArray([...props.array, 'help-circle'])}}
                                              className="quase-nao-lembrei"><p>Quase não Lembrei</p>
            </div>
            <div onClick = {() => {setTelaPergunta(0) 
                                  setPerguntaRespondida('resposta-zap')
                                  setNomeIcone('checkmark-circle')
                                  props.setArray([...props.array, 'checkmark-circle'])}}
                                              className="zap"><p>Zap!</p>
            </div>

          </div>
        </div>
      </div>)}
}

export default function TelaPerguntas() {
  const [array, setArray] = React.useState([])

  if((array.length) < (perguntasINFO.length)){
    return (
      <>
        <header>
            <img src="ZapRecall-Recursos/logo.png" alt="logo"/>
            <h1>ZapRecall</h1>
        </header>

        <main>
          {perguntasINFO.map(perguntaHTML => <Pergunta  numPergunta={perguntaHTML.numPergunta} 
                                                        pergunta={perguntaHTML.pergunta}  
                                                        resposta={perguntaHTML.resposta} 
                                                        setArray={setArray} 
                                                        array={array} />)}
        </main>

        <footer>
          <p> {array.length}/{perguntasINFO.length}</p>
          <p> {array.map(iconeNomeHTML => <IconesCheck corDoIcone={iconeNomeHTML} iconeNOME = {iconeNomeHTML}/>)}</p>
        </footer>)</>)}
  else{
    if(array.includes('close-circle')){
      return (
              <>
                <header>
                    <img src="ZapRecall-Recursos/logo.png" alt="logo"/>
                    <h1>ZapRecall</h1>
                </header>

                <main>
                  {perguntasINFO.map(perguntaHTML => <Pergunta  numPergunta={perguntaHTML.numPergunta} 
                                                                pergunta={perguntaHTML.pergunta}  
                                                                resposta={perguntaHTML.resposta} 
                                                                setArray={setArray} 
                                                                array={array} />)}
                </main>

                <footer>
                  <p> <span>😢</span> Puts !</p>
                  <p> Ainda faltaram alguns... Mas não desanime! </p>
                  <p> {array.map(iconeNomeHTML => <IconesCheck corDoIcone={iconeNomeHTML} iconeNOME = {iconeNomeHTML}/>)}</p>
                </footer>
              </>)}
    else{
      return (
        <>
        
          <header>
              <img src="ZapRecall-Recursos/logo.png" alt="logo"/>
              <h1>ZapRecall</h1>
          </header>

          <main>
            {perguntasINFO.map(perguntaHTML => <Pergunta  numPergunta={perguntaHTML.numPergunta} 
                                                          pergunta={perguntaHTML.pergunta}  
                                                          resposta={perguntaHTML.resposta} 
                                                          setArray={setArray} 
                                                          array={array} />)}
          </main>

          <footer>
            <p className="resultado-gabarito"> <span>🥳</span> Parabéns !</p>
            <p> Você não esqueceu de nenhum flashcard! </p>
            <p> {array.map(iconeNomeHTML => <IconesCheck corDoIcone={iconeNomeHTML} iconeNOME = {iconeNomeHTML}/>)}</p>
          </footer>

        </>)}
  }
}