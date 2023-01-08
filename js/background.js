const img = ["0.jpg", "1.jpg", "2.jpg", "3.jpg"];

const chosenImg = img[Math.floor(Math.random() * img.length)];

const bgimg = document.createElement("img");



bgimg.src = `img/${chosenImg}`;

document.body.appendChild(bgimg);