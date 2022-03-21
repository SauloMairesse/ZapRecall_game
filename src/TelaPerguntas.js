import React from "react"

const perguntasINFO =    [{numPergunta: "1", pergunta: "Oque é JSX ?", resposta: "JSX é uma sintaxe para escrever HTML dentro do JS"},
                          {numPergunta: "2", pergunta: "O React é ..."}]

function Pergunta(props){

  const [telaPergunta, setTelaPergunta] = React.useState(0);
  const [perguntaRespondida, setPerguntaRespondida] = React.useState('')
  const [nomeIcone, setNomeIcone] = React.useState("play-outline")

  const classPrimeiraTelaCSS = `pergunta-primeira-tela ${perguntaRespondida}`
  
  if(telaPergunta === 0 ){
    return(
      <button className = {classPrimeiraTelaCSS} > 
        <p>Pergunta {props.numPergunta} </p>
        <ion-icon onClick={ () => setTelaPergunta(1) } className="icone-pergunta" name={nomeIcone}></ion-icon>
      </button>)}

  if(telaPergunta === 1){
    return(
      <div className="pergunta-segunda-tela">
        <p> {props.pergunta} </p>
        <ion-icon onClick={() => setTelaPergunta(2)} className="icone-pergunta" name="repeat-outline"></ion-icon>
      </div>)}

  if(telaPergunta === 2){
    return(
      <div className="pergunta">
      <div className="resposta-pergunta">
        <p> {props.resposta} </p>
        <div className="opcoes">
          <div onClick = {() => {setTelaPergunta(0) 
                                setPerguntaRespondida('resposta-nao')
                                setNomeIcone('close-circle')}}
                                            className="nao-lembrei"><p>Não lembrei!</p>
          </div>
          <div onClick = {() => {setTelaPergunta(0) 
                                setPerguntaRespondida('resposta-quase')
                                setNomeIcone('help-circle')}}
                                            className="quase-nao-lembrei"><p>Quase não Lembrei</p>
          </div>
          <div onClick = {() => {setTelaPergunta(0) 
                                setPerguntaRespondida('resposta-zap')
                                setNomeIcone('checkmark-circle')}} className="zap"><p>Zap!</p>
          </div>
        </div>
      </div>
    </div>)}
}

export default function TelaPerguntas(){
  return (
          <>
            <header>
                <img src="ZapRecall-Recursos/logo.png" alt="logo"/>
                <h1>ZapRecall</h1>
            </header>
              {perguntasINFO.map(perguntaHTML => <Pergunta numPergunta={perguntaHTML.numPergunta} pergunta={perguntaHTML.pergunta}  resposta={perguntaHTML.resposta}/>)}
            <footer>
              <p>Y/X CONCLUÍDOS</p>
              </footer>
          </>)}