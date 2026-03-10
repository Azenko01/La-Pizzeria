"use client"

import { Leaf, Flame, Truck } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function FeaturesSection() {
  const { t } = useLanguage()

  const features = [
    {
      icon: Leaf,
      title: t.features.fresh.title,
      description: t.features.fresh.desc,
      color: "text-green-600 bg-green-100 dark:bg-green-900/30",
    },
    {
      icon: Flame,
      title: t.features.hot.title,
      description: t.features.hot.desc,
      color: "text-orange-600 bg-orange-100 dark:bg-orange-900/30",
    },
    {
      icon: Truck,
      title: t.features.fast.title,
      description: t.features.fast.desc,
      color: "text-blue-600 bg-blue-100 dark:bg-blue-900/30",
    },
  ]

  return (
    <section className="bg-secondary/30 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {t.features.title}
          </h2>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-2xl bg-card p-8 text-center shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className={`mx-auto flex h-16 w-16 items-center justify-center rounded-full ${feature.color} transition-transform group-hover:scale-110`}>
                <feature.icon className="h-8 w-8" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-card-foreground">{feature.title}</h3>
              <p className="mt-3 text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
