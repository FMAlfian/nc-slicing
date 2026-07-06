// Floating hover effect

document.querySelectorAll(".feature-box").forEach(card => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        card.style.background =
            `radial-gradient(circle at ${x}px ${y}px,
rgba(111,66,255,.08),
white 55%)`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.background = "#fff";

    });

});