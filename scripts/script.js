function burgerMenu() {
    let burger = document.getElementById("dropdown");
    if (burger.className === "tiny gone flex_col") {
    burger.className += " there";
    } else {
    burger.className = "tiny gone flex_col";
    }
}