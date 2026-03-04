"use client"

import { useState } from "react"

const content = {
  pt: {
    title: "Sobre Mim",
    paragraphs: [
      "Sou estudante de Engenharia de Software na PUC Minas, com foco em desenvolvimento back-end e grande interesse na área de segurança da informação. Tenho experiência com Java Spring Boot...aprendendo Kotlin para o desenvolvimento mobile, aplicando conceitos de Programação Orientada a Objetos no desenvolvimento de sistemas acadêmicos, incluindo um projeto completo para gerenciamento de vans.",
      "Busco escrever código limpo, organizado e orientado a boas práticas, sempre aplicando princípios como SOLID e padrões de projeto quando necessário. Também tenho experiência com metodologias ágeis, especialmente Scrum, atuando em equipe com divisão de tarefas e sprints bem definidas.",
      "Sou movido por aprendizado contínuo, disciplina e evolução constante, tanto técnica quanto pessoal.",
    ],
    skills: [
      "Java / Spring boot",
      "React",
      "Kotlin",
      "Metodologias ágeis",
      "PostgreSQL/ MySQL ",
      "Git / GitHub",
      "REST APIs",
    ],
    skillsTitle: "Tecnologias",
  },
  en: {
    title: "About Me",
    paragraphs: [
      "I am a Software Engineering student at PUC Minas, focusing on back-end development and with a strong interest in information security. I have experience with Java Spring Boot...learning Kotlin for mobile development, applying Object-Oriented Programming concepts to the development of academic systems, including a complete van management project.",
      "I strive to write clean, organized code that adheres to best practices, always applying principles such as SOLID and design patterns when necessary. I also have experience with agile methodologies, especially Scrum, working in teams with well-defined task divisions and sprints.",
      "I am driven by continuous learning, discipline, and constant evolution, both technically and personally.",
    ],
    skills: [
      "Java / Spring boot",
      "React",
      "Kotlin",
      "Metodologias ágeis",
      "PostgreSQL/ MySQL ",
      "Git / GitHub",
      "REST APIs",
    ],
    skillsTitle: "Technologies",
  },
}

export function About() {
  const [lang, setLang] = useState<"pt" | "en">("pt")
  const t = content[lang]

  return (
    <section id="sobre" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 flex items-center gap-4">
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">
            {t.title}
          </h2>
          <div className="h-px flex-1 bg-border" />
          <div className="flex gap-2">
            <button
              onClick={() => setLang("pt")}
              className={`rounded-md px-3 py-1 font-mono text-xs transition-all ${
                lang === "pt"
                  ? "bg-primary text-primary-foreground"
                  : "border border-border text-muted-foreground hover:text-foreground"
              }`}
              aria-label="Português"
            >
              PT
            </button>
            <button
              onClick={() => setLang("en")}
              className={`rounded-md px-3 py-1 font-mono text-xs transition-all ${
                lang === "en"
                  ? "bg-primary text-primary-foreground"
                  : "border border-border text-muted-foreground hover:text-foreground"
              }`}
              aria-label="English"
            >
              EN
            </button>
          </div>
        </div>

        <div className="grid gap-12 md:grid-cols-3">
          <div className="flex flex-col gap-4 md:col-span-2">
            {t.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="text-base leading-relaxed text-muted-foreground"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div>
            <h3 className="mb-4 font-mono text-sm font-semibold text-primary">
              {t.skillsTitle}
            </h3>
            <ul className="grid grid-cols-1 gap-2">
              {t.skills.map((skill) => (
                <li
                  key={skill}
                  className="flex items-center gap-2 font-mono text-sm text-muted-foreground"
                >
                  <span className="text-primary">{">"}</span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
