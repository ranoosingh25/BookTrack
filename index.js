// Carousel Logic
const books = [
  { title: "", img: "p2.jpg" },
  { title: "", img: "p3.jpg" },
  { title: "", img: "p4.jpg" },
  { title: "", img: "p5.jpg" }
];

let current = 0;
const imgEl = document.getElementById("carousel-img");
const titleEl = document.getElementById("carousel-title");

setInterval(() => {
  current = (current + 1) % books.length;
  imgEl.src = books[current].img;
  titleEl.textContent = books[current].title;
}, 3000);
