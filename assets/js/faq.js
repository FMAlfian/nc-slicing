document.querySelectorAll(".accordion-collapse").forEach((collapse) => {

    collapse.addEventListener("shown.bs.collapse", () => {
        collapse.style.animation = "fadeIn .3s ease";
    });

});

const style = document.createElement("style");

style.innerHTML = `
@keyframes fadeIn{
    from{
        opacity:0;
        transform:translateY(-8px);
    }
    to{
        opacity:1;
        transform:translateY(0);
    }
}
`;

document.head.appendChild(style);