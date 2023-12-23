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
      barClosed.style.display = 'none';

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
  alert("You have no new notification");
  });

  // setInterval(() => {
  //   let counter = document.getElementById('counter');
  //   counter.innerHTML =  '46,000+' ;
  //   body.appendChild(counter);
  // });


    const fadeInElements = document.querySelectorAll('.fade-in');

    function checkFadeIn() {
      fadeInElements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const triggerHeight = window.innerHeight * 0.8; // Adjust the percentage as needed

        if (rect.top < triggerHeight && rect.bottom >= 0) {
          element.classList.add('in-view');
        } else {
          element.classList.remove('in-view');
        }
      });
    }

    window.addEventListener('scroll', checkFadeIn);
    window.addEventListener('resize', checkFadeIn);

    // Initial check when the page is loaded
    checkFadeIn();
  });


