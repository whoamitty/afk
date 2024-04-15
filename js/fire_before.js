const canvas = document.getElementById('fireworksCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Firework {
  constructor(x, y ) {
    this.x = x;
    this.y = y;
    this.particles = [];
    this.h = Math.random() * 360; // Hue value for color
    this.s = 100; // Saturation percentage
    this.l = 50; // Lightness percentage
    this.init();
  }

  init() {
    const particleCount = 50;
    for (let i = 0; i < particleCount; i++) {
      const velocity = {
        x: (Math.random() - 0.5) * 5,
        y: (Math.random() - 0.5) * 5
      };
      this.particles.push(new Particle(this.x, this.y, velocity, this.h, this.s, this.l));
    }
  }

  update() {
    this.particles.forEach(p => p.update());
    this.particles = this.particles.filter(p => p.life > 0);
  }

  draw() {
    this.particles.forEach(p => p.draw());
  }
}

class Particle {
  constructor(x, y, velocity, h,s,l) {
    this.x = x;
    this.y = y;
    this.velocity = velocity;
    this.h = h; // Hue
    this.s = s; // Saturation
    this.l = l; // Lightness
    this.life = 100;
  }

  getCurrentColor() {
    // Calculate alpha based on life remaining. As life goes from 100 to 0, alpha goes from 1 to 0.
    const alpha = this.life / 100;
    return `hsla(${this.h}, ${this.s}%, ${this.l}%, ${alpha})`; // Use hsla for color with fading
  }

  update() {
    this.velocity.y += 0.1; // gravity
    this.x += this.velocity.x;
    this.y += this.velocity.y;
    this.life -= 1;
  }

  draw() {
    ctx.fillStyle = this.getCurrentColor();
    ctx.beginPath();
    ctx.arc(this.x, this.y, 2, 0, Math.PI * 2);
    ctx.fill();
  }
}

let fireworks = [];

function launchFirework() {
  const x = Math.random() * canvas.width;
  const y = Math.random() * canvas.height;
  const color = `hsl(${Math.random() * 360}, 100%, 50%)`;
  fireworks.push(new Firework(x, y, color));
}

setInterval(() => {
/*   ctx.fillStyle = 'rgba(0, 0, 0, 0.01)';
  ctx.fillRect(0, 0, canvas.width, canvas.height); */

  ctx.clearRect(0, 0, canvas.width, canvas.height); // clear canvas
  fireworks.forEach(firework => firework.update());
  fireworks.forEach(firework => firework.draw());
  fireworks = fireworks.filter(firework => firework.particles.length > 0);
}, 50);

setInterval(launchFirework, 600);