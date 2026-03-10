"use client"

import Image from "next/image"
import { useState } from "react"
import { Plus, Check, Star, Eye, ShoppingBag, Award, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/lib/language-context"
import { useCart } from "@/lib/cart-context"
import type { Pizza } from "@/lib/pizza-data"

interface PizzaCardProps {
  pizza: Pizza
  onViewDetails: (pizza: Pizza) => void
}

export function PizzaCard({ pizza, onViewDetails }: PizzaCardProps) {
  const { language, t } = useLanguage()
  const { addItem } = useCart()
  const [selectedSize, setSelectedSize] = useState<"small" | "medium" | "large">("medium")
  const [added, setAdded] = useState(false)

  const handleAddToCart = () => {
    addItem({
      id: `${pizza.id}-${selectedSize}`,
      name: pizza.name[language],
      price: pizza.price[selectedSize],
      image: pizza.image,
      size: selectedSize,
    })
    setAdded(true)
    setTimeout(() => setAdded(false), 1500)
  }

  const sizeLabels = {
    small: t.sizes.small,
    medium: t.sizes.medium,
    large: t.sizes.large,
  }

  return (
    <Card className="group overflow-hidden border-border bg-card transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="relative aspect-square overflow-hidden cursor-pointer" onClick={() => onViewDetails(pizza)}>
        <Image
          src={pizza.image || "/placeholder.svg"}
          alt={pizza.name[language]}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* View Details Overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="rounded-full bg-white/90 p-3 shadow-lg">
            <Eye className="h-6 w-6 text-foreground" />
          </div>
        </div>

        {/* Badges */}
        <div className="absolute left-3 top-3 flex flex-col gap-2">
          {pizza.bestSeller && (
            <Badge className="bg-amber-500 text-white shadow-lg gap-1">
              <TrendingUp className="h-3 w-3" />
              {t.menu.bestSeller}
            </Badge>
          )}
          {pizza.chefChoice && (
            <Badge className="bg-emerald-600 text-white shadow-lg gap-1">
              <Award className="h-3 w-3" />
              {t.menu.chefChoice}
            </Badge>
          )}
          {pizza.popular && !pizza.bestSeller && !pizza.chefChoice && (
            <Badge className="bg-primary text-primary-foreground shadow-lg">
              {language === "en" ? "Popular" : "Populair"}
            </Badge>
          )}
        </div>

        {/* Rating Badge */}
        <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-white/90 px-2 py-1 shadow-lg">
          <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
          <span className="text-xs font-semibold text-foreground">{pizza.rating}</span>
        </div>
      </div>

      <CardContent className="p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-lg font-semibold text-card-foreground">{pizza.name[language]}</h3>
          <span className="text-lg font-bold text-primary">
            €{pizza.price[selectedSize].toFixed(2)}
          </span>
        </div>

        {/* Stats Row */}
        <div className="mt-2 flex items-center gap-3 text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
            <span>{pizza.rating} ({pizza.reviews})</span>
          </div>
          <div className="flex items-center gap-1">
            <ShoppingBag className="h-3 w-3" />
            <span>{pizza.orders.toLocaleString()}+ {language === "en" ? "sold" : "verkocht"}</span>
          </div>
        </div>

        <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
          {pizza.description[language]}
        </p>

        <div className="mt-3 flex flex-wrap gap-1">
          {pizza.ingredients[language].slice(0, 3).map((ingredient) => (
            <span
              key={ingredient}
              className="rounded-full bg-secondary px-2 py-0.5 text-xs text-secondary-foreground"
            >
              {ingredient}
            </span>
          ))}
          {pizza.ingredients[language].length > 3 && (
            <span className="rounded-full bg-secondary px-2 py-0.5 text-xs text-secondary-foreground">
              +{pizza.ingredients[language].length - 3}
            </span>
          )}
        </div>

        {/* Size Selection */}
        <div className="mt-4">
          <Select
            value={selectedSize}
            onValueChange={(value) => setSelectedSize(value as "small" | "medium" | "large")}
          >
            <SelectTrigger className="w-full bg-input text-foreground">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="small">{sizeLabels.small} - €{pizza.price.small.toFixed(2)}</SelectItem>
              <SelectItem value="medium">{sizeLabels.medium} - €{pizza.price.medium.toFixed(2)}</SelectItem>
              <SelectItem value="large">{sizeLabels.large} - €{pizza.price.large.toFixed(2)}</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Add to Cart Button */}
        <Button
          onClick={handleAddToCart}
          disabled={added}
          className="mt-3 w-full gap-2 font-semibold shadow-md hover:shadow-lg transition-all"
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
