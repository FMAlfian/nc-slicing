const steps = document.querySelectorAll(".workflow-item");

steps.forEach(item => {

    item.addEventListener("click", () => {

        steps.forEach(i => i.classList.remove("active"));

        item.classList.add("active");

    });

});