const navBarMovile = document.getElementById("navBarMovile")
const hamburguerButton = document.getElementById("hamburguerButton")


hamburguerButton.addEventListener("click", () => {
    navBarMovile.classList.toggle("talleres_nav_bar_container_active");
})