import React from "react"

const perguntasINFO =    [{numPergunta: "1", pergunta: "Oque é JSX ?", resposta: "JSX é uma sintaxe para escrever HTML dentro do JS"},
                          {numPergunta: "2", pergunta: "O React é ...", resposta: "Uma biblioteca JavaScript para construção de interfaces"},
                          {numPergunta: "3", pergunta: "Componentes devem iniciar com...", resposta: "Letra maiúscula"},
                          {numPergunta: "4", pergunta: "podemos colocar (_____) debtro do JSX", resposta: "Expressões"},
                          {numPergunta: "5", pergunta: "O ReactDOM nos ajuda ...", resposta: "nteragindo com a DOM para colocar componentes React na mesma"},
                          {numPergunta: "6", pergunta: "Usamos o npm para ...", resposta: "gerenciar os pacotes necessários e suas dependências"},
                          {numPergunta: "7", pergunta: "Usamos props para ...", resposta: " passar diferentes informações para componentes "},
                          {numPergunta: "8", pergunta: "Usamos estado (state) para ...", resposta: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"}]

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
  const totalQuestoes = perguntasINFO.length
  return (
          <>
            <header>
                <img src="ZapRecall-Recursos/logo.png" alt="logo"/>
                <h1>ZapRecall</h1>
            </header>
            <main>
              {perguntasINFO.map(perguntaHTML => <Pergunta numPergunta={perguntaHTML.numPergunta} pergunta={perguntaHTML.pergunta}  resposta={perguntaHTML.resposta}/>)}
            </main>

            {/* <footer>
              <p className="resultado-gabarito"><span>😢</span> <strong>PUTZ!</strong> </p>
              <p className="mensagem-gabarito">Ainda faltaram alguns...Mas não desanime!</p>
              <p className="icones-gabarito"><ion-icon name='checkmark-circle'></ion-icon> <ion-icon name='checkmark-circle'></ion-icon></p>
            </footer> */}

            <footer>
              <p className="resultado-gabarito"><span>🥳</span> <strong>PARABÉNS!</strong> </p>
              <p className="mensagem-gabarito">Você não esqueceu de nenhum flashcard!</p>
              <p className="icones-gabarito"><ion-icon name='checkmark-circle'></ion-icon> <ion-icon name='checkmark-circle'></ion-icon></p>
            </footer>
            
            {/* <footer>
              <p>QResp/{totalQuestoes} CONCLUÍDOS</p>
            </footer> */}
          </>)}

// <footer>
// <p>QResp/{totalQuestoes} CONCLUÍDOS</p>
// </footer> kjçkjbkjbkj