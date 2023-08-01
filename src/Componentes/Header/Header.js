import './Header.css'

function Header () {
    return <nav>
    <ul className="menu">
      <li className="logo"><a href="#"><i class="fas fa-laptop-code fa-lg"></i>Karla Karina Canela Cobos</a></li>
      <li className="item"><a href="#">Sobre mi</a></li>
      <li className="item"><a href="#">Skills</a></li>
      <li className="item"><a href="#">Hobbies</a></li>
      <li className="item"><a href="#">Formación</a></li>
      <li className="item"><a href="#">Proyectos</a></li>
      <li className="item"><a href="#">Contacto</a></li>
      <li className="item button"><a href="https://github.com/KarinaCanela"><i className="fab fa-github fa-lg" title='GitHub'></i></a></li>
      <li className="item button"><a href="https://www.linkedin.com/in/karla-karina-canela-cobos-81a83a183/"><i class="fab fa-linkedin fa-lg" title='LinkeIn'></i></a></li>
      <li className="item button"><a href="https://instagram.com/karina_canela10?igshid=ZDdkNTZiNTM="><i class="fab fa-instagram fa-lg" title='Instagram'></i></a></li>
      <li className="item button secondary"><a href="img/Karla_Karina_Canela_Cobos_cv.pdf"><i class="fas fa-file-alt fa-lg" title='Curriculum'></i></a></li>
      <li className="toggle"><a href="#" ><i id='btnmenu' className="fas fa-bars"></i></a></li>
    </ul>
  </nav>
}

window.addEventListener("load", function() {
  const itemElements = document.getElementsByClassName("item");
  const toggleIcon = document.getElementById("btnmenu");
  
  toggleIcon.addEventListener("click", function() {
    if (itemElements[0].classList.contains("active")) {
      for (let i = 0; i < itemElements.length; i++) {
        itemElements[i].classList.remove("active");
      }
      toggleIcon.classList.remove("fa-times");
      toggleIcon.classList.add("fa-bars");
    } else {
      for (let i = 0; i < itemElements.length; i++) {
        itemElements[i].classList.add("active"); 
      }
      toggleIcon.classList.remove("fa-bars");
      toggleIcon.classList.add("fa-times");
    }
  });
});
    

export default Header;