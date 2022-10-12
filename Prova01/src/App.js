import './App.css';

import Questao01 from './components/questao01/Questao01';
import Questao01A from './components/questao01/Questao01A'
import Questao01B from './components/questao01/Questao01B'

import Questao02 from './components/questao02/Questao02';

import Questao03  from './components/questao03/Questao03';
import Questao04  from './components/questao04/Questao04';
import Questao05  from './components/questao05/Questao05';


const App=()=>{
  return(
    <div>
      <h1>
      <Questao01>
        <Questao01A nome="Andrew" sobrenome="Araujo" curso="Redes de Computadores" />
        <Questao01B/>
      </Questao01>
      </h1>
      <h2>
      <Questao02/>
      </h2>
      <h3>
      <Questao03/>
      </h3>
      <h4>
      <Questao04/>
      </h4>
      <h5>
      <Questao05/>
      </h5>
    </div>
  )
}


export {App};