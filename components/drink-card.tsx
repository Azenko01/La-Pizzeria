"use client"

import Image from "next/image"
import { useState } from "react"
import { Plus, Check, Star, Eye, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/lib/language-context"
import { useCart } from "@/lib/cart-context"
import type { Drink } from "@/lib/pizza-data"

interface DrinkCardProps {
  drink: Drink
  onViewDetails: (drink: Drink) => void
}

export function DrinkCard({ drink, onViewDetails }: DrinkCardProps) {
  const { language, t } = useLanguage()
  const { addItem } = useCart()
  const [added, setAdded] = useState(false)

  const handleAddToCart = () => {
    addItem({
      id: drink.id,
      name: drink.name[language],
      price: drink.price,
      image: drink.image,
    })
    setAdded(true)
    setTimeout(() => setAdded(false), 1500)
  }

  const categoryLabels: Record<string, string> = {
    soft: t.menu.filter.soft,
    alcohol: t.menu.filter.alcohol,
    juice: t.menu.filter.juice,
  }

  return (
    <Card className="group overflow-hidden border-border bg-card transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="relative aspect-square overflow-hidden cursor-pointer" onClick={() => onViewDetails(drink)}>
        <Image
          src={drink.image || "/placeholder.svg"}
          alt={drink.name[language]}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* View Details Overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="rounded-full bg-white/90 p-3 shadow-lg">
            <Eye className="h-6 w-6 text-foreground" />
          </div>
        </div>

        <Badge variant="secondary" className="absolute left-3 top-3 shadow-lg">
          {categoryLabels[drink.category]}
        </Badge>

        {/* Rating Badge */}
        <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-white/90 px-2 py-1 shadow-lg">
          <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
          <span className="text-xs font-semibold text-foreground">{drink.rating}</span>
        </div>
      </div>

      <CardContent className="p-4">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="text-lg font-semibold text-card-foreground">{drink.name[language]}</h3>
            <span className="text-sm text-muted-foreground">{drink.volume}</span>
          </div>
          <span className="text-lg font-bold text-primary">
            €{drink.price.toFixed(2)}
          </span>
        </div>

        {/* Stats Row */}
        <div className="mt-2 flex items-center gap-3 text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
            <span>{drink.rating} ({drink.reviews})</span>
          </div>
          <div className="flex items-center gap-1">
            <ShoppingBag className="h-3 w-3" />
            <span>{drink.orders.toLocaleString()}+ {language === "en" ? "sold" : "verkocht"}</span>
          </div>
        </div>

        <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
          {drink.description[language]}
        </p>

        <Button
          onClick={handleAddToCart}
          disabled={added}
          className="mt-4 w-full gap-2 font-semibold"
          size="lg"
        >
          {added ? (
            <>
              <Check className="h-4 w-4 shrink-0" />
              <span className="truncate">{language === "en" ? "Added!" : "Toegevoegd!"}</span>
            </>
          ) : (
            <>
              <Plus className="h-4 w-4 shrink-0" />
              <span className="truncate">{t.menu.addToCart}</span>
            </>
          )}
        </Button>
      </CardContent>
    </Card>
  )
}
