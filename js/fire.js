const canvas = document.getElementById('fireworksCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Firework {
  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.particles = [];
    this.init();
  }
  init() {
    const particleCount = 80;
    for (let i = 0; i < particleCount; i++) {
      const velocity = {
        x: (Math.random() - 0.5) * 5,
        y: (Math.random() - 0.5) * 5
      };
      this.particles.push(new Particle(this.x, this.y, velocity, this.color));
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
  constructor(x, y, velocity, color) {
    this.x = x;
    this.y = y;
    this.velocity = velocity;
    this.life = 100;
    this.color = color;
  }

  getCurrentColor() {
    // Calculate alpha based on life remaining. As life goes from 100 to 0, alpha goes from 1 to 0.
    const alpha = this.life / 100;
    // Assuming this.color is in the format 'hsl(50, 100%, 50%)', we convert it to 'hsla(50, 100%, 50%, alpha)'
    const colorWithAlpha = this.color.replace('hsl', 'hsla').replace(')', `, ${alpha})`);
    return colorWithAlpha;
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

setInterval(launchFirework, 500);