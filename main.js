document.addEventListener("DOMContentLoaded", function () {
  //Variables
  let navBar = document.getElementById("navBar");
  let mobileMenu = document.getElementById("mobile-menu");
  let hiddenToggleMenu = document.querySelector(".menu_toggle_hidden");
  let bell = document.getElementById("bell");
  let barOpen = document.getElementById("barOpen");
  let barClosed = document.getElementById("barlosed");

  function openNav() {
    navBar.addEventListener("click", function () {
      hiddenToggleMenu.classList.toggle("menu_toggle_block");
      console.log("You just cliked the button");

      if ((navBar.onclick = "openNav()")) {
        barOpen.style.display = "none";
        barClosed.style.display = "block";
      } else {
        barOpen.style.display = "block";
        barClosed.style.display = "none";
      }
    });
  }
  openNav();

  bell.addEventListener("click", function () {
    console.log("You have no Notification");
  });
});
