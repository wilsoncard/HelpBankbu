
document.addEventListener("DOMContentLoaded", function () {
    const toggles = document.querySelectorAll(".toggle");

    toggles.forEach(toggle => {
        toggle.addEventListener("click", function () {
            const options = this.nextElementSibling;
            options.classList.toggle("active");
        });
    });
});
