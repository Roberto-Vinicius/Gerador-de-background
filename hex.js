const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D","E", "F"];
const btn = document.querySelector(".btn-main");
const color = document.querySelector(".text-main");

btn.addEventListener("click", function(){
    let hexColor = "#";
    for(let i = 0; i < 6; i++) {
        hexColor += hex[getRandoNumber()];
    }

    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
});

function getRandoNumber() {
    return Math.floor(Math.random() * hex.length);
};