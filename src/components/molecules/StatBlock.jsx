function StatBlock({ value, label }) {
  return (
    <div className="border-t border-line pt-4">
      <div className="font-display font-bold text-4xl md:text-5xl text-bone">{value}</div>
      <div className="font-mono text-xs uppercase tracking-wider text-dim mt-2">{label}</div>
    </div>
  )
}

export default StatBlock
