function SectionLabel({ index, children }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      {index && <span className="font-mono text-xs text-signal">{index}</span>}
      <span className="font-mono text-xs uppercase tracking-[0.3em] text-dim">{children}</span>
    </div>
  )
}

export default SectionLabel
