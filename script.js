
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const filterButtons = document.querySelectorAll(".filter-btn");
const projects = document.querySelectorAll(".project-card");

// Mobile navigation
menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");

  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.textContent = isOpen ? "×" : "☰";
});

navLinks.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

// Portfolio filtering
filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    const selectedBrand = button.dataset.filter;

    filterButtons.forEach(filter => {
      const isActive = filter === button;
      filter.classList.toggle("active", isActive);
      filter.setAttribute("aria-pressed", String(isActive));
    });

    projects.forEach(project => {
      const matches =
        selectedBrand === "all" ||
        project.dataset.brand === selectedBrand;

      project.hidden = !matches;
    });
  });
});

// Automatic copyright year
document.getElementById("year").textContent =
  new Date().getFullYear();
