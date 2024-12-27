document.addEventListener("scroll", () => {
    const background = document.querySelector(".bg-hero-gradient");
    const scrollPosition = window.scrollY;
  
    if (scrollPosition > 50) {
      background.classList.add("bg-opacity-90");
    } else {
      background.classList.remove("bg-opacity-90");
    }
  });
  