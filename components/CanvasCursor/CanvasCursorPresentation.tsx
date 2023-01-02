import React, { useEffect, useRef } from 'react'
import { MouseCoordinates } from '../../types/Canvas/CanvasCursor';
import { ParticleDraw } from './Classes/ParticleDraw';

const CanvasCursorPresentation = ({ children }: any) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const DrawParticles = () => {
    const canvas = canvasRef.current;
    if (!canvas) return

    const ctx: any = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let spots: ParticleDraw[] = [];
    let hue = 0;
    let mouse: MouseCoordinates = {
      x: undefined,
      y: undefined
    }
    canvas.addEventListener('mousemove', (ev) => {
      mouse.x = ev.x;
      mouse.y = ev.y;
      for (let i = 0; i < 5; i++) {
        spots.push(new ParticleDraw(mouse, hue))
      }
    })
    window.addEventListener('resize', () => {
      canvas.width = innerWidth;
      canvas.height = innerHeight;
      //init();
    })
    window.addEventListener('mouseout', () => {
      mouse.x = undefined;
      mouse.y = undefined;
    })
    function handleParticles() {
      for (let i = 0; i < spots.length; i++) {
        spots[i].update();
        spots[i].draw(ctx);
        for (let j = i; j < spots.length; j++) {
          const dx = spots[i].x - spots[j].x;
          const dy = spots[i].y - spots[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 90) {
            ctx.beginPath();
            ctx.strokeStyle = spots[i].color;
            ctx.lineWidth = spots[i].size / 10;
            ctx.moveTo(spots[i].x, spots[i].y);
            ctx.lineTo(spots[i].x, spots[i].y);
            ctx.stroke();
          }
        }
        if (spots[i].size <= 0.3) {
          spots.splice(i, 1);
          i--;
        }
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas?.width, canvas?.height);
      handleParticles();
      hue++;
      requestAnimationFrame(animate);
    }
    animate();
  }

  useEffect(() => {
    DrawParticles();
  }, [])


  return (
    <section className='my-canvas'>
      {children}
      <canvas ref={canvasRef} id="canvas" />
    </section>
  )
}

export default CanvasCursorPresentation