// JavaScript code for smooth scroll to anchor
document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                const offsetTop = target.getBoundingClientRect().top + window.pageYOffset;
                window.scroll({
                    top: offsetTop,
                    behavior: "smooth"
                });
            }
        });
    });
});
