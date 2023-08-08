import logo from './logo.svg';
import './App.css';
import Header from './Componentes/Header/Header.js'
import Presentacion from './Componentes/Presentacion/Presentacion.js';
import SobreMi from './Componentes/SobreMi/SobreMi.js';
import Skills from './Componentes/Skills/Skills.js';
import Hobbies from './Componentes/Hobbies/Hobbies';


function App() {
  return (
    <div>
      <Header/>,
      <Presentacion/>,
      <SobreMi/>,
      <div className='divSkills'>
        <Skills/>
      </div>
      <div className='divHobbies'>
        <Hobbies/>
      </div>
      

    </div>
    
  );
}

export default App;
