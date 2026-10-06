/** SDK Reference sidebar badge for a declaration kind (frontmatter `icon`, from scripts/sdk-docs) */
const KINDS: Record<string, { letter: string; color: string }> = {
  module: { letter: 'M', color: '#6b7280' },
  namespace: { letter: 'N', color: '#6b7280' },
  class: { letter: 'C', color: '#2563eb' },
  interface: { letter: 'I', color: '#059669' },
  function: { letter: 'F', color: '#7c3aed' },
  type: { letter: 'T', color: '#d97706' },
  variable: { letter: 'V', color: '#db2777' },
  enum: { letter: 'E', color: '#0891b2' },
};

export function isSdkKind(kind: string) {
  return kind in KINDS;
}

export function SdkKindIcon({ kind }: { kind: string }) {
  const { letter, color } = KINDS[kind];
  return (
    <span
      aria-hidden
      data-kind={kind}
      className="inline-flex size-4 shrink-0 items-center justify-center rounded-[4px] text-[10px] leading-none font-semibold"
      style={{ color, backgroundColor: `color-mix(in srgb, ${color} 14%, transparent)` }}
    >
      {letter}
    </span>
  );
}
