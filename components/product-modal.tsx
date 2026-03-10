"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { X, Star, ShoppingBag, Minus, Plus, ChefHat } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/lib/language-context"
import { useCart } from "@/lib/cart-context"
import type { Pizza, Drink } from "@/lib/pizza-data"

interface ProductModalProps {
  product: Pizza | Drink | null
  isOpen: boolean
  onClose: () => void
  type: "pizza" | "drink"
}

export function ProductModal({ product, isOpen, onClose, type }: ProductModalProps) {
  const { language, t } = useLanguage()
  const { addItem } = useCart()
  const [selectedSize, setSelectedSize] = useState<"small" | "medium" | "large">("medium")
  const [quantity, setQuantity] = useState(1)

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  if (!isOpen || !product) return null

  const isPizza = type === "pizza"
  const pizza = product as Pizza
  const drink = product as Drink

  const price = isPizza ? pizza.price[selectedSize] : drink.price
  const totalPrice = price * quantity

  const handleAddToCart = () => {
    if (isPizza) {
      addItem({
        id: `${pizza.id}-${selectedSize}`,
        name: pizza.name[language],
        price: pizza.price[selectedSize],
        image: pizza.image,
        size: selectedSize,
        quantity,
      })
    } else {
      addItem({
        id: drink.id,
        name: drink.name[language],
        price: drink.price,
        image: drink.image,
        quantity,
      })
    }
    onClose()
    setQuantity(1)
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${i < Math.floor(rating) ? "fill-amber-400 text-amber-400" : "text-muted"}`}
      />
    ))
  }

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm" 
        onClick={onClose} 
      />
      
      {/* Modal Container - centers content and allows scrolling */}
      <div className="min-h-full flex items-start justify-center p-4 py-8 sm:py-12">
        <div className="relative z-10 w-full max-w-3xl bg-card rounded-2xl shadow-2xl overflow-hidden">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute right-3 top-3 z-20 rounded-full bg-background/90 p-2 backdrop-blur-sm transition-colors hover:bg-background shadow-lg"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Image Section */}
          <div className="relative w-full aspect-[16/10] sm:aspect-[16/9]">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name[language]}
              fill
              className="object-cover"
            />
            {isPizza && pizza.popular && (
              <Badge className="absolute left-4 top-4 bg-primary text-primary-foreground">
                {language === "en" ? "Popular" : "Populair"}
              </Badge>
            )}
          </div>

          {/* Content Section */}
          <div className="p-5 sm:p-6">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-2">
              {product.name[language]}
            </h2>

            {/* Rating & Stats */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-4">
              <div className="flex items-center gap-1">
                {renderStars(product.rating)}
                <span className="ml-1 text-sm font-medium">{product.rating}</span>
                <span className="text-xs sm:text-sm text-muted-foreground">
                  ({product.reviews})
                </span>
              </div>
              <div className="flex items-center gap-1 text-xs sm:text-sm text-muted-foreground">
                <ShoppingBag className="h-4 w-4" />
                <span>{product.orders.toLocaleString()} {language === "en" ? "orders" : "bestellingen"}</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base text-muted-foreground mb-5 leading-relaxed">
              {product.description[language]}
            </p>

            {/* Ingredients (Pizza only) */}
            {isPizza && (
              <div className="mb-5">
                <h3 className="flex items-center gap-2 font-semibold text-foreground mb-2 text-sm sm:text-base">
                  <ChefHat className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                  {language === "en" ? "Ingredients" : "Ingredienten"}
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {pizza.ingredients[language].map((ingredient, i) => (
                    <Badge key={i} variant="secondary" className="text-xs sm:text-sm">
                      {ingredient}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {/* Volume (Drink only) */}
            {!isPizza && (
              <div className="mb-5">
                <span className="text-sm text-muted-foreground">
                  {language === "en" ? "Volume" : "Inhoud"}: {drink.volume}
                </span>
              </div>
            )}

            {/* Size Selection (Pizza only) */}
            {isPizza && (
              <div className="mb-5">
                <h3 className="font-semibold text-foreground mb-2 text-sm sm:text-base">
                  {language === "en" ? "Select Size" : "Kies Formaat"}
                </h3>
                <div className="grid grid-cols-3 gap-2">
                  {(["small", "medium", "large"] as const).map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`rounded-lg border-2 p-2 sm:p-3 text-center transition-all ${
                        selectedSize === size
                          ? "border-primary bg-primary/10"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      <div className="text-xs sm:text-sm font-medium">{t.sizes[size]}</div>
                      <div className="text-sm sm:text-lg font-bold text-primary">€{pizza.price[size].toFixed(2)}</div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mb-5">
              <h3 className="font-semibold text-foreground mb-2 text-sm sm:text-base">
                {language === "en" ? "Quantity" : "Aantal"}
              </h3>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border-2 border-border transition-colors hover:border-primary hover:bg-primary/5"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="w-10 text-center text-lg sm:text-xl font-bold">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border-2 border-border transition-colors hover:border-primary hover:bg-primary/5"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart - Fixed at bottom */}
            <div className="border-t border-border pt-4">
              <div className="flex items-center justify-between mb-3">
                <span className="text-muted-foreground text-sm sm:text-base">
                  {language === "en" ? "Total" : "Totaal"}
                </span>
                <span className="text-xl sm:text-2xl font-bold text-primary">
                  €{totalPrice.toFixed(2)}
                </span>
              </div>
              <Button 
                onClick={handleAddToCart} 
                className="w-full h-12 text-base sm:text-lg font-semibold gap-2"
                size="lg"
              >
                <Plus className="h-5 w-5" />
                {t.menu.addToCart}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
