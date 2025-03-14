function createStars(count) {
    const container = document.querySelector('.stars');
    const width = window.innerWidth;
    const height = window.innerHeight;

    for (let i = 0; i < count; i++) {
        const star = document.createElement("div");
        star.classList.add("star"); //adds star class to new star element

        // Random size
        const size = Math.random() * 4 + 3; // Between 3px and 7px
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;

        // Random position
        star.style.left = `${Math.random() * width}px`;
        star.style.top = `${Math.random() * height}px`;

        // Random twinkling animation
        const duration = Math.random() * 3 + 2; // Between 2s and 5s
        star.style.animation = `twinkle ${duration}s infinite alternate ease-in-out`;

        container.appendChild(star);
    }
}

createStars(100); // Generate 100 stars

// Event listener to recreate stars when viewport is resized. 
window.addEventListener("resize", () => {
    document.querySelectorAll(".star").forEach(star => star.remove());
    createStars(200);
});