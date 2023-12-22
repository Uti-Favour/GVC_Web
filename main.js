document.addEventListener("DOMContentLoaded", function () {
  //Variables
  let navBar = document.getElementById("navBar");
  let mobileMenu = document.getElementById("mobile-menu");
  let hiddenToggleMenu = document.querySelector(".menu_toggle_hidden");
  let bell = document.getElementById("bell");

  function openNav(){
    navBar.addEventListener("click", function () {
        hiddenToggleMenu.classList.toggle("menu_toggle_block");
        console.log("You just cliked the button");
      });
    
      bell.addEventListener("click", () => {
        document.body.style.backgroundColor = "pink";
      });
}
openNav();
});



