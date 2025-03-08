function toggleHamburger(){
    let nav = document.getElementsByTagName("nav")[0]
    if(nav.style.display == "none"){
        nav.style.display = "block"
    }
    else{
        nav.style.display = "none"
    }
}