function burgerMenu() {
    let burger = document.getElementById("dropdown");
    if (burger.className === "gone flex_col") {
    burger.className += " there";
    } else {
    burger.className = "gone flex_col";
    }
}