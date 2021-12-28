

let navToogle = document.querySelector('.nav-toogle')
let links = document.querySelectorAll(".link")


navToogle.addEventListener("click", function () {
    for (let i = 0; i < links.length; i++) {
        links[i].classList.toggle("links")
        
    }
    
})
