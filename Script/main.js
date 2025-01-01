// Destop Menu Navbar
const navbarBtns = document.querySelectorAll('#destopMenuNavbar');
const navbarLists = document.querySelectorAll('#destopMenuNavbarBar');

navbarBtns.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    navbarLists.forEach((list, i) => {
      if (i !== index) {
        list.classList.add('hidden');
      }
    });
    navbarLists[index].classList.toggle('hidden');
  });
});

// Mobile menu box
const menuIcon = document.getElementById("menu-icon");
const mobileMenu = document.getElementById("mobile-menu");
const menuBar = document.getElementById("mobile-menuBar");
const body = document.body;

menuIcon.addEventListener("click", () => {
  if (menuBar.classList.contains("-left-[100%]")) {
    mobileMenu.classList.remove("hidden");
    body.classList.add("overflow-hidden");
    setTimeout(() => {
      menuBar.classList.remove("-left-[100%]");
      menuBar.classList.add("left-0");
    }, 10);
  } else {
    menuBar.classList.remove("left-0");
    menuBar.classList.add("-left-[100%]");
    setTimeout(() => {
      mobileMenu.classList.add("hidden");
      body.classList.remove("overflow-hidden");
    }, 300);
  }
});

const menuList = document.querySelectorAll("#drapMenuHeaderin");
const menuBoxBtn = document.querySelectorAll('#drapMenuHeader');
const chevronRigth = document.querySelectorAll('#chevron-right');
const chevronDown = document.querySelectorAll('#chevron-down');

menuBoxBtn.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    const list = menuList[index];
    const box = menuBoxBtn[index];
    const rightIcon = chevronRigth[index];
    const downIcon = chevronDown[index];

    if (list.classList.contains("h-0")) {
      list.classList.remove("h-0");
      list.classList.add("h-auto", "overflow-y-auto");
      box.classList.add("bg-[#1E1E1E]");
      rightIcon.classList.toggle('hidden');
      downIcon.classList.toggle('hidden');
    } else {
      list.classList.add("h-0", "overflow-y-hidden");
      list.classList.remove("h-auto", "overflow-y-auto");
      box.classList.remove("bg-[#1E1E1E]");
      rightIcon.classList.toggle('hidden');
      downIcon.classList.toggle('hidden');
    }
  });
});

// Swiper 
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
