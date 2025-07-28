import React, { useRef, useEffect } from 'react';

const STAR_COUNT = 200;
const LAYERS = 4;

type Star = {
  x: number;
  y: number;
  r: number; // radius
  alpha: number;
  speed: number;
  twinklePhase: number;
  layer: number;
  color: string;
};

type ClickParticle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  alpha: number;
  color: string;
  life: number;
};

const COLORS = [
  '#ffffff',
  '#d0e6f7',
  '#a6d0ff',
  '#f0f8ff',
  '#cce7ff',
];

function randomBetween(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}

function makeStar(layer: number, width: number, height: number): Star {
  return {
    x: randomBetween(0, width),
    y: randomBetween(0, height),
    r: randomBetween(0.5 + layer * 0.2, 1.5 + layer * 0.5),
    alpha: randomBetween(0.4, 1),
    speed: 0.1 + layer * 0.05,
    twinklePhase: randomBetween(0, Math.PI * 2),
    layer,
    color: COLORS[Math.floor(randomBetween(0, COLORS.length))],
  };
}

const Starfield: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const starsRef = useRef<Star[]>([]);
  const clickParticlesRef = useRef<ClickParticle[]>([]);
  const mouse = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const animationFrameId = useRef<number>();
  const widthRef = useRef(window.innerWidth);
  const heightRef = useRef(window.innerHeight);

  // Initialize stars for the current canvas size
  const createStars = (width: number, height: number): Star[] => {
    const stars: Star[] = [];
    for (let layer = 0; layer < LAYERS; layer++) {
      for (let i = 0; i < STAR_COUNT / LAYERS; i++) {
        stars.push(makeStar(layer, width, height));
      }
    }
    return stars;
  };

  // Create burst particles on click/tap at (x, y)
  const createBurst = (x: number, y: number, count = 15) => {
    const particles: ClickParticle[] = [];
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * 2 * Math.PI;
      const speed = randomBetween(1, 3);
      particles.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        r: randomBetween(1, 3),
        alpha: 1,
        color: COLORS[Math.floor(randomBetween(0, COLORS.length))],
        life: 0,
      });
    }
    clickParticlesRef.current.push(...particles);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    widthRef.current = width;
    heightRef.current = height;

    canvas.width = width;
    canvas.height = height;

    starsRef.current = createStars(width, height);

    function animate(time: number) {
      ctx.clearRect(0, 0, widthRef.current, heightRef.current);

      // Draw stars with parallax and twinkle
      for (const star of starsRef.current) {
        const offsetX =
          (mouse.current.x - widthRef.current / 2) * 0.008 * (star.layer + 1);
        const offsetY =
          (mouse.current.y - heightRef.current / 2) * 0.008 * (star.layer + 1);

        const twinkle = 0.5 + 0.5 * Math.sin(time / 500 + star.twinklePhase);
        const alpha = star.alpha * twinkle;

        ctx.beginPath();
        const gradient = ctx.createRadialGradient(
          star.x + offsetX,
          star.y + offsetY,
          0,
          star.x + offsetX,
          star.y + offsetY,
          star.r * 4
        );
        gradient.addColorStop(0, `rgba(255, 255, 255, ${alpha.toFixed(2)})`);
        gradient.addColorStop(0.3, star.color);
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
        ctx.fillStyle = gradient;
        ctx.arc(star.x + offsetX, star.y + offsetY, star.r, 0, Math.PI * 2);
        ctx.fill();

        // Drift stars horizontally
        star.x += star.speed;
        if (star.x > widthRef.current + star.r * 4) {
          star.x = -star.r * 4;
          star.y = randomBetween(0, heightRef.current);
        }
      }

      // Update and draw click/tap particles (bursts)
      const particles = clickParticlesRef.current;
      const aliveParticles: ClickParticle[] = [];

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        p.r *= 0.95;
        p.alpha *= 0.92;
        p.life++;

        if (p.alpha > 0.03 && p.r > 0.1) {
          ctx.beginPath();
          const gradient = ctx.createRadialGradient(
            p.x,
            p.y,
            0,
            p.x,
            p.y,
            p.r * 4
          );
          gradient.addColorStop(0, `rgba(255, 255, 255, ${p.alpha.toFixed(2)})`);
          gradient.addColorStop(0.3, p.color);
          gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
          ctx.fillStyle = gradient;
          ctx.arc(p.x, p.y, p.r, 0, 2 * Math.PI);
          ctx.fill();

          aliveParticles.push(p);
        }
      }
      clickParticlesRef.current = aliveParticles;

      animationFrameId.current = requestAnimationFrame(animate);
    }

    animationFrameId.current = requestAnimationFrame(animate);

    // Mouse and touch move to update parallax target
    function handleMove(e: MouseEvent | TouchEvent) {
      if ('touches' in e && e.touches.length > 0) {
        mouse.current.x = e.touches[0].clientX;
        mouse.current.y = e.touches[0].clientY;
      } else if ('clientX' in e) {
        mouse.current.x = e.clientX;
        mouse.current.y = e.clientY;
      }
    }

    window.addEventListener('mousemove', handleMove);
    window.addEventListener('touchmove', handleMove);

    // Click/tap handler to create bursts
    function handleClick(e: MouseEvent | TouchEvent) {
      let x: number;
      let y: number;
      if ('touches' in e && e.touches.length > 0) {
        x = e.touches[0].clientX;
        y = e.touches[0].clientY;
      } else if ('clientX' in e) {
        x = e.clientX;
        y = e.clientY;
      } else {
        return;
      }
      createBurst(x, y);
    }

    window.addEventListener('click', handleClick);
    window.addEventListener('touchstart', handleClick);

    // Handle window resize event
    function handleResize() {
      widthRef.current = window.innerWidth;
      heightRef.current = window.innerHeight;
      canvas.width = widthRef.current;
      canvas.height = heightRef.current;
      starsRef.current = createStars(widthRef.current, heightRef.current);
    }
    window.addEventListener('resize', handleResize);

    return () => {
      if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('touchmove', handleMove);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('click', handleClick);
      window.removeEventListener('touchstart', handleClick);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        inset: 0,
        width: '100vw',
        height: '100vh',
        // zIndex: -1,
        background: 'black',
        display: 'block',
      }}
    />
  );
};

export default Starfield;
