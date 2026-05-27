const navLinks = document.querySelectorAll(".nav-link, .custom-btn");
const navbarCollapse = document.querySelector(".navbar-collapse");
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    if (
      window.innerWidth < 992 &&
      navbarCollapse.classList.contains("show")
    ) {
      setTimeout(() => {
        const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse)
          || new bootstrap.Collapse(navbarCollapse, {
            toggle: false
          });
        bsCollapse.hide();
      }, 250);
    }
  });
});


const topBtn = document.getElementById("topBtn");
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    topBtn.classList.add("show");
  } else {
    topBtn.classList.remove("show");
  }
});
topBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-link");
window.addEventListener("scroll", () => {
  let currentSection = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 220;
    const sectionHeight = section.offsetHeight;
    if (
      window.scrollY >= sectionTop &&
      window.scrollY < sectionTop + sectionHeight
    ) {
      currentSection = section.getAttribute("id");
    }
  });
  navItems.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${currentSection}`) {
      link.classList.add("active");
    }
  });
});

const navbar = document.querySelector(".custom-navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.style.background = "rgba(8,8,18,0.92)";
    navbar.style.padding = "14px 0";
    navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,0.25)";
  } else {
    navbar.style.background = "rgba(10,10,20,0.35)";
    navbar.style.padding = "18px 0";
    navbar.style.boxShadow = "none";
  }
});
window.dispatchEvent(new Event("scroll"));
