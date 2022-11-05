const bgImg = document.getElementById('bgImg');
const bgImages = ["bali03.jpg", "bali07.jpg", "hawaii01.jpg", "japan02.jpg", "japan05.jpg"];

const randomImg = bgImages[Math.floor(Math.random() * bgImages.length)];
bgImg.src = `img/${randomImg}`