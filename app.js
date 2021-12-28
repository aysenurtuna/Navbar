

let navToogle = document.querySelector('.nav-toogle')
let links = document.querySelectorAll(".link")
let linkToogle = document.querySelector(".toogle-link")


navToogle.addEventListener("click", function () {
    for (let i = 0; i < links.length; i++) {
        links[i].classList.toggle("links")
        
    }
    
})