// Optional hover animation
document.querySelectorAll(".feature-card").forEach(card => {
    card.addEventListener("mouseenter", () => {
        card.style.boxShadow = "0 25px 60px rgba(98,48,255,.35)";
    });

    card.addEventListener("mouseleave", () => {
        card.style.boxShadow = "none";
    });
});