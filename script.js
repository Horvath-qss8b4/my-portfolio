let currentLang = "hu";

const sectionTitles = {
  home: { hu: "Portfolio – Főoldal", en: "Portfolio – Main" },
  datascience: { hu: "Portfolio – Analizis", en: "Portfolio – Analisis" },
  desktop: { hu: "Portfolió – Fejlesztés", en: "Portfolio – Developer" },
  sql: { hu: "Portfolió – SQL", en: "Portfolio – SQL" },
  teszt: { hu: "Portfolió – Teszt", en: "Portfolio – Test" },
  tananyag: { hu: "Portfolió – Oktatás", en: "Portfolio – Learning" },
  contact: { hu: "Portfolio – Kapcsolat", en: "Portfolio – Contact" },
};

function toggleMenu() {
  const visible = currentLang === "hu" ? ".lang-hu" : ".lang-en";
  const nav = document.querySelector(visible + " .navbar");
  nav.classList.toggle("open");
}

function setLang(lang) {
  currentLang = lang;
  document.querySelector(".lang-hu").style.display = lang === "hu" ? "block" : "none";
  document.querySelector(".lang-en").style.display = lang === "en" ? "block" : "none";
  document.querySelector(".lang-btn.hu").classList.toggle("active", lang === "hu");
  document.querySelector(".lang-btn.en").classList.toggle("active", lang === "en");
  updateTitle();
}

function updateTitle() {
  // MINDIG a látható lang-hu sectionjeit nézzük!
  const sections = document.querySelectorAll(".lang-hu section");
  const scrollPos = window.scrollY || window.pageYOffset;
  let current = sections[0].id; // alapból az első section (home)

  for (let i = 0; i < sections.length; i++) {
    const section = sections[i];
    if (scrollPos >= section.offsetTop - 60) {
      current = section.id;
    }
  }

  if (sectionTitles[current]) {
    document.title = sectionTitles[current][currentLang];
  } else {
    document.title = "Nincs ilyen section!";
  }
}

// Események
window.addEventListener("DOMContentLoaded", () => {
  setLang("hu");
  updateTitle();
  document.querySelectorAll(".navbar a").forEach((link) => {
    link.addEventListener("click", function () {
      setTimeout(updateTitle, 200); // kell egy kis késleltetés, hogy anchor után fusson
    });
  });
  window.addEventListener("scroll", updateTitle);
});
