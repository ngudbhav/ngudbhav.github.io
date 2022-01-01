export default class Particle {
  constructor(x, y, color, canvas, mouse) {
    this.x = Math.random()*(canvas.width);
    this.y = Math.random()*(canvas.height);
    this.color = color;
    this.size = 2;
    this.baseX = x;
    this.baseY = y;
    this.density = (Math.random() * 10) + 2;
    this.context = canvas.getContext('2d');
    this.mouse = mouse;
  };

  draw() {
    this.context.beginPath();
    this.context.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    this.context.closePath();
    this.context.fill();
  };

  update() {
    this.context.fillStyle = this.color;
    let dx = this.mouse.x - this.x;
    let dy = this.mouse.y - this.y;
    let distance = Math.sqrt(dx * dx + dy * dy);
    let forceDirectionX = dx / distance;
    let forceDirectionY = dy / distance;

    const maxDistance = 100;
    let force = (maxDistance - distance) / maxDistance;
    if (force < 0) force = 0;
    let directionX = forceDirectionX * force * this.density * 0.6;
    let directionY = forceDirectionY * force * this.density * 0.6;

    if (distance < this.mouse.radius + this.size) {
      this.x -= directionX;
      this.y -= directionY;
    } else {
      if (this.x !== this.baseX) {
        let dx = this.x - this.baseX;
        this.x -= dx / 20;
      } if (this.y !== this.baseY) {
        let dy = this.y - this.baseY;
        this.y -= dy / 20;
      }
    }
    this.draw();
  };
};
