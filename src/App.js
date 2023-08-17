import logo from './logo.svg';
import './App.css';
import Header from './Componentes/Header/Header.js'
import Presentacion from './Componentes/Presentacion/Presentacion.js';
import SobreMi from './Componentes/SobreMi/SobreMi.js';
import Skills from './Componentes/Skills/Skills.js';
import Hobbies from './Componentes/Hobbies/Hobbies.js';
import FormacionA from './Componentes/FormacionA/FormacionA.js';
import ExperienciaP from './Componentes/ExperienciaP/ExperienciaP.js';
import Contacto from './Componentes/Contacto/Contacto';



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
      <div className='divFormacion'>
        <FormacionA/>
      </div>
      <div className='divExperiencia'>
        <h2 class="experience__section__title" id="xp" >Experiencia Profesional</h2>
        <ExperienciaP/>
      </div> 
      <div className='divContacto'>
        <Contacto/>
      </div>
      

    </div>
    
  );
}

export default App;
