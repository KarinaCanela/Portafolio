import './Presentacion.css'

function Presentacion () {
    return <div className='presentacion'>
        <img className='presentacion__profile' src='img/profile.jpg'/>
        <div className="presentacion__container">
            <h2 className="presentacion__bio">Hola, mi nombre es Karina y construyo paginas web.</h2>
            <h3 className="presentacion__subsection">Soy formada en el Tecnológico de Estudios Superiores de Chalco con la carrera de Ingeniería en Sistemas Computacionales y actualmente estoy participando del proyecto Oracle ONE en Alura Latam con la especialidad en Front End.</h3>
        </div>
    </div> 
}

export default Presentacion;
