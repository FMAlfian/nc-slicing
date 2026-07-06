// Mouse parallax

const wrapper = document.querySelector(".integration-wrapper");

wrapper.addEventListener("mousemove", e=>{

    const x=(e.clientX-window.innerWidth/2)/50;
    const y=(e.clientY-window.innerHeight/2)/50;

    document.querySelectorAll(".integration-item").forEach((item,index)=>{

        item.style.transform=
        `translate(${x*(index%3)}px,${y*(index%2)}px)`;

    });

});