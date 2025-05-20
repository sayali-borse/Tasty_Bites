// Optional JS if you want additional interaction (e.g., click to change card theme)

document.addEventListener("DOMContentLoaded", () => {
  const card = document.getElementById("foodCard");

  card.addEventListener("click", () => {
    card.classList.toggle("dark-theme");
  });
});
