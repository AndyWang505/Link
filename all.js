const canvas = document.getElementById('starryCanvas');
const ctx = canvas.getContext('2d');

// Set canvas size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Array to store stars
const stars = [];
const numStars = 500; // Number of stars

function createStar() {
    return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.5 + 0.5, // Size of the star
        speed: Math.random() * 0.2 + 0.1, // Falling speed (slower)
        opacity: Math.random() * 0.5 + 0.5 // Random opacity (between 0.5 and 1)
    };
}

// Initialize stars
for (let i = 0; i < numStars; i++) {
    stars.push(createStar());
}

function drawStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    stars.forEach(star => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`; // Apply opacity
        ctx.fill();
    });
}

function updateStars() {
    stars.forEach(star => {
        star.y += star.speed; // Move the star downwards
        if (star.y > canvas.height) {
            // Reset the star to the top if it goes off screen
            star.y = 0;
            star.x = Math.random() * canvas.width;
            star.size = Math.random() * 1.5 + 0.5; // Random size
            star.speed = Math.random() * 0.2 + 0.1; // Random speed
            star.opacity = Math.random() * 0.5 + 0.5; // Random opacity
        }
    });
}

function animate() {
    drawStars();
    updateStars();
    requestAnimationFrame(animate);
}

animate(); // Start the animation

// Adjust canvas size on window resize
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
