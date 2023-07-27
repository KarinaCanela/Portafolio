import './Header.css'

function Header () {
    return <nav class="nav">
    <div class="container">
        <h1 class="logo"><img src="/img/vector.png"/><a href="#">Karla Karina Canela Cobos</a></h1>
        <ul>
            <li><a href="#" class="current">Sobre mi</a></li>
            <li><a href="#">Skills</a></li>
            <li><a href="#">Hobbies</a></li>
            <li><a href="#">Formacion</a></li>
            <li><a href="#">Proyectos</a></li>
            <li><a href="#">Contacto</a></li>
        </ul>
    </div>
    </nav>
}

const nav = document.querySelector(".nav");
window.addEventListener("scroll", fixNav);

function fixNav() {
    if (window.scrollY > nav.offsetHeight) {
        nav.classList.add("active");
    } else {
        nav.classList.remove("active");
    }
}

export default Header