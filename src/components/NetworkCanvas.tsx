import React, { useEffect, useRef } from 'react';

interface NetworkCanvasProps {
  isDark?: boolean;
}

export const NetworkCanvas: React.FC<NetworkCanvasProps> = ({ isDark = true }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      height = canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
      initNodes();
    };

    window.addEventListener('resize', handleResize);

    interface Node {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      isServer?: boolean;
    }

    interface Packet {
      fromIndex: number;
      toIndex: number;
      progress: number;
      speed: number;
    }

    let nodes: Node[] = [];
    let packets: Packet[] = [];
    const maxNodes = Math.min(Math.floor((width * height) / 18000), 45);

    const initNodes = () => {
      nodes = [];
      packets = [];
      for (let i = 0; i < maxNodes; i++) {
        nodes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.45,
          vy: (Math.random() - 0.5) * 0.45,
          radius: i % 7 === 0 ? 3.5 : 2,
          isServer: i % 7 === 0,
        });
      }
    };

    initNodes();

    let mouse = { x: -1000, y: -1000 };
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    const handleMouseLeave = () => {
      mouse = { x: -1000, y: -1000 };
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    const maxDistance = 140;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Colors based on theme
      const nodeColor = isDark ? 'rgba(6, 182, 212, 0.7)' : 'rgba(2, 132, 199, 0.6)';
      const serverColor = isDark ? '#00F0FF' : '#0284c7';
      const lineColor = isDark ? '6, 182, 212' : '2, 132, 199';
      const packetColor = isDark ? '#ffffff' : '#0369a1';

      // Update and draw nodes
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;

        // Subtle mouse push
        const dxMouse = mouse.x - node.x;
        const dyMouse = mouse.y - node.y;
        const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);
        if (distMouse < 120 && distMouse > 0) {
          node.x -= (dxMouse / distMouse) * 0.6;
          node.y -= (dyMouse / distMouse) * 0.6;
        }

        // Draw node
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = node.isServer ? serverColor : nodeColor;
        ctx.fill();

        if (node.isServer && isDark) {
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.radius + 3, 0, Math.PI * 2);
          ctx.strokeStyle = 'rgba(0, 240, 255, 0.25)';
          ctx.lineWidth = 1;
          ctx.stroke();
        }

        // Connect with nearby nodes
        for (let j = i + 1; j < nodes.length; j++) {
          const nodeB = nodes[j];
          const dx = node.x - nodeB.x;
          const dy = node.y - nodeB.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const alpha = (1 - dist / maxDistance) * (isDark ? 0.25 : 0.15);
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(nodeB.x, nodeB.y);
            ctx.strokeStyle = `rgba(${lineColor}, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();

            // Randomly create a packet
            if (packets.length < 12 && Math.random() < 0.003) {
              packets.push({
                fromIndex: i,
                toIndex: j,
                progress: 0,
                speed: 0.015 + Math.random() * 0.01,
              });
            }
          }
        }
      }

      // Render packets
      for (let k = packets.length - 1; k >= 0; k--) {
        const p = packets[k];
        p.progress += p.speed;

        if (p.progress >= 1) {
          packets.splice(k, 1);
          continue;
        }

        const nodeA = nodes[p.fromIndex];
        const nodeB = nodes[p.toIndex];
        if (!nodeA || !nodeB) {
          packets.splice(k, 1);
          continue;
        }

        const currentX = nodeA.x + (nodeB.x - nodeA.x) * p.progress;
        const currentY = nodeA.y + (nodeB.y - nodeA.y) * p.progress;

        ctx.beginPath();
        ctx.arc(currentX, currentY, 1.8, 0, Math.PI * 2);
        ctx.fillStyle = packetColor;
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isDark]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-auto opacity-75 transition-opacity duration-700"
      aria-hidden="true"
    />
  );
};
