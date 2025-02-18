document.addEventListener("DOMContentLoaded", function() {
    const enlaces = document.querySelectorAll("nav ul li a");

    enlaces.forEach(enlace => {
        enlace.addEventListener("mouseenter", function() {
            this.style.transform = "scale(1.1)";
        });
        enlace.addEventListener("mouseleave", function() {
            this.style.transform = "scale(1)";
        });
    });
});
