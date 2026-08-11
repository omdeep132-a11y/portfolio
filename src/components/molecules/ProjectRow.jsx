import { useState } from 'react'
import { motion } from 'framer-motion'
import Tag from '../atoms/Tag.jsx'

function ProjectRow({ project }) {
  const [hovered, setHovered] = useState(false)
  const [coords, setCoords] = useState({ x: 0, y: 0 })

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setCoords({ x: e.clientX - rect.left, y: e.clientY - rect.top })
  }

  return (
    <a
      href={project.url}
      data-cursor="hover"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={handleMove}
      className="group relative block border-t border-line py-8 md:py-10 last:border-b overflow-hidden"
    >
      <div className="flex items-center justify-between gap-6 px-1">
        <div className="flex items-center gap-6 md:gap-10 min-w-0">
          <span className="font-mono text-sm text-signal shrink-0">{project.id}</span>
          <h3 className="font-display font-bold text-2xl md:text-4xl lg:text-5xl text-bone truncate group-hover:text-acid transition-colors duration-300">
            {project.title}
          </h3>
        </div>
        <div className="hidden md:flex items-center gap-8 shrink-0">
          <span className="font-mono text-xs uppercase tracking-wider text-dim">{project.category}</span>
          <span className="font-mono text-xs text-dim">{project.year}</span>
        </div>
      </div>

      <div className="hidden md:flex gap-2 mt-3 px-1 pl-[4.75rem]">
        {project.tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={hovered ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.85 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
        className="pointer-events-none absolute z-10 w-56 h-36 md:w-72 md:h-44 -translate-x-1/2 -translate-y-1/2 overflow-hidden hidden md:block"
        style={{ left: coords.x, top: coords.y }}
      >
        <img src={project.image} alt="" className="w-full h-full object-cover" />
      </motion.div>
    </a>
  )
}

export default ProjectRow
