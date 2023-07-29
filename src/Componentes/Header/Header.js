import './Header.css'

function Header () {
    return <nav>
    <ul class="menu">
      <li class="logo"><a href="#">Invisible App</a></li>
      <li class="item"><a href="#">Home</a></li>
      <li class="item"><a href="#">About</a></li>
      <li class="item"><a href="#">Services</a></li>
      <li class="item"><a href="#">Features</a></li>
      <li class="item"><a href="#">Blog</a></li>
      <li class="item"><a href="#">Contact</a>
      </li>
      <li class="item button"><a href="#">Log In</a></li>
      <li class="item button secondary"><a href="#">Sign Up</a></li>
      <li class="toggle"><a href="#"><i class="fas fa-bars"></i></a></li>
    </ul>
  </nav>
}

document.addEventListener("DOMContentLoaded", function() {
    const toggleElements = document.querySelectorAll(".toggle");

    toggleElements.forEach(function(toggleElement) {
      toggleElement.addEventListener("click", function() {
        const itemElements = document.querySelectorAll(".item");

        if (itemElements[0].classList.contains("active")) {
          itemElements.forEach(function(itemElement) {
            itemElement.classList.remove("active");
          });
          this.querySelector("i").classList.remove("fa-times");
          this.querySelector("i").classList.add("fa-bars");
        } else {
          itemElements.forEach(function(itemElement) {
            itemElement.classList.add("active");
          });
          this.querySelector("i").classList.remove("fa-bars");
          this.querySelector("i").classList.add("fa-times");
        }
      });
    });
  });

// document.addEventListener("DOMContentLoaded", function() {
//     const toggleElements = document.querySelectorAll(".toggle");

//     toggleElements.forEach(function(toggleElement) {
//         toggleElement.addEventListener("click", function() {
//             const itemElements = document.querySelectorAll(".item");

//             if (itemElements[0].classList.contains("active")) {
//                 itemElements.forEach(function(itemElement) {
//                     itemElement.classList.remove("active");
//                 });
//                 this.querySelector("a").innerHTML = "<i class='fas fa-bars'></i>";
//             } else {
//                 itemElements.forEach(function(itemElement) {
//                     itemElement.classList.add("active");
//                 });
//                 this.querySelector("a").innerHTML = "<i class='fas fa-times'></i>";
//             }
//         });
//     });
// });
    

export default Header;