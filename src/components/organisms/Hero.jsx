import { motion } from 'framer-motion'
import MarqueeText from '../atoms/MarqueeText.jsx'

const stackWords = ['MongoDB', 'Express', 'React', 'Node.js', 'REST', 'GraphQL']

const lineVariants = {
  hidden: { y: '100%' },
  visible: (i) => ({
    y: 0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 * i },
  }),
}

function Hero({ role, location }) {
  return (
    <section className="relative pt-40 md:pt-48 pb-16 px-6 md:px-10 max-w-[1600px] mx-auto">
      <div className="overflow-hidden">
        <motion.div custom={0} variants={lineVariants} initial="hidden" animate="visible">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-signal block mb-6">
            {location}
          </span>
        </motion.div>
      </div>

      <h1 className="font-display font-bold text-[13vw] leading-[0.92] md:text-[8.5vw] tracking-tight">
        {['Full', 'Stack', 'Developer.'].map((word, i) => (
          <span key={word} className="block overflow-hidden">
            <motion.span
              custom={i}
              variants={lineVariants}
              initial="hidden"
              animate="visible"
              className={`block ${i === 2 ? 'text-dim' : 'text-bone'}`}
            >
              {word}
            </motion.span>
          </span>
        ))}
      </h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="max-w-md mt-8 font-body text-dim text-base md:text-lg"
      >
        {role} — I design, build and ship products across the MongoDB, Express, React and Node stack.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="mt-14"
      >
        <MarqueeText items={stackWords} />
      </motion.div>
    </section>
  )
}

export default Hero
