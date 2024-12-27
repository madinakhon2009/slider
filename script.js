let rasm = document.getElementById("rasm");
let minus = document.getElementById("minus");
let plus = document.getElementById("plus");
const images = [`picture.jpg`, `picture1.jpg`, `picture2.jpg`, `picture3.jpg`, `picture4.jpg`];

let imgindex = 0; // Hozirgi rasm indexi

// Plus tugmasi funksiyasi
plus.addEventListener("click", function () {
    imgindex = (imgindex + 1) % images.length; // Indeksni oshirish va aylantirish
    rasm.setAttribute("src", images[imgindex]); // Rasmni o'zgartirish
});

// Minus tugmasi funksiyasi
minus.addEventListener("click", function () {
    imgindex = (imgindex - 1 + images.length) % images.length; // Indeksni kamaytirish va aylantirish
    rasm.setAttribute("src", images[imgindex]); // Rasmni o'zgartirish
});