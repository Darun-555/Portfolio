const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".filter-item");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedFilter = button.getAttribute("data-filter");

    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    projectCards.forEach((card) => {
      const categories = card.getAttribute("data-category");

      if (selectedFilter === "all" || categories.includes(selectedFilter)) {
        card.classList.remove("hide");
      } else {
        card.classList.add("hide");
      }
    });
  });
});