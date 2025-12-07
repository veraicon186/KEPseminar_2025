document.addEventListener("DOMContentLoaded", () => {
  // Najdi všechny elementy, které mají data-expandable (to je vždy samotný obsah)
  const sections = document.querySelectorAll("[data-expandable]");

  sections.forEach(section => {
    // Hledáme tlačítko související s tímto sectionem:
    // 1) nejprve zkusíme rodičovský kontejner (typicky .about-box nebo .post-bio-box)
    // 2) pokud tam žádné není, zkusíme bezprostředního sourozence (section.nextElementSibling)
    // 3) nakonec hledáme v nejbližším ancestoru s tlačítkem
    let btn = null;

    const parent = section.parentElement;
    if (parent) {
      btn = parent.querySelector && parent.querySelector(".expand-toggle");
    }

    if (!btn && section.nextElementSibling && section.nextElementSibling.classList.contains("expand-toggle")) {
      btn = section.nextElementSibling;
    }

    if (!btn) {
      // fallback: najdi nejbližší .expand-toggle v ancestor řetězci
      const ancestorWithBtn = section.closest("section, .about-box, .post-bio-box, .expandable-container");
      if (ancestorWithBtn) {
        btn = ancestorWithBtn.querySelector(".expand-toggle");
      }
    }

    if (!btn) return; // nic nenajdeme -> přeskočíme tento blok

    // inicializace stavu podle třídy (pokud chceme persistovat)
    let expanded = section.classList.contains("expanded");

    // Nastav počáteční text tlačítka
    btn.textContent = expanded ? "Méně" : "Více";

    btn.addEventListener("click", () => {
      expanded = !expanded;
      section.classList.toggle("expanded", expanded);
      btn.textContent = expanded ? "Méně" : "Více";
    });
  });
});
