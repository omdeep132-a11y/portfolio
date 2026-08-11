import SectionLabel from '../atoms/SectionLabel.jsx'
import ProjectRow from '../molecules/ProjectRow.jsx'

function WorkSection({ projects = [] }) {
  return (
    <section id="work" className="px-6 md:px-10 py-24 md:py-32 max-w-[1600px] mx-auto">
      <SectionLabel index="01">Selected work</SectionLabel>
      <h2 className="font-display font-bold text-3xl md:text-5xl mb-10 max-w-2xl">
        A handful of things I've shipped recently.
      </h2>
      <div>
        {projects.map((project) => (
          <ProjectRow key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}

export default WorkSection
