document.addEventListener("DOMContentLoaded", () => {

    const counters = document.querySelectorAll(".counter");

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if(entry.isIntersecting){

                const counter = entry.target;

                const target = +counter.dataset.target;

                let current = 0;

                const increment = target / 100;

                const update = () => {

                    current += increment;

                    if(current < target){

                        counter.innerText = Math.floor(current).toLocaleString();

                        requestAnimationFrame(update);

                    }else{

                        counter.innerText = target.toLocaleString();

                    }

                };

                update();

                observer.unobserve(counter);

            }

        });

    },{
        threshold:0.4
    });

    counters.forEach(counter=>{
        observer.observe(counter);
    });

});