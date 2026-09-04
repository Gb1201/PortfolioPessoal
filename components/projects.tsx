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
  {
    year: "2026.1",
    title: "PetCare",
    description:
      "Aplicativo móvel de prontuário digital voltado para ONGs de proteção animal. Centraliza informações de saúde, cuidados e histórico dos animais resgatados em uma única plataforma digital, substituindo o controle manual feito em papéis, planilhas e mensagens. Repositório privado.",
    technologies: ["React Native"],
    githubUrl: "https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2026-1-ti4-3170100-petcare",
    image: "/petcare.png?height=300&width=500",
  },
  {
    year: "2025.1",
    title: "Room Booking System",
    description:
      "Sistema para gerir reservas de salas de reunião na Xulambs Inc., otimizando a organização e utilização dos espaços. Controla salas considerando capacidade, recursos disponíveis e horários, com verificação de disponibilidade para evitar conflitos de agendamento. Permite a gestão de clientes particulares e empresariais, com concessão de descontos a clientes empresariais, e calcula o custo de utilização da sala com base no momento da reserva. Repositório privado.",
    technologies: ["Java"],
    githubUrl: "https://github.com/pucmg-aulas/roombookings-g1-noite-projectrentaroom",
    image: "/roombooking.png?height=300&width=500",
  },
  {
    year: "2026.1",
    title: "Sistema de Aluguel de Automóveis",
    description:
      "Sistema web para apoio à gestão de aluguéis de automóveis, permitindo efetuar, cancelar e modificar pedidos através da Internet. Contempla dois perfis de usuário: clientes (usuários individuais) e agentes (empresas e bancos), cada um com permissões distintas para interação com os pedidos de aluguel.",
    technologies: ["Java"],
    githubUrl: "https://github.com/Gb1201/SistemaAluguel",
    image: "/aluguel.png?height=300&width=500",
  },
  {
    year: "2026.1",
    title: "CoinClass - Sistema de Moeda Estudantil",
    description:
      "Plataforma web desenvolvida para gerenciar um sistema de mérito acadêmico baseado em moedas virtuais. Permite que alunos acumulem moedas por desempenho e possam trocá-las por benefícios oferecidos por empresas parceiras.",
    technologies: ["Java"],
    githubUrl: "https://github.com/Gb1201/SistemaMoedaEstudantil",
    image: "/coinclass.png?height=300&width=500",
  },
  {
    year: "2026.1",
    title: "Site ER - 3ª Igreja Batista de Cabo Frio",
    description:
      "Site institucional da organização Missionária da Terceira Igreja Batista em Cabo Frio.",
    technologies: ["Next.js", "React"],
    githubUrl: "https://github.com/Gb1201/site_er",
    liveUrl: "https://site-er.vercel.app/",
    image: "/siteer.png?height=300&width=500",
  },
  {
    year: "2026.1",
    title: "Bolão do Flamengo",
    description:
      "Sistema de bolão para gerenciar os palpites dos jogos do Flamengo.",
    technologies: ["JavaScript"],
    githubUrl: "https://github.com/Gb1201/deploy_frontend",
    image: "/bolao.png?height=300&width=500",
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