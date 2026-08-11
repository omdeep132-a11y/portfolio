function MarqueeText({ items = [], separator = '/' }) {
  const doubled = [...items, ...items]

  return (
    <div className="overflow-hidden border-y border-line py-4 whitespace-nowrap">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="font-mono text-sm uppercase tracking-widest text-dim px-6 flex-shrink-0"
          >
            {item}
            <span className="text-signal ml-6">{separator}</span>
          </span>
        ))}
      </div>
    </div>
  )
}

export default MarqueeText
