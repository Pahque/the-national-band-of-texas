document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".random-image");

    images.forEach(img => {
        let randomX = Math.random() * (window.innerWidth - 150);
        let randomY = Math.random() * (window.innerHeight - 150);
        let randomRotation = Math.random() * 360;

        img.style.position = "absolute";
        img.style.left = `${randomX}px`;
        img.style.top = `${randomY}px`;
        img.style.transform = `rotate(${randomRotation}deg)`;
        img.style.transition = "transform 1s ease-in-out"; // Smooth rotation
    });
});