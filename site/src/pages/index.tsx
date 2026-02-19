import React from 'react';
import { MetaData } from 'components/MetaData';
import { ThemeSwitch } from 'components/ThemeSwitch';
import Link from 'next/link';

const Bird = () => (
  <svg
    className="bird-svg"
    viewBox="0 0 380 520"
    fill="none"
    strokeWidth="2"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {/* Head top */}
    <polygon points="195,28 160,18 148,62" style={{ animationDelay: '0s' }} />
    <polygon points="195,28 148,62 178,82" style={{ animationDelay: '0.1s' }} />
    <polygon points="195,28 178,82 218,58" style={{ animationDelay: '0.2s' }} />
    {/* Beak */}
    <polygon points="218,58 270,56 228,82" style={{ animationDelay: '0.3s' }} />
    <polygon points="218,58 228,82 178,82" style={{ animationDelay: '0.35s' }} />
    {/* Square on head */}
    <polygon points="178,32 195,28 198,46 180,50" style={{ animationDelay: '0.4s' }} />
    {/* Eye */}
    <circle cx="182" cy="52" r="7" style={{ animationDelay: '0.5s' }} />
    <circle cx="182" cy="52" r="3" style={{ animationDelay: '0.55s' }} />
    {/* Neck/upper body */}
    <polygon points="148,62 118,130 178,82" style={{ animationDelay: '0.6s' }} />
    <polygon points="178,82 118,130 195,160" style={{ animationDelay: '0.7s' }} />
    <polygon points="178,82 195,160 228,82" style={{ animationDelay: '0.8s' }} />
    <polygon points="228,82 195,160 235,125" style={{ animationDelay: '0.85s' }} />
    {/* Chest */}
    <polygon points="235,125 195,160 240,200" style={{ animationDelay: '0.95s' }} />
    {/* Mid body */}
    <polygon points="118,130 85,205 195,160" style={{ animationDelay: '1.05s' }} />
    <polygon points="195,160 85,205 155,245" style={{ animationDelay: '1.15s' }} />
    <polygon points="195,160 155,245 240,200" style={{ animationDelay: '1.25s' }} />
    {/* Tail feathers */}
    <polygon points="85,205 48,182 42,225" style={{ animationDelay: '1.35s' }} />
    <polygon points="85,205 42,225 62,260" style={{ animationDelay: '1.45s' }} />
    <polygon points="42,225 30,258 62,260" style={{ animationDelay: '1.5s' }} />
    <polygon points="85,205 62,260 105,268" style={{ animationDelay: '1.55s' }} />
    {/* Lower body */}
    <polygon points="155,245 105,268 125,310" style={{ animationDelay: '1.65s' }} />
    <polygon points="155,245 125,310 195,295" style={{ animationDelay: '1.75s' }} />
    <polygon points="155,245 195,295 240,200" style={{ animationDelay: '1.85s' }} />
    {/* Belly detail */}
    <polygon points="195,295 240,200 225,280" style={{ animationDelay: '1.9s' }} />
    {/* Leg area */}
    <polygon points="125,310 108,320 125,345" style={{ animationDelay: '2.0s' }} />
    <polygon points="195,295 125,310 168,345" style={{ animationDelay: '2.1s' }} />
    {/* Left leg */}
    <line x1="125" y1="345" x2="108" y2="415" style={{ animationDelay: '2.2s' }} />
    <line x1="108" y1="415" x2="88" y2="420" style={{ animationDelay: '2.3s' }} />
    <line x1="108" y1="415" x2="125" y2="422" style={{ animationDelay: '2.35s' }} />
    <line x1="108" y1="415" x2="105" y2="425" style={{ animationDelay: '2.4s' }} />
    {/* Right leg */}
    <line x1="168" y1="345" x2="155" y2="415" style={{ animationDelay: '2.5s' }} />
    <line x1="155" y1="415" x2="135" y2="420" style={{ animationDelay: '2.6s' }} />
    <line x1="155" y1="415" x2="172" y2="422" style={{ animationDelay: '2.65s' }} />
    <line x1="155" y1="415" x2="152" y2="425" style={{ animationDelay: '2.7s' }} />
    {/* Ground line */}
    <line x1="80" y1="425" x2="180" y2="425" strokeWidth="1.5" style={{ animationDelay: '2.8s' }} />
  </svg>
);

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
