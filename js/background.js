const bgImg = document.getElementById('bgImg');
const bgImages = ["bali03.jpg", "bali07.jpg", "hawaii01.jpg"];

const randomImg = bgImages[Math.floor(Math.random() * bgImages.length)];
bgImg.src = `http://harunao.net/wp-content/uploads/2014/05/${randomImg}`