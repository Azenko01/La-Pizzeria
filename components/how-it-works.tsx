"use client"

import { Pizza, ShoppingCart, Truck } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function HowItWorks() {
  const { t } = useLanguage()

  const steps = [
    {
      icon: Pizza,
      number: "1",
      title: t.howItWorks.step1.title,
      description: t.howItWorks.step1.desc,
    },
    {
      icon: ShoppingCart,
      number: "2",
      title: t.howItWorks.step2.title,
      description: t.howItWorks.step2.desc,
    },
    {
      icon: Truck,
      number: "3",
      title: t.howItWorks.step3.title,
      description: t.howItWorks.step3.desc,
    },
  ]

  return (
    <section className="bg-secondary/30 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {t.howItWorks.title}
          </h2>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative text-center"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="absolute top-12 left-1/2 hidden h-0.5 w-full bg-border md:block" />
              )}
              
              <div className="relative mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg">
                <step.icon className="h-10 w-10" />
                <span className="absolute -bottom-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-accent text-accent-foreground font-bold text-sm">
                  {step.number}
                </span>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-foreground">{step.title}</h3>
              <p className="mt-2 text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
