import Logo from '../atoms/Logo.jsx'
import NavLink from '../atoms/NavLink.jsx'
import Button from '../atoms/Button.jsx'

function NavBar({ links = [], resumeUrl = '#' }) {
  return (
    <div className="flex items-center justify-between px-6 md:px-10 py-5 max-w-[1600px] mx-auto">
      <Logo />
      <nav className="hidden md:flex items-center gap-10">
        {links.map((link) => (
          <NavLink key={link.href} href={link.href}>
            {link.label}
          </NavLink>
        ))}
      </nav>
      <Button href={resumeUrl} variant="ghost" className="!py-2.5 !px-4 hidden sm:inline-flex">
        Resume
      </Button>
    </div>
  )
}

export default NavBar
