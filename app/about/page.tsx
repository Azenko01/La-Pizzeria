"use client"

import Image from "next/image"
import { useLanguage } from "@/lib/language-context"

export default function AboutPage() {
  const { t } = useLanguage()

  return (
    <main className="py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            {t.about.title}
          </h1>
        </div>

        {/* Story Section */}
        <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src="/images/hero-pizza.jpg"
              alt="Our kitchen"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              {t.about.story}
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              {t.about.storyText}
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4">
              <div className="rounded-xl bg-card p-4 text-center shadow-sm">
                <div className="text-3xl font-bold text-primary">40+</div>
                <div className="mt-1 text-sm text-muted-foreground">Years</div>
              </div>
              <div className="rounded-xl bg-card p-4 text-center shadow-sm">
                <div className="text-3xl font-bold text-primary">1M+</div>
                <div className="mt-1 text-sm text-muted-foreground">Pizzas</div>
              </div>
              <div className="rounded-xl bg-card p-4 text-center shadow-sm">
                <div className="text-3xl font-bold text-primary">4.9</div>
                <div className="mt-1 text-sm text-muted-foreground">Rating</div>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mt-20">
          <h2 className="text-center text-3xl font-bold tracking-tight text-foreground">
            Our Values
          </h2>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            <div className="rounded-2xl bg-card p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-card-foreground">Quality First</h3>
              <p className="mt-3 text-muted-foreground">
                We never compromise on the quality of our ingredients. Every pizza is made with premium,
                locally-sourced produce.
              </p>
            </div>
            <div className="rounded-2xl bg-card p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-card-foreground">Traditional Recipes</h3>
              <p className="mt-3 text-muted-foreground">
                Our recipes have been passed down through three generations, preserving the authentic
                taste of Italian cuisine.
              </p>
            </div>
            <div className="rounded-2xl bg-card p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-card-foreground">Customer Love</h3>
              <p className="mt-3 text-muted-foreground">
                Every pizza is made with love and care. We treat our customers like family and
                strive to exceed expectations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
