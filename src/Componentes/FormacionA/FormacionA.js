import './FormacionA.css'

function FormacionA () {
    return <section class="academic" id="formacion">
    <h2 class="academic__title" >Formación académica</h2>
    <div class="academic__courses">
        <div class="academic__courses__box">
            <ul class="academic__courses__list">
                <li class="academic__courses__item__img"><a href='https://tescha.edomex.gob.mx/'><img class="imgtescha"  src="img/tescha_logo.png"/></a></li>
                <li class="academic__courses__item__title"><h4>Ingeniería en Sistemas Computacionales</h4></li>
                <li class="academic__courses__item__subtitle"><p>2019 - TESCHA</p></li>
            </ul>
        </div>
        <div class="academic__courses__box">
            <ul class="academic__courses__list">
                <li class="academic__courses__item__img"><a href='https://www.aluracursos.com/'><img class="imgalura" src="img/alura_logo.png"/></a></li>
                <li class="academic__courses__item__title"><h4>Formacion en Desarrollo Front End</h4></li>
                <li class="academic__courses__item__subtitle"><p>En curso - Alura</p></li>
            </ul>
        </div>
    </div>
</section>

}


export default FormacionA;