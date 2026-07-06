// Button hover glow

const ctaButton = document.querySelector(".btn-cta");

ctaButton.addEventListener("mouseenter", () => {

    ctaButton.style.boxShadow =
        "0 0 35px rgba(122,77,255,.55)";

});

ctaButton.addEventListener("mouseleave", () => {

    ctaButton.style.boxShadow =
        "0 18px 40px rgba(91,51,255,.35)";

});