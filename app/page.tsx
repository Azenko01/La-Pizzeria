"use client"

import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { HowItWorks } from "@/components/how-it-works"
import { PopularPizzas } from "@/components/popular-pizzas"
import { ReviewsSection } from "@/components/reviews-section"
import { CTASection } from "@/components/cta-section"

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <FeaturesSection />
      <PopularPizzas />
      <HowItWorks />
      <ReviewsSection />
      <CTASection />
    </main>
  )
}
