import "../style.css";

let drawer_btn = document.querySelector("#drawer-btn");
drawer_btn.addEventListener("click", () => {
    let overlay = document.querySelector(".white-opaque-overlay");
    overlay.classList.add("expand-white-overlay");
    let lighter_purple_blob = document.querySelector(".lighter-purple-blob");
    lighter_purple_blob.classList.add("expand-lighter-purple-blob")
    let darker_purple_blob = document.querySelector(".darker-purple-blob");
    darker_purple_blob.classList.add("expand-darker-purple-blob");
    let drawer_menu = document.querySelector(".drawer-menu");
    drawer_menu.classList.add("show-drawer-menu");
    
    let close_drawer_btn = document.querySelector(".close-drawer-btn");
    close_drawer_btn.classList.add("show-close-drawer-btn");
    close_drawer_btn.addEventListener("click", () => {
        overlay.classList.remove("expand-white-overlay");
        lighter_purple_blob.classList.remove("expand-lighter-purple-blob");
        darker_purple_blob.classList.remove("expand-darker-purple-blob");
        close_drawer_btn.classList.remove("show-close-drawer-btn");
        drawer_menu.classList.remove("show-drawer-menu");
    })
})