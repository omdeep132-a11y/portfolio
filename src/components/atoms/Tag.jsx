function Tag({ children }) {
  return (
    <span className="font-mono text-xs uppercase tracking-wider text-dim border border-line px-3 py-1.5 hover:border-signal hover:text-bone transition-colors duration-300">
      {children}
    </span>
  )
}

export default Tag
