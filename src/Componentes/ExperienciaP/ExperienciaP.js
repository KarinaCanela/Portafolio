import './ExperienciaP.css'

function ExperienciaP () {
    return  <section class="experience">
        <h2 class="experience__section__title" id="xp" >Experiencia Profesional</h2>
        <div class="experiencie__box ">
            <img class="experience__img" src="img/encrip.png"/>
            <div class="experience__info">
                <h2 class="experience__title">Encriptador de texto</h2>
                <h3 class="experience__text">Challenge Alura Codificador </h3>
                <div class="experience__description">
                    <span class="experience__repo"><a href="https://github.com/KarinaCanela/Challenge_Encriptador"><button class="experiencia__botao--repo">Repositório</button></a></span>
                    <span class="experience__demo"><a href="https://karinacanela.github.io/Challenge_Encriptador/"><button class="experience__botao--demo">Ver demo</button></a></span>
                </div>
            </div>
        </div>  

        <div class="experiencie__box">
            <img class="experience__img" src="img/apeperia.png"/>
            <div class="experience__info">
                <h2 class="experience__title">Pagina creada con HTML y CSS</h2>
                <h3 class="experience__text">Proyecto Alura </h3>
                <div class="experience__description">
                    <span class="experience__repo"><a href="https://github.com/KarinaCanela/Proyecto-Apeperia"><button class="experiencia__botao--repo">Repositório</button></a></span>
                    <span class="experience__demo"><a href="https://karinacanela.github.io/Proyecto-Apeperia/"><button class="experience__botao--demo">Ver demo</button></a></span>
                </div>
            </div>
        </div>  

        <div class="experiencie__box">
            <img class="experience__img" src="img/todo.png"/>
            <div class="experience__info-container">
                <h2 class="experience__title">App ToDo</h2>
                <h3 class="experience__text">Proyecto Alura</h3>
                <div class="experience__description">
                    <span class="experience__repo"><a href="https://github.com/KarinaCanela/Manipulando_DOM_ToDo"><button class="experiencia__botao--repo">Repositório</button></a></span>
                    <span class="experience__demo"><a href="https://karinacanela.github.io/Manipulando_DOM_ToDo/"><button class="experience__botao--demo">Ver demo</button></a></span>
                </div>
            </div>
        </div>  

            <div class="experiencie__box">
            <img class="experience__img" src="img/tiroblanco.png"/>
            <div class="experience__info-container">
            <h2 class="experience__title">Juego creado con HTML, CSS y JavaScript</h2>
                <h3 class="experience__text">Challenge Oracle </h3>
                    <div class="experience__description">
                            <span class="experience__repo"><a href="https://github.com/KarinaCanela/Tiro_Blanco"><button class="experiencia__botao--repo">Repositório</button></a></span>
                            <span class="experience__demo"><a href="https://karinacanela.github.io/Tiro_Blanco/"><button class="experience__botao--demo">Ver demo</button></a></span>
                    </div>
        </div>
            </div>
     
    </section>

}

window.addEventListener("scroll", checkBoxes);
checkBoxes();

function checkBoxes() {

    const boxes = document.querySelectorAll(".experiencie__box");
    const triggerBottom = window.innerHeight / 5 * 4;

    for (let i = 0; i < boxes.length; i++) {
        const box = boxes[i];
        const boxTop = box.getBoundingClientRect().top;

        if (boxTop < triggerBottom) {
            box.classList.add("show");
        } else {
            box.classList.remove("show");
        }
    }
}


export default ExperienciaP;