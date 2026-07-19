export default function GradeRule() {
  // The Grade as page divider: horizontal hairline that kicks up at 2:1, once.
  return (
    <div className="grade-rule" aria-hidden="true">
      <svg viewBox="0 0 1000 40" preserveAspectRatio="xMinYMax slice">
        <path
          d="M0 39.5 H900 M900 39.5 L919.5 .5 H1000"
          stroke="#2333E8"
          strokeWidth="1.5"
          fill="none"
        />
      </svg>
    </div>
  );
}
