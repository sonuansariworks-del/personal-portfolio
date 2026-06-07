/* =========================================================
   MOBILE MENU TOGGLE
========================================================= */

const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

menuToggle.addEventListener("click", () => {

  menu.classList.toggle("active");
  menuToggle.classList.toggle("active");

});


/* =========================================================
   CLOSE MENU WHEN CLICK LINK
========================================================= */

document.querySelectorAll(".menu a").forEach(link => {

  link.addEventListener("click", () => {

    menu.classList.remove("active");
    menuToggle.classList.remove("active");

  });

});


/* =========================================================
   CLOSE MENU WHEN CLICK OUTSIDE
========================================================= */

document.addEventListener("click", (e) => {

  if (
    !menu.contains(e.target) &&
    !menuToggle.contains(e.target)
  ) {

    menu.classList.remove("active");
    menuToggle.classList.remove("active");

  }

});


/* =========================================================
   HEADER SCROLL EFFECT
========================================================= */

window.addEventListener("scroll", () => {

  const header = document.querySelector("header");

  if (window.scrollY > 40) {

    header.style.background =
      "rgba(255,255,255,0.28)";

    header.style.backdropFilter =
      "blur(20px)";

    header.style.boxShadow =
      "0 12px 35px rgba(37,99,235,0.18)";

  }

  else {

    header.style.background =
      "rgba(255,255,255,0.18)";

    header.style.boxShadow =
      "0 8px 32px rgba(59,130,246,0.18)";
  }

});


/* =========================================================
   ACTIVE NAV LINK ON SCROLL
========================================================= */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".menu a");

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach(section => {

    const sectionTop =
      section.offsetTop - 150;

    const sectionHeight =
      section.clientHeight;

    if (pageYOffset >= sectionTop) {

      current = section.getAttribute("id");

    }

  });

  navLinks.forEach(link => {

    link.classList.remove("active-link");

    if (
      link.getAttribute("href")
        .includes(current)
    ) {

      link.classList.add("active-link");

    }

  });

});


/* =========================================================
   SUCCESS MESSAGE
========================================================= */

function showSuccess() {

  const successMessage =
    document.getElementById("success-message");

  setTimeout(() => {

    successMessage.style.display = "block";

    successMessage.style.opacity = "1";

    successMessage.style.transform =
      "translateY(0)";

    document.querySelector("form").reset();

    /* AUTO HIDE */

    setTimeout(() => {

      successMessage.style.opacity = "0";

      successMessage.style.transform =
        "translateY(-10px)";

      setTimeout(() => {

        successMessage.style.display = "none";

      }, 400);

    }, 3000);

  }, 500);

}


/* =========================================================
   SCROLL REVEAL ANIMATION
========================================================= */

const revealElements = document.querySelectorAll(
  ".about-card, .skill-card, .project-card, .experience-card, .contact-box"
);

const revealObserver = new IntersectionObserver(
  (entries) => {

    entries.forEach((entry) => {

      if (entry.isIntersecting) {

        entry.target.classList.add("show");

      }

    });

  },
  {
    threshold: 0.1
  }
);

revealElements.forEach((el) => {

  el.classList.add("hidden");

  revealObserver.observe(el);

});


/* =========================================================
   BUTTON HOVER EFFECT
========================================================= */

const buttons = document.querySelectorAll(
  ".btn, button, .project-buttons a"
);

buttons.forEach(button => {

  button.addEventListener("mouseenter", () => {

    button.style.transform =
      "translateY(-4px) scale(1.02)";

  });

  button.addEventListener("mouseleave", () => {

    button.style.transform =
      "translateY(0) scale(1)";

  });

});


/* =========================================================
   HERO IMAGE FLOAT EFFECT
========================================================= */

const heroImage =
  document.querySelector(".hero-image img");

if (heroImage) {

  setInterval(() => {

    heroImage.style.transform =
      "translateY(-10px)";

    setTimeout(() => {

      heroImage.style.transform =
        "translateY(0px)";

    }, 2000);

  }, 4000);

}


/* =========================================================
   TYPING EFFECT
========================================================= */

const typingText =
  document.querySelector(".typing-text");

if (typingText) {

  const words = [
    "Web Developer",
    "Frontend Developer",
    "UI Designer",
    "Freelancer"
  ];

  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function typeEffect() {

    const currentWord =
      words[wordIndex];

    if (!isDeleting) {

      typingText.textContent =
        currentWord.substring(0, charIndex + 1);

      charIndex++;

      if (charIndex === currentWord.length) {

        isDeleting = true;

        setTimeout(typeEffect, 1500);

        return;
      }

    }

    else {

      typingText.textContent =
        currentWord.substring(0, charIndex - 1);

      charIndex--;

      if (charIndex === 0) {

        isDeleting = false;

        wordIndex++;

        if (wordIndex === words.length) {

          wordIndex = 0;

        }

      }

    }

    setTimeout(typeEffect,
      isDeleting ? 60 : 120
    );

  }

  typeEffect();

}


/* =========================================================
   LOADER
========================================================= */

window.addEventListener("load", () => {

  const loader =
    document.querySelector(".loader");

  if (loader) {

    loader.style.opacity = "0";

    setTimeout(() => {

      loader.style.display = "none";

    }, 500);

  }

});


/* =========================================================
   SCROLL TO TOP BUTTON
========================================================= */

const scrollBtn =
  document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {

  if (window.scrollY > 300) {

    if (scrollBtn) {

      scrollBtn.style.display = "flex";

    }

  }

  else {

    if (scrollBtn) {

      scrollBtn.style.display = "none";

    }

  }

});


/* =========================================================
   SCROLL TO TOP CLICK
========================================================= */

if (scrollBtn) {

  scrollBtn.addEventListener("click", () => {

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  });

}
