import './Header.css'
import '../SobreMi/SobreMi.js'

function Header () {
    return <nav>
    <ul className="menu">
      <li className="logo"><a href="#">Karla Karina Canela Cobos</a></li>
      <li className="item"><a href="#sobre_mi">Sobre mi</a></li>
      <li className="item"><a href="#skills">Skills</a></li>
      <li className="item"><a href="#hobbies">Hobbies</a></li>
      <li className="item"><a href="#formacion">Formación</a></li>
      <li className="item"><a href="#xp">Proyectos</a></li>
      <li className="item"><a href="#">Contacto</a></li>
      <li className="item button"><a href="https://github.com/KarinaCanela"><i className="fab fa-github fa-lg" title='GitHub'></i></a></li>
      <li className="item button"><a href="https://www.linkedin.com/in/karla-karina-canela-cobos-81a83a183/"><i class="fab fa-linkedin fa-lg" title='LinkeIn'></i></a></li>
      <li className="item button"><a href="https://instagram.com/karina_canela10?igshid=ZDdkNTZiNTM="><i class="fab fa-instagram fa-lg" title='Instagram'></i></a></li>
      <li className="item button secondary"><a href="img/Karla_Karina_Canela_Cobos_cv.pdf"><i class="fas fa-file-alt fa-lg" title='Curriculum'></i></a></li>
      <li className="toggle"><a href="#" ><i id='btnmenu' className="fas fa-bars"></i></a></li>
    </ul>
  </nav>
}

function ocultarMenu(elementosMenu, bntHamburguesa) {
    if (elementosMenu[0].classList.contains("active")) {
        for (let i = 0; i < elementosMenu.length; i++) {
            elementosMenu[i].classList.remove("active");
        }
        bntHamburguesa.classList.remove("fa-times");
        bntHamburguesa.classList.add("fa-bars");
    } else {
        for (let i = 0; i < elementosMenu.length; i++) {
            elementosMenu[i].classList.add("active");
        }
        bntHamburguesa.classList.remove("fa-bars");
        bntHamburguesa.classList.add("fa-times");
    }
}

window.addEventListener("load", function() {
  const itemElements = document.getElementsByClassName("item");
  const toggleIcon = document.getElementById("btnmenu");
  
  toggleIcon.addEventListener("click", function() {
      ocultarMenu(itemElements, toggleIcon);
  });

    for (let i = 0; i < itemElements.length; i++) {
        const element = itemElements[i];
        element.addEventListener("click", function () {
            ocultarMenu(itemElements, toggleIcon);
        })
    }
});
    

export default Header;