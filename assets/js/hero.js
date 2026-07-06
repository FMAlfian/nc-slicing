// Reveal animation

document.addEventListener("DOMContentLoaded", () => {

    const hero = document.querySelector(".hero-section");

    hero.animate(
        [
            {
                opacity:0,
                transform:"translateY(40px)"
            },
            {
                opacity:1,
                transform:"translateY(0)"
            }
        ],
        {
            duration:900,
            easing:"ease-out",
            fill:"forwards"
        }
    );

});