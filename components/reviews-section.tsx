"use client"

import { Star, Quote } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

const reviews = [
  {
    name: "Mark T.",
    text: {
      en: "Best pizza in town! Fast delivery and amazing taste. Will definitely order again!",
      nl: "Beste pizza in de stad! Snelle bezorging en geweldige smaak. Bestel zeker weer!",
    },
    rating: 5,
    date: "2 days ago",
    dateNl: "2 dagen geleden",
  },
  {
    name: "Anna K.",
    text: {
      en: "Fresh ingredients and very easy ordering. The Margherita was perfection!",
      nl: "Verse ingrediënten en heel makkelijk bestellen. De Margherita was perfectie!",
    },
    rating: 5,
    date: "1 week ago",
    dateNl: "1 week geleden",
  },
  {
    name: "Thomas V.",
    text: {
      en: "Finally a pizzeria that delivers hot pizza! Great quality and friendly service.",
      nl: "Eindelijk een pizzeria die warme pizza bezorgt! Geweldige kwaliteit en vriendelijke service.",
    },
    rating: 5,
    date: "3 days ago",
    dateNl: "3 dagen geleden",
  },
]

export function ReviewsSection() {
  const { t, language } = useLanguage()

  return (
    <section className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {t.reviews.title}
          </h2>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="relative rounded-2xl bg-card p-8 shadow-sm transition-all duration-300 hover:shadow-lg"
            >
              <Quote className="absolute right-6 top-6 h-8 w-8 text-primary/20" />
              <div className="flex gap-1">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                "{review.text[language]}"
              </p>
              <div className="mt-6 flex items-center justify-between">
                <p className="font-semibold text-foreground">— {review.name}</p>
                <p className="text-sm text-muted-foreground">
                  {language === "en" ? review.date : review.dateNl}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
