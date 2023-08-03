import React from 'react';
import './CircleProgressBar.scss';

function CircleProgressBar({ progressPercent }) {
  const progressValue = Math.min(Math.max(progressPercent, 0), 100); // Ensure progress value is within 0 to 100
  let progressName = progressPercent < 35 ? 'Low' : progressPercent < 70 ? 'Middle' : 'High'
  
  return (
    <div className="progress-bar">
      <div className="html">
        <svg viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="45" />
          <path
            className="progress-line"
            d={`M50 5 A45 45 0 ${progressValue > 50 ? 1 : 0} 1 ${
              50 + 45 * Math.cos((progressValue * 3.6 - 90) * (Math.PI / 180))
            } ${50 + 45 * Math.sin((progressValue * 3.6 - 90) * (Math.PI / 180))}
            `}
          />
        </svg>
        <div className="progress-text">{progressName}</div>
      </div>
    </div>
  );
}

export default CircleProgressBar;
