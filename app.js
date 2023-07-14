function change() {
    var img = document.getElementById("bulb");
    if (img.src.match("off")) {
        img.src = "on.jpg";
    }
    else {
        img.src = "off.jpg";
    }
}