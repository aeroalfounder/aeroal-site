document.addEventListener("DOMContentLoaded", function() {
  
    // ===== Секции-кнопки =====
    const sections = document.querySelectorAll("a > section");
  
    sections.forEach(section => {
      section.style.cursor = "pointer";
      section.style.transition = "all 0.15s ease";
  
      section.addEventListener("mousedown", () => {
        section.style.opacity = "0.7";
        section.style.transform = "scale(0.98)";
      });
  
      section.addEventListener("mouseup", () => {
        section.style.opacity = "0.95";
        section.style.transform = "scale(1)";
      });
  
      section.addEventListener("mouseleave", () => {
        section.style.opacity = "0.95";
        section.style.transform = "scale(1)";
      });
    });
  
    // ===== Плавный скролл для якорей =====
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener("click", function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if(target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      });
    });
  
    // ===== Переключение языка =====
    const langSelect = document.getElementById('languageSelect');
    if (langSelect) {
      langSelect.addEventListener('change', function() {
        const selectedLang = this.value;
        // Здесь можно реализовать логику смены языка:
        // - через PHP и перезагрузку страницы с параметром ?lang=en/ru
        // - через fetch/AJAX к базе переводов и динамическую подстановку
        console.log('Выбран язык:', selectedLang);
        // Пример: перенаправление на текущую страницу с GET-параметром
        const currentUrl = window.location.href.split('?')[0];
        window.location.href = `${currentUrl}?lang=${selectedLang}`;
      });
    }
  
  });