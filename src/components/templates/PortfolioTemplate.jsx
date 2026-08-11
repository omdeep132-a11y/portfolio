import Cursor from '../atoms/Cursor.jsx'
import GrainOverlay from '../atoms/GrainOverlay.jsx'
import Header from '../organisms/Header.jsx'
import Hero from '../organisms/Hero.jsx'
import WorkSection from '../organisms/WorkSection.jsx'
import StackSection from '../organisms/StackSection.jsx'
import AboutSection from '../organisms/AboutSection.jsx'
import ContactSection from '../organisms/ContactSection.jsx'
import Footer from '../organisms/Footer.jsx'

function PortfolioTemplate({ profile, stats, stack, projects, socials, navLinks }) {
  return (
    <div className="relative min-h-screen bg-ink text-bone">
      <GrainOverlay />
      <Cursor />
      <Header links={navLinks} resumeUrl={profile.resumeUrl} />
      <main>
        <Hero role={profile.role} location={profile.location} />
        <WorkSection projects={projects} />
        <StackSection stack={stack} />
        <AboutSection bio={profile.bio} stats={stats} />
        <ContactSection email={profile.email} socials={socials} />
      </main>
      <Footer name={profile.name} />
    </div>
  )
}

export default PortfolioTemplate
