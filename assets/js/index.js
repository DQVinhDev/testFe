var images = [
  "assets/images/rectangle236749-0jkn-800h.png",
  "assets/images/image66693-bjj7-800h.png",
];
var currentIndex = 0;

// Hàm này sẽ được gọi khi người dùng nhấn nút 'Next'
function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  document.getElementById("mainImage").src = images[currentIndex];
}
