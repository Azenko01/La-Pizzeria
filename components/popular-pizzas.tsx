"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PizzaCard } from "@/components/pizza-card"
import { ProductModal } from "@/components/product-modal"
import { useLanguage } from "@/lib/language-context"
import { pizzas, type Pizza } from "@/lib/pizza-data"

export function PopularPizzas() {
  const { t, language } = useLanguage()
  const popularPizzas = pizzas.filter((pizza) => pizza.popular).slice(0, 4)
  
  const [selectedPizza, setSelectedPizza] = useState<Pizza | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleViewDetails = (pizza: Pizza) => {
    setSelectedPizza(pizza)
    setIsModalOpen(true)
  }

  return (
    <section className="py-16 sm:py-24 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {language === "en" ? "Most Popular" : "Meest Populair"}
            </h2>
            <p className="mt-2 text-muted-foreground">{t.menu.subtitle}</p>
          </div>
          <Link href="/menu">
            <Button variant="outline" className="gap-2 bg-transparent">
              {language === "en" ? "View Full Menu" : "Bekijk Volledig Menu"}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {popularPizzas.map((pizza) => (
            <PizzaCard 
              key={pizza.id} 
              pizza={pizza} 
              onViewDetails={handleViewDetails}
            />
          ))}
        </div>

        {/* CTA after menu */}
        <div className="mt-12 text-center">
          <Link href="/menu">
            <Button size="lg" className="gap-2 text-base font-semibold shadow-lg shadow-primary/25">
              {t.cta.orderNow}
              <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>

      <ProductModal
        product={selectedPizza}
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false)
          setSelectedPizza(null)
        }}
        type="pizza"
      />
    </section>
  )
}
