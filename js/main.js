function myFunction() {
    const x = document.getElementById("myTopnav");
    if (x.className === "hide-nav") {
        x.className += "show-menu";
    } else {
        x.className = "hide-nav";
    }
}
