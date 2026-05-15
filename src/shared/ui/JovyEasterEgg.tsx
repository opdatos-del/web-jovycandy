import { useEffect, useRef, useState } from 'react';
import { BRAND_LOGO_PATH } from '@/shared/assets/publicAssets';

export const JovyEasterEgg = () => {
  const bufferRef = useRef<string>('');
  const [active, setActive] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const runIdRef = useRef(0);
  const endClearTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const key = e.key || '';
      bufferRef.current = (bufferRef.current + key).slice(-8).toLowerCase();
      if (bufferRef.current.endsWith('jovy')) {
        trigger();
      }
    };

    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const trigger = () => {
    if (active) return;
    setActive(true);
    animateLogos();
    runConfetti();
    setTimeout(() => setActive(false), 4200);
  };

  const animateLogos = () => {
    const logos = Array.from(document.querySelectorAll('img')).filter((img) => {
      const el = img as HTMLImageElement;
      return (el.alt && el.alt.toLowerCase().includes('jovy')) || el.src.includes(BRAND_LOGO_PATH);
    });
    logos.forEach((el) => el.classList.add('jovy-easter-animate'));
    setTimeout(() => logos.forEach((el) => el.classList.remove('jovy-easter-animate')), 2200);
  };

  const runConfetti = () => {
    // bump run id so previous runs stop drawing
    runIdRef.current += 1;
    const thisRunId = runIdRef.current;

    // clear any pending end-timeout from previous runs
    if (endClearTimeoutRef.current) {
      clearTimeout(endClearTimeoutRef.current);
      endClearTimeoutRef.current = null;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const DPR = Math.max(1, window.devicePixelRatio || 1);
    canvas.width = window.innerWidth * DPR;
    canvas.height = window.innerHeight * DPR;
    canvas.style.width = window.innerWidth + 'px';
    canvas.style.height = window.innerHeight + 'px';
    ctx.scale(DPR, DPR);

    const colors = ['#006847', '#FFFFFF', '#CE1126'];
    const particles: Array<any> = [];

    const count = 320;
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * window.innerWidth,
        y: -20 - Math.random() * 240,
        vx: (Math.random() - 0.5) * 8,
        vy: 3 + Math.random() * 8,
        size: 6 + Math.random() * 14,
        color: colors[Math.floor(Math.random() * colors.length)],
        rot: Math.random() * 360,
        rotSpeed: (Math.random() - 0.5) * 12,
        life: 0,
      });
    }

    let last = performance.now();

    const tick = (t: number) => {
      // stop if another run started
      if (thisRunId !== runIdRef.current) {
        rafRef.current = null;
        return;
      }

      const dt = Math.min(40, t - last) / 16.6667;
      last = t;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let p of particles) {
        p.vy += 0.12 * dt; // gravity
        p.x += p.vx * dt;
        p.y += p.vy * dt;
        p.rot += p.rotSpeed * dt;
        p.life += dt;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rot * Math.PI) / 180);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
        ctx.restore();
      }

      // stop condition
      if (particles.every((p) => p.y > window.innerHeight + 50)) {
        // let it run a bit then clear, but only if no new run started
        endClearTimeoutRef.current = window.setTimeout(() => {
          if (thisRunId === runIdRef.current) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
          }
          endClearTimeoutRef.current = null;
        }, 300);
        rafRef.current = null;
        return;
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(tick);
  };

  return (
    <canvas
      ref={canvasRef}
      className={`jovy-confetti-canvas ${active ? 'jovy-confetti-active' : ''}`}
      aria-hidden
    />
  );
};

export default JovyEasterEgg;
