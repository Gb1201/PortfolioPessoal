import { ExternalLink, Github } from "lucide-react"

interface Project {
  year: string
  title: string
  description: string
  technologies: string[]
  githubUrl: string
  liveUrl?: string
  image: string
}

const projects: Project[] = [
  {
    year: "2024.2",
    title: "NutriSmart",
    description:
      "Site front end para a demostração de alimentação saudável, utilizando ferramentas e controle de alimentos. grupo de trabalho com sprints bem definidas e destaque acadêmico no Trabalho interdisciplinar 2024.2",
    technologies: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2024-2-ti1-2401100-projeto-alimentacao-saudavel",
    image: "/alimentos.png?height=300&width=500",
  },
  {
    year: "2025.1",
    title: "Gerencimento de Vans",
    description:
      "Projeto interdisciplinar Full-Stack, a qual o site permite que as Vans Escolares possa gerenciar seus motoristas e passageiros com mais faclidade e eficiência",
    technologies: ["React", "TypeScript", "MySQL", "Java Spring boot", "Tailindw CSS"],
    githubUrl: "https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2025-1-ti2-3740100-gerenciamento-de-vans",
    image: "/vans.png?height=300&width=500",
  },
  {
    year: "2025.2",
    title: "Oeve RH",
    description:
      "Aplicação full-stack com foco de gerenciamento de folha de pagamento de um ou mais funcionãrios",
    technologies: ["React", "JavaScript", "Java Spring boot", "PostgreSQL"],
    githubUrl: "https://github.com/pm-puc-minas/calculo-folha-pagamento-teorica-grupo4",
    image: "/folha.png?height=300&width=500",
  },
]

export function Projects() {
  return (
    <section id="projetos" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 flex items-center gap-4">
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">
            Projetos
          </h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 top-0 h-full w-px bg-border md:left-1/2 md:-translate-x-px" />

          <div className="flex flex-col gap-16">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={`relative flex flex-col gap-6 pl-12 md:flex-row md:gap-12 md:pl-0 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-2.5 top-1 h-3 w-3 rounded-full border-2 border-primary bg-background md:left-1/2 md:-translate-x-1/2" />

                {/* Year label */}
                <div
                  className={`absolute left-12 top-0 font-mono text-xs text-primary md:static md:flex md:w-1/2 md:items-start md:pt-1 ${
                    index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                  }`}
                >
                  <span className="rounded-md bg-primary/10 px-3 py-1 font-mono text-xs font-semibold text-primary">
                    {project.year}
                  </span>
                </div>

                {/* Project card */}
                <div className="mt-6 md:mt-0 md:w-1/2">
                  <div className="group rounded-lg border border-border bg-card p-6 transition-all hover:border-primary/50 hover:bg-card/80">
                    <div className="mb-4 overflow-hidden rounded-md">
                      <img
                        src={project.image}
                        alt={`Screenshot do projeto ${project.title}`}
                        className="h-40 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>

                    <h3 className="mb-2 text-lg font-bold text-foreground">
                      {project.title}
                    </h3>
                    <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                      {project.description}
                    </p>

                    <div className="mb-4 flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full bg-primary/10 px-3 py-1 font-mono text-xs text-primary"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-4">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground transition-colors hover:text-primary"
                        aria-label={`Ver código de ${project.title} no GitHub`}
                      >
                        <Github className="h-5 w-5" />
                      </a>
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground transition-colors hover:text-primary"
                          aria-label={`Ver ${project.title} ao vivo`}
                        >
                          <ExternalLink className="h-5 w-5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
