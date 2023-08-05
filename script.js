document.addEventListener("DOMContentLoaded", function() {
    // Set the current year in the footer
    document.getElementById("year").textContent = new Date().getFullYear();

    // Add hover effect to social media icons
    const linkedinIcon = document.querySelector(".linkedin-icon");
    const pinterestIcon = document.querySelector(".pinterest-icon");

    linkedinIcon.addEventListener("mouseover", function() {
        linkedinIcon.style.backgroundImage = "url('linkedinlogoB.png')";
    });

    linkedinIcon.addEventListener("mouseout", function() {
        linkedinIcon.style.backgroundImage = "url('linkedin-black.png')";
    });

    pinterestIcon.addEventListener("mouseover", function() {
        pinterestIcon.style.backgroundImage = "url('pinterestlogoR.png')";
    });

    pinterestIcon.addEventListener("mouseout", function() {
        pinterestIcon.style.backgroundImage = "url('pinterest-black.png')";
    });
});