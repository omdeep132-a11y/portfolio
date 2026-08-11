function Footer({ name }) {
  return (
    <footer className="border-t border-line px-6 md:px-10 py-8 max-w-[1600px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <span className="font-mono text-xs text-dim">© {new Date().getFullYear()} {name}. All rights reserved.</span>
      <a href="#top" data-cursor="hover" className="font-mono text-xs uppercase tracking-widest text-dim hover:text-bone transition-colors duration-300">
        Back to top ↑
      </a>
    </footer>
  )
}

export default Footer
