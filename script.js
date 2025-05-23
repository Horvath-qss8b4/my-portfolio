function setLang(lang) {
  document.querySelectorAll('.lang-hu').forEach(el =>
    el.style.display = (lang === 'hu' ? 'block' : 'none')
  );
  document.querySelectorAll('.lang-en').forEach(el =>
    el.style.display = (lang === 'en' ? 'block' : 'none')
  );
}
