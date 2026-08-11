import Tag from '../atoms/Tag.jsx'

function StackGroup({ category, items = [] }) {
  return (
    <div className="border-t border-line pt-6">
      <h3 className="font-mono text-xs uppercase tracking-[0.3em] text-signal mb-4">{category}</h3>
      <div className="flex flex-wrap gap-2.5">
        {items.map((item) => (
          <Tag key={item}>{item}</Tag>
        ))}
      </div>
    </div>
  )
}

export default StackGroup
