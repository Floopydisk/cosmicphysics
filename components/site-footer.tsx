import { Github, Briefcase, Twitter, ExternalLink } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-800 bg-slate-900/50">
      <div className="container py-12 md:py-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">About</h3>
          <p className="text-sm text-slate-400 leading-relaxed">
            An interactive journey through the physics of our cosmos. Explore the fundamental forces that shape our
            universe through engaging visualizations and explanations.
          </p>
        </div>
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="space-y-2 text-sm text-slate-400">
            <li>
              <a href="/concepts/stellar-evolution" className="hover:text-white transition-colors">
                Stellar Evolution
              </a>
            </li>
            <li>
              <a href="/concepts/spectroscopy" className="hover:text-white transition-colors">
                Spectroscopy
              </a>
            </li>
            <li>
              <a href="/concepts/parallax" className="hover:text-white transition-colors">
                Parallax & Distance
              </a>
            </li>
            <li>
              <a href="/concepts/matter-energy" className="hover:text-white transition-colors">
                Matter & Energy
              </a>
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Resources</h3>
          <ul className="space-y-2 text-sm text-slate-400">
            <li>
              <a href="/learning-path" className="hover:text-white transition-colors">
                Learning Path
              </a>
            </li>
            <li>
              <a href="/concepts/stellar-processes" className="hover:text-white transition-colors">
                Stellar Processes
              </a>
            </li>
            <li>
              <a
                href="https://www.nasa.gov/solar-system/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center hover:text-white transition-colors"
              >
                Celestial Index
                <ExternalLink className="ml-1 size-3" />
              </a>
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Connect</h3>
          <div className="flex space-x-4">
            <a
              href="https://github.com/Floopydisk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
              aria-label="Github"
            >
              <Github className="size-5" />
            </a>
            <a
              href="https://x.com/lesny_io"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="size-5" />
            </a>
            <a
              href="https://ibukunodunsi.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
              aria-label="Portfolio"
            >
              <Briefcase className="size-5" />
            </a>
          </div>
          <p className="text-sm text-slate-400">Stay updated with our latest cosmic discoveries</p>
        </div>
      </div>
      <div className="border-t border-slate-800">
        <div className="container py-6 text-center text-sm text-slate-400">
          <p>© 2024 Cosmic Physics. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

