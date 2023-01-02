import { MouseCoordinates } from "../../../types/Canvas/CanvasCursor";

export class ParticleDraw {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: any;

  constructor(mouse: MouseCoordinates, hue: number) {
    this.x = mouse.x ? mouse.x : 0;
    this.y = mouse.y ? mouse.y : 0;
    this.size = Math.random() * 4 + 0.1;
    this.speedX = Math.random() * 2 - 1;
    this.speedY = Math.random() * 2 - 1;
    this.color = 'hsl(' + hue + ',100%, 50%)';
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.size > 0.1)
      this.size -= 0.03
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}