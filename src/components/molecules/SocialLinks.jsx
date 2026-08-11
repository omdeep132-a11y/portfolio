import IconLink from '../atoms/IconLink.jsx'

function SocialLinks({ socials = [] }) {
  return (
    <div className="flex items-center gap-3">
      {socials.map((s) => (
        <IconLink key={s.label} label={s.label} href={s.href} />
      ))}
    </div>
  )
}

export default SocialLinks
