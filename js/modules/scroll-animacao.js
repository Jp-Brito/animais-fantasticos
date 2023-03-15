export default function initAnimaScroll() {
    const sections = document.querySelectorAll("[data-anime='scroll']");
  
    if (sections.length) {
      const windowMetade = window.innerHeight * 0.6;
  
      function animaScroll() {
        sections.forEach((section) => {
          const sectionTop = section.getBoundingClientRect().top;
          const IsSectionVisible = sectionTop - windowMetade < 0;
          if (IsSectionVisible)
            section.classList.add("ativo");
          else if(section.classList.contains("ativo")){
            section.classList.remove("ativo");
          }
        });
      }
      animaScroll();
      window.addEventListener("scroll", animaScroll);
    }
  }