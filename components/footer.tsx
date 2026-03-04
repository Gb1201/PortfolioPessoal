import { Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-12">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-6">
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/Gb1201"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-primary"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/gabriel-coelho-765315350/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-primary"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="mailto:email@gabrielsscoelho2004@gmail.com"
            className="text-muted-foreground transition-colors hover:text-primary"
            aria-label="E-mail"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>
        <p className="font-mono text-xs text-muted-foreground">
          Desenvolvido com Next.js e Tailwind CSS
        </p>
      </div>
    </footer>
  )
}
