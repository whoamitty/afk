const canvas = document.getElementById('starsCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Star {
  constructor() {
    this.reset();
  }

  reset() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.opacity = Math.random();
    this.radius = Math.random() * 2;
  }

  update() {
    // Change the opacity randomly to create a twinkling effect
    this.opacity = Math.random();
    // Randomly reset star to create a new star effect
    if (Math.random() > 0.95) {
      this.reset();
    }
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`; // white color with variable opacity
    ctx.fill();
  }
}

let stars = [];

function createStars(count) {
  for (let i = 0; i < count; i++) {
    stars.push(new Star());
  }
}

function updateAndDrawStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height); // clear canvas
  stars.forEach(star => star.update());
  stars.forEach(star => star.draw());
}

// Create initial stars
createStars(100);

// Update and draw stars every 100ms
setInterval(updateAndDrawStars, 100);

// Adjust stars for window resize
window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  stars = []; // Reset stars array
  createStars(100); // Create new stars for the new window size
});