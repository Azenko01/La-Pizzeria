"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"

export function CTASection() {
  const { t } = useLanguage()

  return (
    <section className="bg-primary py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
            {t.cta.readyToOrder}
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-primary-foreground/80">
            {t.cta.readyToOrderDesc}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/menu">
              <Button 
                size="lg" 
                variant="secondary"
                className="gap-2 text-base font-semibold shadow-lg"
              >
                {t.cta.orderNow}
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button 
                size="lg" 
                variant="outline"
                className="text-base bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              >
                {t.nav.contact}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
