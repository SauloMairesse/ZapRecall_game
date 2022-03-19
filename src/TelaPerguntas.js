const perguntasINFO =    [{numPergunta: "1", texto: "PipipiPopopo"},
                         {numPergunta: "2", texto: "PipiPopo"}]

function Pergunta(props){
  return(
    <>
      <button className="pergunta"> 
        <p>Pergunta {props.numPergunta} </p>
        <ion-icon className="icone-pergunta" name="play-outline"></ion-icon>
      </button>
    </>
  )
}

export default function TelaPerguntas(){
  return (
          <>
            <header>
                <img src="ZapRecall-Recursos/logo.png" alt="logo"/>
                <h1>ZapRecall</h1>
            </header>
              {perguntasINFO.map(perguntaHTML => <Pergunta numPergunta={perguntaHTML.numPergunta}/>)}
            <footer>
              <p>Y/X CONCLUÍDOS</p>
              </footer>
          </>)}