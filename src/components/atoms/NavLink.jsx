function NavLink({ href, children }) {
  return (
    <a
      href={href}
      className="group relative font-mono text-xs uppercase tracking-widest text-dim hover:text-bone transition-colors duration-300"
      data-cursor="hover"
    >
      {children}
      <span className="absolute -bottom-1 left-0 h-px w-0 bg-signal transition-all duration-300 group-hover:w-full" />
    </a>
  )
}

export default NavLink
