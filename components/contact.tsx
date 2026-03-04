"use client"

import { useState } from "react"
import { Github, Linkedin, Mail, MessageCircle, Send } from "lucide-react"

interface FormData {
  name: string
  email: string
  message: string
}

const socialLinks = [
  {
    label: "E-mail",
    href: "https://mail.google.com/mail/u/1/#inbox",
    icon: Mail,
    text: "Gabrielsscoelho2004@gmail.com",
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/5522997384221",
    icon: MessageCircle,
    text: "+55 22 997384221",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/gabriel-coelho-765315350/",
    icon: Linkedin,
  },
  {
    label: "GitHub",
    href: "https://github.com/Gb1201",
    icon: Github,
  },
]

export function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  })
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  )

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.name || !formData.email || !formData.message) return

    setStatus("sending")

    // Build mailto link as fallback
    const subject = encodeURIComponent(
      `Contato do Portfólio - ${formData.name}`
    )
    const body = encodeURIComponent(
      `Nome: ${formData.name}\nE-mail: ${formData.email}\n\nMensagem:\n${formData.message}`
    )
    window.location.href = `mailto:gabrielsscoelho2004@gmail.com?subject=${subject}&body=${body}`

    setTimeout(() => {
      setStatus("sent")
      setFormData({ name: "", email: "", message: "" })
      setTimeout(() => setStatus("idle"), 3000)
    }, 1000)
  }

  return (
    <section id="contato" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 flex items-center gap-4">
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">
            Contato
          </h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="mb-12 text-center">
          <p className="mx-auto max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg">
            Tem um projeto em mente ou quer bater um papo? Fique à vontade para
            entrar em contato. Estou sempre aberto a novas oportunidades e
            conversas.
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-2">
          {/* Social links */}
          <div>
            <h3 className="mb-6 font-mono text-sm font-semibold text-primary">
              Redes e contatos
            </h3>
            <div className="flex flex-col gap-4">
              {socialLinks.map((link) => {
                const Icon = link.icon
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 rounded-lg border border-transparent p-4 transition-all hover:border-border hover:bg-card"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">
                        {link.label}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {link.text}
                      </p>
                    </div>
                  </a>
                )
              })}
            </div>
          </div>

          {/* Contact form */}
          <div>
            <h3 className="mb-6 font-mono text-sm font-semibold text-primary">
              Envie uma mensagem
            </h3>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label
                  htmlFor="name"
                  className="mb-1.5 block text-sm font-medium text-foreground"
                >
                  Nome
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, name: e.target.value }))
                  }
                  className="w-full rounded-lg border border-border bg-input px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  placeholder="Seu nome"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-1.5 block text-sm font-medium text-foreground"
                >
                  E-mail
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, email: e.target.value }))
                  }
                  className="w-full rounded-lg border border-border bg-input px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-sm font-medium text-foreground"
                >
                  Mensagem
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      message: e.target.value,
                    }))
                  }
                  className="w-full resize-none rounded-lg border border-border bg-input px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  placeholder="Escreva sua mensagem..."
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {status === "sending" ? (
                  "Enviando..."
                ) : status === "sent" ? (
                  "Mensagem enviada!"
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Enviar mensagem
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
