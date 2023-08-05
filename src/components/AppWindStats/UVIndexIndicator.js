import React from 'react';
import './UVIndexIndicator.scss';

function UVIndexIndicator({ uvIndex }) {
  const progressValue = Math.min(Math.max(uvIndex, 0), 10);
  const progressName = getProgressName(uvIndex);

  const gradientColors = [
    '#FF0000',
    '#FF4500',
    '#FFA500',
    '#FFFF00',
    '#ADFF2F',
    '#32CD32',
    '#008000',
    '#00FFFF',
    '#1E90FF',
    '#0000FF',
  ];

  const linearGradient = `linear-gradient(to right, ${gradientColors
    .map((color, index) => `${color} ${(index / (gradientColors.length - 1)) * 100}%`)
    .join(', ')})`;

  return (
    <div className="uv-index-indicator">
      <svg viewBox="0 0 100 100" transform="rotate(-90)">
        <path
          className="progress-background"
          d="M 50 5 A 45 45 0 1 1 50 95"
          fill="none"
          stroke="#c4e2ff"
          strokeWidth="10"
          strokeLinecap="round"
        />
        <path
          className="progress-line"
          d={`M 50 5 A 45 45 0 ${progressValue > 5 ? 1 : 0} 1 ${
            50 + 45 * 0.8 * Math.cos((progressValue * 18 + 90) * (Math.PI / 180))
          } ${50 + 45 * 0.8 * Math.sin((progressValue * 18 + 90) * (Math.PI / 180))}
          `}
          fill="none"
          stroke={linearGradient}
          strokeWidth="10"
          strokeLinecap="round"
        />
        {/* Исправляем ориентацию текста */}
        <text
          x="50"
          y="50"
          className="progress-text"
          textAnchor="middle"
          dominantBaseline="central"
          
        >
          {progressName}
        </text>
      </svg>
    </div>
  );
}

function getProgressName(uvIndex) {
  if (uvIndex < 3) {
    return 'Low';
  } else if (uvIndex < 6) {
    return 'Moderate';
  } else if (uvIndex < 8) {
    return 'High';
  } else if (uvIndex < 11) {
    return 'Very High';
  } else {
    return 'Extreme';
  }
}

export default UVIndexIndicator;
