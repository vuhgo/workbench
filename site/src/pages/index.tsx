import React, { useEffect, useRef } from 'react';
import { MetaData } from 'components/MetaData';
import { ThemeSwitch } from 'components/ThemeSwitch';
import Link from 'next/link';

const Bird = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetch('/bird.svg')
      .then((res) => res.text())
      .then((svgText) => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(svgText, 'image/svg+xml');
        const svg = doc.querySelector('svg');
        if (!svg || !containerRef.current) return;

        svg.setAttribute('class', 'bird-svg');
        svg.setAttribute('aria-hidden', 'true');

        const paths = svg.querySelectorAll('path');
        // Remove background rectangle (first path fills the entire canvas)
        if (paths.length > 0) paths[0].remove();

        // Convert remaining paths from fill to stroke for draw animation
        svg.querySelectorAll('path').forEach((path, i) => {
          const length = path.getTotalLength();
          path.setAttribute('stroke', 'currentColor');
          path.setAttribute('fill', 'none');
          path.setAttribute('stroke-width', '1.5');
          path.style.strokeDasharray = `${length}`;
          path.style.strokeDashoffset = `${length}`;
          path.style.animation = `draw 2s ease forwards ${i * 0.15}s`;
        });

        containerRef.current.appendChild(svg);
      });
  }, []);

  return <div ref={containerRef} />;
};

const Index = () => {
  return (
    <>
      <MetaData title="Hugivar" />
      <div className="landing">
        <Bird />
        <div className="landing-content">
          <h1 className="landing-title">Hugivar</h1>
          <p className="landing-subtitle">
            Personal philosophy and thoughts on engineering
          </p>
          <div className="landing-links">
            <Link href="https://compile.substack.com/" passHref>
              <span className="landing-link">Journal</span>
            </Link>
            <Link href="https://github.com/hugivar" passHref>
              <span className="landing-link">GitHub</span>
            </Link>
          </div>
        </div>
        <div className="landing-theme-toggle">
          <ThemeSwitch />
        </div>
      </div>
    </>
  );
};

export default Index;
