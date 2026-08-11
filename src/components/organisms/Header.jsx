import { useEffect, useState } from 'react'
import NavBar from '../molecules/NavBar.jsx'

function Header({ links, resumeUrl }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      id="top"
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-ink/90 backdrop-blur-sm border-b border-line' : ''
      }`}
    >
      <NavBar links={links} resumeUrl={resumeUrl} />
    </header>
  )
}

export default Header
