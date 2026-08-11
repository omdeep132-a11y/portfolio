function Button({ children, href, variant = 'primary', onClick, className = '' }) {
  const base =
    'inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest px-6 py-3.5 transition-colors duration-300'
  const variants = {
    primary: 'bg-signal text-ink hover:bg-acid',
    ghost: 'border border-line text-bone hover:border-bone',
  }

  const classes = `${base} ${variants[variant]} ${className}`

  if (href) {
    return (
      <a href={href} className={classes} data-cursor="hover">
        {children}
      </a>
    )
  }

  return (
    <button onClick={onClick} className={classes} data-cursor="hover">
      {children}
    </button>
  )
}

export default Button
