// In-brand hero graphic: a revenue line that flattens, then breaks upward at
// the Grade (2:1). Quarters on the axis keep it feeling like a real chart.
export default function HeroChart() {
  return (
    <div className="hero-chart" aria-hidden="true">
      <svg viewBox="0 0 440 320" xmlns="http://www.w3.org/2000/svg">
        {/* gridlines */}
        {[60, 120, 180, 240].map((y) => (
          <line key={y} x1="0" x2="440" y1={y} y2={y} stroke="rgba(250,250,247,0.12)" strokeWidth="1" />
        ))}
        {/* the stalled line */}
        <path
          className="draw-flat"
          d="M0 268 L60 244 L110 226 L160 218 L210 214 L260 213 L300 212"
          fill="none"
          stroke="rgba(250,250,247,0.55)"
          strokeWidth="2.5"
        />
        {/* the grade break — 2:1 */}
        <path className="draw-grade" d="M300 212 L385 42" fill="none" stroke="#4C5CFF" strokeWidth="3.5" />
        <circle className="grade-dot" cx="300" cy="212" r="4.5" fill="#4C5CFF" />
        {/* axis */}
        <line x1="0" x2="440" y1="300" y2="300" stroke="rgba(250,250,247,0.35)" strokeWidth="1" />
        {['Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6'].map((q, i) => (
          <text
            key={q}
            x={16 + i * 72}
            y="317"
            fill="rgba(250,250,247,0.45)"
            fontFamily="var(--font-mono), monospace"
            fontSize="11"
            letterSpacing="1"
          >
            {q}
          </text>
        ))}
        <text className="grade-label" x="308" y="200" fill="#7C89F5" fontFamily="var(--font-mono), monospace" fontSize="11" letterSpacing="1.5">
          THE GRADE
        </text>
      </svg>
    </div>
  );
}
