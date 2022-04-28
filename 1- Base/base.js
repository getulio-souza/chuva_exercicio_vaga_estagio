// abrir e fechar menu mobile

const toogleBtn = document.querySelector(".menu_mobile_icon");
const closeBtn = document.querySelector(".close_menu_mobile");
const menuMobile = document.querySelector(".menu_mobile_container");

toogleBtn.addEventListener("click", () => {
    if (menuMobile.classList.contains("open_menu_mobile")) {
        menuMobile.classList.remove("open_menu_mobile")
    }
    else {
        menuMobile.classList.add("open_menu_mobile")
    }
    
})

closeBtn.addEventListener("click", () => {
    menuMobile.classList.remove("menu_mobile_icon")
})