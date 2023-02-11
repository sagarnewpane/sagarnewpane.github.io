const images = document.querySelectorAll('.images img');
let currentIndex = 0;

// Add click event to each image
images.forEach((image, index) => {
    image.onclick = () => {
        currentIndex = index;
        document.querySelector('.image-popup').style.display = 'block';
        document.querySelector('.image-popup img').src = image.getAttribute('src');
        
    }
});
// Add click event to close button
document.querySelector('.image-popup .exit').onclick = () => {
    document.querySelector('.image-popup').style.display = 'none';
};

// Add click event to next arrow button
document.querySelector('.image-popup .right').onclick = () => {
    currentIndex++;
    if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    document.querySelector('.image-popup img').src = images[currentIndex].getAttribute('src');
};

// Add click event to prev arrow button
document.querySelector('.image-popup .left').onclick = () => {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }
    document.querySelector('.image-popup img').src = images[currentIndex].getAttribute('src');
};
