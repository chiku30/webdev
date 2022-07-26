function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;

    console.log(color);
    if (color == 'green') {
        document.body.style.color = "yellow";
    }
}