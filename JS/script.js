document.addEventListener("DOMContentLoaded", function () {
    const navToggle = document.querySelector(".nav-toggle");
    const navMenu = document.querySelector(".nav-menu");
    const backToTopBtn = document.querySelector(".back-to-top");
    //responsive navbar
    navToggle.addEventListener("click", function () {
        navMenu.classList.toggle("active");
    });

   //scroll to top button 
    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) { 
            backToTopBtn.style.display = "flex";
        } else {
            backToTopBtn.style.display = "none";
        }
    });

    // Click Event Listener for Back to Top
    backToTopBtn.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});