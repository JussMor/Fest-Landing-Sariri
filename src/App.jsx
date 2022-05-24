import './App.css'
import sariri from './assets/sariri.mp4'
import sariri2 from './assets/sariri2.mp4'
import logo from './assets/logo.jpg'
import bases from './assets/bases.pdf'

function App() {

  return (
    <div >
      <a href='https://grupoculturalsariri.blogspot.com/' target='_blank'>
      <div className='logo-banner' > 
          <img src={logo}/>
      </div>
      </a>
      <div className='header-title'>BASES DEL FESTIVAL</div>
      <div className='video-container' >
        <a href={bases} target='_blank'>
        <button className='video-button' >
          Descargar
        </button>
        </a>
      <video  autoPlay controls muted loop>
        <source src={sariri2} type="video/mp4"/>
      </video>
      </div>
      <div> 
        <div className='body-phrase'>
          <h2>
          “Nuestros pies caminarán con la agilidad del Huayra, nuestra voz retumbará en los riscos de la agreste 
montaña, se sumergirá en sus entrañas y renacerá con el nuevo amanecer para rendir pleitesía a la Pachamama y 
despuntar cual cóndor por el límpido cielo”
          </h2>
        </div>
      </div>
      <div className='video-container2' >
      <h2 className='body-phrase2'>
          “Nuestros pies caminarán con la agilidad del Huayra, nuestra voz retumbará en los riscos de la agreste 
montaña, se sumergirá en sus entrañas y renacerá con el nuevo amanecer para rendir pleitesía a la Pachamama y 
despuntar cual cóndor por el límpido cielo”
          </h2>
      <video  autoPlay muted loop>
        <source src={sariri} type="video/mp4"/>
      </video>
      </div>
    </div>
  )
}


export default App


