"use client"; 
import Link from "next/link";
import { useEffect, useState } from "react";

export default function NotFound() {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 8 + 4,
      speed: Math.random() * 0.5 + 0.2,
      opacity: Math.random() * 0.5 + 0.3,
    }));
    setParticles(newParticles);

    const interval = setInterval(() => {
      setParticles((prev) =>
        prev.map((p) => ({
          ...p,
          y: p.y > 110 ? 0 : p.y + p.speed,
        }))
      );
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="notfound-wrapper">
      <div className="particles-bg">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="particle"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              opacity: particle.opacity,
            }}
          />
        ))}
      </div>

      <div className="main-404">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <p className="error-tag">
                <span className="glitch" data-text="Error 404">
                  Error 404
                </span>{" "}
                — Page Not Found
              </p>

              <h1 className="big-404">
                <span className="digit">4</span>
                <span className="digit">0</span>
                <span className="digit">4</span>
              </h1>

              <div className="typing-container">
                <h2 className="heading typewriter">Oops! Lost Your Way?</h2>
              </div>

              <p className="subtext">
                The page you&apos;re looking for doesn&apos;t exist or has been 
                moved. Don&apos;t worry, let&apos;s get you back on track.
              </p>

              <div className="cta-buttons d-flex gap-3 mt-4">
                <Link href="/" className="mr-4 border rounded px-3 py-2 bg-light">
                  <span>🏠</span> Back to Home
                </Link>
                <Link href="/contactUs" className="border rounded px-3 py-2 bg-light">
                  <span>💬</span> Contact Support
                </Link>
              </div>
            </div>

            <div className="col-lg-6 d-none d-md-block text-center">
              <div className="tech-visual">
                <div className="circle-tech pulse">
                  <span className="circle-inner">404</span>
                </div>
                <div className="floating-shapes">
                  <div className="shape shape-1"></div>
                  <div className="shape shape-2"></div>
                  <div className="shape shape-3"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}