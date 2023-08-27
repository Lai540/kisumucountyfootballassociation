const photo = document.getElementById('photo');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');
const hamburgerButton = document.getElementById('hamburger'); // Add this line

const photos = ['l.png', 'a.jpg', 'b.jpg', 'c.jpg', 'd.jpg', 'e.jpg', 'f.jpg', 'm.jpg', 'n.jpg', 'o.jpg', 'p.jpg', 'q.jpg'];
let currentPhotoIndex = 0;

photo.src = photos[currentPhotoIndex];

prevButton.addEventListener('click', () => {
    currentPhotoIndex = (currentPhotoIndex - 1 + photos.length) % photos.length;
    photo.src = photos[currentPhotoIndex];
});

nextButton.addEventListener('click', () => {
    currentPhotoIndex = (currentPhotoIndex + 1) % photos.length;
    photo.src = photos[currentPhotoIndex];
});

function toggleMenu() {
  var navbarMenu = document.getElementById("navbarMenu");
  navbarMenu.style.display = navbarMenu.style.display === "none" ? "block" : "none";
}