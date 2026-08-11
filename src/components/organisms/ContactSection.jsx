import Button from '../atoms/Button.jsx'
import SectionLabel from '../atoms/SectionLabel.jsx'
import SocialLinks from '../molecules/SocialLinks.jsx'

function ContactSection({ email, socials = [] }) {
  return (
    <section id="contact" className="px-6 md:px-10 py-24 md:py-32 max-w-[1600px] mx-auto">
      <SectionLabel index="04">Contact</SectionLabel>
      <h2 className="font-display font-bold text-[11vw] md:text-[6.5vw] leading-[0.95] mb-10">
        Let's build
        <br />
        something.
      </h2>
      <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-12">
        <Button href={`mailto:${email}`}>{email}</Button>
        <SocialLinks socials={socials} />
      </div>
    </section>
  )
}

export default ContactSection
