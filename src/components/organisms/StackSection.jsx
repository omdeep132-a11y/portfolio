import SectionLabel from '../atoms/SectionLabel.jsx'
import StackGroup from '../molecules/StackGroup.jsx'

function StackSection({ stack = [] }) {
  return (
    <section id="stack" className="px-6 md:px-10 py-24 md:py-32 max-w-[1600px] mx-auto">
      <SectionLabel index="02">Tools of the trade</SectionLabel>
      <h2 className="font-display font-bold text-3xl md:text-5xl mb-12 max-w-2xl">
        The stack behind the work.
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {stack.map((group) => (
          <StackGroup key={group.category} category={group.category} items={group.items} />
        ))}
      </div>
    </section>
  )
}

export default StackSection
