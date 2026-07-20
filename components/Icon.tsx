import React from 'react';

/**
 * STEIL Icon — the sanctioned stroke-only icon system.
 * 24-unit grid, 2px stroke, square terminals, mitre joins, zero fills;
 * geometry runs 90°/45° only. Inherits the brand's square-corner rule.
 * Colour comes through `color` (default Ink); use Steil Blue only to signal
 * a single active/emphasis element — never as a theme.
 */
export const ICON_PATHS: Record<string, string[]> = {
  // 01 · Strategy & Growth
  'blue-ocean': ['M2 13l5-2 5 2 5-2 5 2', 'M2 18l5-2 5 2 5-2 5 2'],
  'market-expansion': ['M3 8V3h5', 'M21 8V3h-5', 'M3 16v5h5', 'M21 16v5h-5', 'M10 10h4v4h-4z'],
  'use-case-id': ['M3 3h7v7H3z', 'M14 3h7v7h-7z', 'M3 14h7v7H3z', 'M14 14h7v7h-7z', 'M16 16h3v3h-3z'],
  'positioning': ['M12 3v18', 'M3 12h18', 'M9 9h6v6H9z'],
  'pipeline': ['M3 4h18l-7 8v6l-4 2v-8z'],
  'growth': ['M3 21h18', 'M6 21v-4', 'M12 21v-9', 'M18 21v-14'],
  // 02 · Brand & Demand
  'brand-visibility': ['M2 12l10-6 10 6-10 6z', 'M9 9h6v6H9z'],
  'full-channel': ['M2 10h4v4H2z', 'M6 12h4', 'M10 12l5-6h5', 'M10 12l5 6h5'],
  'content': ['M5 3h9l5 5v13H5z', 'M14 3v5h5', 'M8 13h8', 'M8 17h8'],
  'ai-answer': ['M4 6h16v9H4z', 'M8 15v3l3-3', 'M7 10h10', 'M7 12h6'],
  'retention': ['M6 6h9v5', 'M12 8l3 3 3-3', 'M18 18H9v-5', 'M12 16l-3-3-3 3'],
  'audience': ['M4 9h4v4H4z', 'M10 9h4v4h-4z', 'M16 9h4v4h-4z', 'M6 16h12'],
  // 03 · The Partnership
  'consultation': ['M3 8h5v8H3z', 'M16 8h5v8h-5z', 'M8 12h8'],
  'advisory': ['M4 4h16v16H4z', 'M8 16l8-8', 'M16 8v4', 'M16 8h-4'],
  'reporting': ['M4 4h16v16H4z', 'M8 16v-3', 'M12 16v-6', 'M16 16v-8'],
  'integration': ['M4 4h9v9H4z', 'M11 11h9v9h-9z'],
  'velocity': ['M5 6l6 6-6 6', 'M13 6l6 6-6 6'],
  'alignment': ['M3 5l9 7', 'M3 19l9-7', 'M12 12h9'],
};

export type IconName = keyof typeof ICON_PATHS;

export const ICON_NAMES = Object.keys(ICON_PATHS) as IconName[];

export interface IconProps {
  /** Which icon to render. */
  name: IconName;
  /** Square size in px. Default 24. */
  size?: number;
  /** Stroke colour. Default var(--ink). Use var(--steil-blue) sparingly for emphasis. */
  color?: string;
  /** Stroke weight in px. Default 2. Keep 1.25–3. */
  strokeWidth?: number;
  /** Accessible label. Omit for decorative icons (rendered aria-hidden). */
  title?: string;
  style?: React.CSSProperties;
}

export function Icon({
  name,
  size = 24,
  color = 'var(--ink)',
  strokeWidth = 2,
  title,
  style,
  ...rest
}: IconProps) {
  const paths = ICON_PATHS[name];
  if (!paths) {
    if (typeof console !== 'undefined') console.warn(`[STEIL Icon] unknown name "${name}"`);
    return null;
  }
  const labelled = title != null;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="square"
      strokeLinejoin="miter"
      role={labelled ? 'img' : 'presentation'}
      aria-label={labelled ? title : undefined}
      aria-hidden={labelled ? undefined : true}
      style={{ display: 'block', flex: 'none', ...style }}
      {...rest}
    >
      {labelled ? <title>{title}</title> : null}
      {paths.map((d, i) => (
        <path key={i} d={d} />
      ))}
    </svg>
  );
}

export default Icon;
