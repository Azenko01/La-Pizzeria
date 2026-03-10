"use client"

import { useState } from "react"
import { UtensilsCrossed, Wine } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PizzaCard } from "@/components/pizza-card"
import { DrinkCard } from "@/components/drink-card"
import { ProductModal } from "@/components/product-modal"
import { useLanguage } from "@/lib/language-context"
import { pizzas, drinks, type Pizza, type Drink } from "@/lib/pizza-data"
import { cn } from "@/lib/utils"

type PizzaCategory = "all" | "classic" | "specialty" | "vegetarian"
type DrinkCategory = "all" | "soft" | "alcohol" | "juice"

export default function MenuPage() {
  const { t, language } = useLanguage()
  const [activePizzaCategory, setActivePizzaCategory] = useState<PizzaCategory>("all")
  const [activeDrinkCategory, setActiveDrinkCategory] = useState<DrinkCategory>("all")
  
  // Modal state
  const [selectedProduct, setSelectedProduct] = useState<Pizza | Drink | null>(null)
  const [productType, setProductType] = useState<"pizza" | "drink">("pizza")
  const [isModalOpen, setIsModalOpen] = useState(false)

  const pizzaCategories: { value: PizzaCategory; label: string }[] = [
    { value: "all", label: t.menu.filter.all },
    { value: "classic", label: t.menu.filter.classic },
    { value: "specialty", label: t.menu.filter.specialty },
    { value: "vegetarian", label: t.menu.filter.vegetarian },
  ]

  const drinkCategories: { value: DrinkCategory; label: string }[] = [
    { value: "all", label: t.menu.filter.all },
    { value: "soft", label: t.menu.filter.soft },
    { value: "juice", label: t.menu.filter.juice },
    { value: "alcohol", label: t.menu.filter.alcohol },
  ]

  const filteredPizzas =
    activePizzaCategory === "all"
      ? pizzas
      : pizzas.filter((pizza) => pizza.category === activePizzaCategory)

  const filteredDrinks =
    activeDrinkCategory === "all"
      ? drinks
      : drinks.filter((drink) => drink.category === activeDrinkCategory)

  const handleViewPizzaDetails = (pizza: Pizza) => {
    setSelectedProduct(pizza)
    setProductType("pizza")
    setIsModalOpen(true)
  }

  const handleViewDrinkDetails = (drink: Drink) => {
    setSelectedProduct(drink)
    setProductType("drink")
    setIsModalOpen(true)
  }

  return (
    <main className="py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="font-serif text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            {t.menu.title}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            {t.menu.subtitle}
          </p>
        </div>

        {/* Tabs for Pizza / Drinks */}
        <Tabs defaultValue="pizzas" className="mt-10">
          <TabsList className="mx-auto grid w-full max-w-md grid-cols-2">
            <TabsTrigger value="pizzas" className="gap-2">
              <UtensilsCrossed className="h-4 w-4" />
              {language === "en" ? "Pizzas" : "Pizza's"}
            </TabsTrigger>
            <TabsTrigger value="drinks" className="gap-2">
              <Wine className="h-4 w-4" />
              {t.menu.drinks}
            </TabsTrigger>
          </TabsList>

          {/* Pizzas Tab */}
          <TabsContent value="pizzas" className="mt-8">
            {/* Filter Tabs */}
            <div className="flex flex-wrap justify-center gap-2">
              {pizzaCategories.map((category) => (
                <Button
                  key={category.value}
                  variant={activePizzaCategory === category.value ? "default" : "outline"}
                  onClick={() => setActivePizzaCategory(category.value)}
                  className={cn(
                    "min-w-[100px]",
                    activePizzaCategory === category.value && "shadow-md"
                  )}
                >
                  {category.label}
                </Button>
              ))}
            </div>

            {/* Pizza Grid */}
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredPizzas.map((pizza) => (
                <PizzaCard 
                  key={pizza.id} 
                  pizza={pizza} 
                  onViewDetails={handleViewPizzaDetails}
                />
              ))}
            </div>

            {filteredPizzas.length === 0 && (
              <div className="mt-12 text-center">
                <p className="text-lg text-muted-foreground">
                  {language === "en" ? "No pizzas found in this category." : "Geen pizza's gevonden in deze categorie."}
                </p>
              </div>
            )}
          </TabsContent>

          {/* Drinks Tab */}
          <TabsContent value="drinks" className="mt-8">
            {/* Filter Tabs */}
            <div className="flex flex-wrap justify-center gap-2">
              {drinkCategories.map((category) => (
                <Button
                  key={category.value}
                  variant={activeDrinkCategory === category.value ? "default" : "outline"}
                  onClick={() => setActiveDrinkCategory(category.value)}
                  className={cn(
                    "min-w-[100px]",
                    activeDrinkCategory === category.value && "shadow-md"
                  )}
                >
                  {category.label}
                </Button>
              ))}
            </div>

            {/* Drinks Grid */}
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredDrinks.map((drink) => (
                <DrinkCard 
                  key={drink.id} 
                  drink={drink} 
                  onViewDetails={handleViewDrinkDetails}
                />
              ))}
            </div>

            {filteredDrinks.length === 0 && (
              <div className="mt-12 text-center">
                <p className="text-lg text-muted-foreground">
                  {language === "en" ? "No drinks found in this category." : "Geen dranken gevonden in deze categorie."}
                </p>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>

      {/* Product Modal */}
      <ProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false)
          setSelectedProduct(null)
        }}
        type={productType}
      />
    </main>
  )
}
