// Past engagements banner. Swap or extend NAMES freely. Duplicated track = seamless loop.
const NAMES = ['HiLabs', 'Powerfleet', 'Derive Systems'];

export default function Marquee() {
  const track = (ariaHidden: boolean) => (
    <div className="marquee-track" aria-hidden={ariaHidden}>
      {NAMES.concat(NAMES).map((n, i) => (
        <span key={i}>
          <em>/</em>
          {n}
        </span>
      ))}
    </div>
  );
  return (
    <div className="marquee-band">
      <div className="marquee-label">
        <span className="kicker quiet" style={{ marginBottom: 0 }}>
          Past Engagements
        </span>
      </div>
      <div className="marquee">
        {track(false)}
        {track(true)}
      </div>
    </div>
  );
}
