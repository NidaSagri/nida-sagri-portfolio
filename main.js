var typed = new Typed(".text",{
    strings:["Full Stack Developer", "MERN Stack Developer", "React Developer", "Frontend Enthusiast", "Team Person","Solidary Person"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
})

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))