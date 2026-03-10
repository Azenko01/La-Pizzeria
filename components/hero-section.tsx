"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"

export function HeroSection() {
  const { t } = useLanguage()

  return (
    <section className="relative overflow-hidden bg-background">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-pizza.jpg"
          alt="Delicious pizza"
          fill
          className="object-cover opacity-20 dark:opacity-15"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/70" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-36">
        <div className="max-w-2xl">
          {/* Trust badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-primary text-primary" />
              ))}
            </div>
            <span>4.9/5 (500+ reviews)</span>
          </div>

          <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {t.hero.title}
          </h1>
          <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
            {t.hero.subtitle}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/menu">
              <Button size="lg" className="gap-2 text-base font-semibold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all">
                {t.hero.cta}
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
            <Link href="/menu">
              <Button size="lg" variant="outline" className="text-base bg-transparent">
                {t.cta.viewMenu}
              </Button>
            </Link>
          </div>

          {/* Quick stats */}
          <div className="mt-12 flex flex-wrap gap-8 border-t border-border pt-8">
            <div>
              <p className="text-3xl font-bold text-foreground">15k+</p>
              <p className="text-sm text-muted-foreground">Happy Customers</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-foreground">30min</p>
              <p className="text-sm text-muted-foreground">Fast Delivery</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-foreground">50+</p>
              <p className="text-sm text-muted-foreground">Menu Items</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
