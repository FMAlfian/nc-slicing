const revealElements = document.querySelectorAll(
    '.feature-card,.section-title,.section-description'
);

const revealObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: .2
});

revealElements.forEach(el => {

    el.classList.add("hidden");

    revealObserver.observe(el);

});