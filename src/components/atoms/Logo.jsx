function Logo({ name = 'KR' }) {
  return (
    <a href="#top" className="font-mono text-sm tracking-widest text-bone" data-cursor="hover">
      {'<'}
      {name}
      {'/>'}
    </a>
  )
}

export default Logo
