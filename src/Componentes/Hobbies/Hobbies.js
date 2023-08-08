import './Hobbies.css'

function Hobbies () {
    return <section class="hobbies" id="hobbies">
    <h3 class="hobbies__title">Hobbies</h3>
    <div class="hobbies__line">
        <div class="hobbies__box">
            <ul>
                <li class="hobbies__img"><img src="img/book_icon.png"/></li>
                <li class="hobbies__name">Leer</li>
            </ul>
        </div>

        <div class="hobbies__box">
            <ul>
                <li class="hobbies__img"> <img src="img/lugares_icon.png" alt=""/></li>
                <li class="hobbies__name">Conocer lugares</li>
            </ul>
        </div>

        <div class="hobbies__box">
            <ul>
                <li class="hobbies__img"> <img src="img/headphones_icon.png" alt=""/></li>
                <li class="hobbies__name">Escuchar musica</li>
            </ul>
        </div>

        <div class="hobbies__box">
            <ul>
                <li class="hobbies__img"><img src="img/tv_icon.png" alt=""/></li>
                <li class="hobbies__name">Ver séries & peliculas</li>
            </ul>
        </div>

        <div class="hobbies__box">
            <ul>
                <li class="hobbies__img"> <img src="img/forkspoon_icon.png" alt=""/> </li>
                <li class="hobbies__name">Cocinar</li>
            </ul>
        </div>

        <div class="hobbies__box">
            <ul>
                <li class="hobbies__img"> <img src="img/camera_icon.png" alt=""/> </li>
                <li class="hobbies__name">Tomar fotos</li>
            </ul>
        </div>
    </div>
</section>

}

export default Hobbies;