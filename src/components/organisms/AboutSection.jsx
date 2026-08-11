import SectionLabel from '../atoms/SectionLabel.jsx'
import StatBlock from '../molecules/StatBlock.jsx'

function AboutSection({ bio, stats = [] }) {
  return (
    <section id="about" className="px-6 md:px-10 py-24 md:py-32 max-w-[1600px] mx-auto">
      <SectionLabel index="03">About</SectionLabel>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
        <h2 className="font-display font-bold text-3xl md:text-5xl leading-tight">
          I turn product specs into software that holds up in production.
        </h2>
        <p className="font-body text-dim text-base md:text-lg leading-relaxed">{bio}</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 mt-16">
        {stats.map((stat) => (
          <StatBlock key={stat.label} value={stat.value} label={stat.label} />
        ))}
      </div>
    </section>
  )
}

export default AboutSection
