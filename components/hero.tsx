import { Github, Linkedin, Mail } from "lucide-react"

export function Hero() {
  return (
    <section className="flex min-h-screen items-center justify-center px-6">
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-4 font-mono text-sm text-primary">
          Olá, meu nome é
        </p>
        <h1 className="mb-4 text-5xl font-bold tracking-tight text-foreground md:text-7xl text-balance">
          Gabriel Santos
        </h1>
        <h2 className="mb-6 text-3xl font-bold text-muted-foreground md:text-5xl text-balance">
          Dev Back-End
        </h2>
        <p className="mx-auto mb-10 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
          Construindo sistemas para melhor experiência do usuário e gerar valor ao negócio
        </p>

        <div className="flex items-center justify-center gap-6">
          <a
            href="https://github.com/Gb1201"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-primary"
            aria-label="GitHub"
          >
            <Github className="h-6 w-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/gabriel-coelho-765315350/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-primary"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a
            href="https://mail.google.com/mail/u/1/#inbox"
            className="text-muted-foreground transition-colors hover:text-primary"
            aria-label="E-mail"
          >
            <Mail className="h-6 w-6" />
          </a>
        </div>

        <div className="mt-12">
          <a
            href="#sobre"
            className="inline-block rounded-lg border border-primary px-8 py-3 font-mono text-sm text-primary transition-all hover:bg-primary/10"
          >
            Conheça meu trabalho
          </a>
        </div>
      </div>
    </section>
  )
}
