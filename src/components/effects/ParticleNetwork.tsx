"use client";

import { useEffect, useRef } from "react";

interface Node {
  x: number;
  y: number;
  ox: number; // origin x
  oy: number; // origin y
  vx: number;
  vy: number;
  radius: number;
  phase: number;
  speed: number;
}

export default function ParticleNetwork({ interactive = true }: { interactive?: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;

    let animId: number;
    let nodes: Node[] = [];
    let width = 0;
    let height = 0;
    let mouseX = -9999;
    let mouseY = -9999;
    let isHovering = false;

    const ACCENT_R = 56, ACCENT_G = 189, ACCENT_B = 248;
    const MAX_DIST = 155;
    const NODE_COUNT = window.innerWidth < 640 ? 30 : 95;
    const MOUSE_RADIUS = 160;
    const REPULSE_STRENGTH = 2.2;

    function resize() {
      width = canvas!.offsetWidth;
      height = canvas!.offsetHeight;
      canvas!.width = width;
      canvas!.height = height;

      nodes = Array.from({ length: NODE_COUNT }, () => {
        const x = Math.random() * width;
        const y = Math.random() * height;
        return {
          x, y, ox: x, oy: y,
          vx: (Math.random() - 0.5) * 0.32,
          vy: (Math.random() - 0.5) * 0.32,
          radius: Math.random() * 1.8 + 0.7,
          phase: Math.random() * Math.PI * 2,
          speed: Math.random() * 0.011 + 0.005,
        };
      });
    }

    function drawFrame() {
      ctx.clearRect(0, 0, width, height);

      nodes.forEach((n) => {
        // Base drift
        n.x += n.vx;
        n.y += n.vy;
        n.phase += n.speed;

        // Wrap edges
        if (n.x < -20) n.x = width + 20;
        else if (n.x > width + 20) n.x = -20;
        if (n.y < -20) n.y = height + 20;
        else if (n.y > height + 20) n.y = -20;

        // Mouse repulsion
        if (isHovering) {
          const dx = n.x - mouseX;
          const dy = n.y - mouseY;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MOUSE_RADIUS && dist > 0) {
            const force = (1 - dist / MOUSE_RADIUS) * REPULSE_STRENGTH;
            n.x += (dx / dist) * force;
            n.y += (dy / dist) * force;
          }
        }
      });

      // Connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i], b = nodes[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MAX_DIST) {
            // Boost opacity if near mouse
            const midX = (a.x + b.x) / 2, midY = (a.y + b.y) / 2;
            const mDist = Math.sqrt((midX - mouseX) ** 2 + (midY - mouseY) ** 2);
            const mouseFactor = isHovering ? Math.max(0, 1 - mDist / 220) : 0;

            const baseAlpha = Math.pow(1 - dist / MAX_DIST, 2) * 0.16;
            const alpha = Math.min(baseAlpha + mouseFactor * 0.28, 0.55);

            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(${ACCENT_R},${ACCENT_G},${ACCENT_B},${alpha})`;
            ctx.lineWidth = mouseFactor > 0.2 ? 0.9 : 0.55;
            ctx.stroke();
          }
        }
      }

      // Nodes
      nodes.forEach((n) => {
        const pulse = Math.sin(n.phase);
        const r = n.radius + pulse * 0.45;

        // Boost near mouse
        const mDist = Math.sqrt((n.x - mouseX) ** 2 + (n.y - mouseY) ** 2);
        const near = isHovering ? Math.max(0, 1 - mDist / MOUSE_RADIUS) : 0;
        const alpha = 0.45 + pulse * 0.15 + near * 0.5;
        const gSize = r * (6 + near * 5);

        const grad = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, gSize);
        grad.addColorStop(0, `rgba(${ACCENT_R},${ACCENT_G},${ACCENT_B},${(alpha * 0.25 + near * 0.15).toFixed(3)})`);
        grad.addColorStop(1, `rgba(${ACCENT_R},${ACCENT_G},${ACCENT_B},0)`);
        ctx.beginPath();
        ctx.arc(n.x, n.y, gSize, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(n.x, n.y, r + near * 1.2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${ACCENT_R},${ACCENT_G},${ACCENT_B},${(alpha * 0.9).toFixed(3)})`;
        ctx.fill();
      });

      animId = requestAnimationFrame(drawFrame);
    }

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas!.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
      isHovering = true;
    };
    const onMouseLeave = () => { isHovering = false; mouseX = -9999; mouseY = -9999; };

    if (interactive) {
      canvas.addEventListener("mousemove", onMouseMove);
      canvas.addEventListener("mouseleave", onMouseLeave);
    }

    const observer = new ResizeObserver(resize);
    observer.observe(canvas);
    resize();
    animId = requestAnimationFrame(drawFrame);

    return () => {
      cancelAnimationFrame(animId);
      observer.disconnect();
      if (interactive) {
        canvas.removeEventListener("mousemove", onMouseMove);
        canvas.removeEventListener("mouseleave", onMouseLeave);
      }
    };
  }, [interactive]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full"
      style={{ opacity: 0.65 }}
      aria-hidden
    />
  );
}
