import Head from "next/head";
import { Github, Linkedin } from "lucide-react";

export default function ComingSoon() {
  return (
    <>
      <Head>
        <title>marcelocruz.dev | Desenvolvedor Web</title>
        <meta
          name="description"
          content="Marcelo Cruz - Desenvolvedor Web especializado em PHP, Laravel, criação de sites e landing pages."
        />
        <meta
          name="keywords"
          content="desenvolvedor web, PHP, Laravel, landing page, criação de sites, freelancer, marcelocruz.dev"
        />
        <meta name="author" content="Marcelo Cruz" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="color-scheme" content="light dark" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="marcelocruz.dev | Desenvolvedor Web"
        />
        <meta
          property="og:description"
          content="Desenvolvedor Web especializado em PHP, Laravel, criação de sites e landing pages."
        />
        <meta property="og:url" content="https://marcelocruz.dev" />
        <meta property="og:site_name" content="marcelocruz.dev" />
        <meta property="og:locale" content="pt_BR" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content="marcelocruz.dev | Desenvolvedor Web"
        />
        <meta
          name="twitter:description"
          content="Desenvolvedor Web especializado em PHP, Laravel, criação de sites e landing pages."
        />

        {/* GEO */}
        <meta name="geo.region" content="BR" />
        <meta name="geo.placename" content="Brasil" />

        {/* Canonical */}
        <link rel="canonical" href="https://marcelocruz.dev" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Marcelo Cruz",
              url: "https://marcelocruz.dev",
              jobTitle: "Desenvolvedor Web",
              knowsAbout: [
                "PHP",
                "Laravel",
                "Landing Pages",
                "Web Development",
              ],
              sameAs: [
                "https://www.linkedin.com/in/marcelocruzdev",
                "https://github.com/mfugissecruz",
              ],
            }),
          }}
        />
      </Head>

      <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 font-body flex flex-col items-center justify-between px-6 py-12 selection:bg-neutral-200 dark:selection:bg-neutral-700 relative overflow-hidden">
        {/* Spacer */}
        <div />

        {/* Main Content */}
        <main className="flex flex-col items-center gap-8 text-center relative z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold tracking-tight">
            marcelocruz.dev
          </h1>

          <p className="text-lg sm:text-xl text-neutral-500 dark:text-neutral-400 font-light tracking-wide">
            Em breve
            <span className="inline-flex w-[1.5em]">
              <span className="animate-dot1">.</span>
              <span className="animate-dot2">.</span>
              <span className="animate-dot3">.</span>
            </span>
          </p>

          {/* Social Links */}
          <nav
            aria-label="Redes sociais"
            className="flex items-center gap-6 mt-4"
          >
            <a
              href="https://www.linkedin.com/in/marcelocruzdev"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-neutral-400 dark:text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors duration-200"
            >
              <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a
              href="https://github.com/mfugissecruz"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-neutral-400 dark:text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors duration-200"
            >
              <Github className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
          </nav>
        </main>

        {/* Footer */}
        <footer className="text-center text-neutral-400 dark:text-neutral-600 text-xs sm:text-sm relative z-10">
          <p className="italic">Soli Deo Gloria</p>
          <p className="mt-1">
            {new Date().getFullYear()} &copy; marcelocruz.dev
          </p>
        </footer>
      </div>

      <style>{`
        @keyframes dot {
          0%, 20% { opacity: 0; }
          40%, 100% { opacity: 1; }
        }
        .animate-dot1 { animation: dot 1.4s infinite; animation-delay: 0s; }
        .animate-dot2 { animation: dot 1.4s infinite; animation-delay: 0.2s; }
        .animate-dot3 { animation: dot 1.4s infinite; animation-delay: 0.4s; }
      `}</style>
    </>
  );
}
