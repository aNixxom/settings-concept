let edit_mode_toggle = document.getElementById('edit_mode_toggle')
let double_points_toggle = document.getElementById('double_points_toggle')

let customize_tab = document.getElementById('customize_tab')
let cheats_tab = document.getElementById('cheats_tab')
let about_tab = document.getElementById('about_tab')

let cheats_settings_menu = document.getElementById("cheats_settings_menu")



cheats_tab.addEventListener('click', function() {
    console.log(this)
    if(this.getAttribute("data-isfocused") == "false") {
        cheats_settings_menu.style.visibility = "visible"
    }
})

edit_mode_toggle.addEventListener('click', function() {
    if(this.getAttribute("data-istoggled") == "false") {
        this.style.background = "white"
        this.setAttribute("data-istoggled", "true")
    } else if (this.getAttribute("data-istoggled") == "true") {
        this.style.background = "none"
        this.setAttribute("data-istoggled", "false")
    }
})

double_points_toggle.addEventListener('click', function() {
    if(this.getAttribute("data-istoggled") == "false") {
        this.style.background = "white"
        this.setAttribute("data-istoggled", "true")
    } else if (this.getAttribute("data-istoggled") == "true") {
        this.style.background = "none"
        this.setAttribute("data-istoggled", "false")
    }
})