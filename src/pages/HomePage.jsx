import PortfolioTemplate from '../components/templates/PortfolioTemplate.jsx'
import { profile, stats, stack, projects, socials, navLinks } from '../data/content.js'

function HomePage() {
  return (
    <PortfolioTemplate
      profile={profile}
      stats={stats}
      stack={stack}
      projects={projects}
      socials={socials}
      navLinks={navLinks}
    />
  )
}

export default HomePage
