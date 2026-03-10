"use client"

import Image from "next/image"
import Link from "next/link"
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/lib/language-context"
import { useCart } from "@/lib/cart-context"

export default function CartPage() {
  const { t } = useLanguage()
  const { items, removeItem, updateQuantity, totalPrice } = useCart()

  const sizeLabels = {
    small: t.sizes.small,
    medium: t.sizes.medium,
    large: t.sizes.large,
  }

  if (items.length === 0) {
    return (
      <main className="py-12 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-secondary">
              <ShoppingBag className="h-12 w-12 text-muted-foreground" />
            </div>
            <h1 className="mt-6 text-3xl font-bold tracking-tight text-foreground">
              {t.cart.title}
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">{t.cart.empty}</p>
            <Link href="/menu" className="mt-8 inline-block">
              <Button size="lg" className="gap-2">
                {t.menu.title}
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="py-12 sm:py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {t.cart.title}
        </h1>

        <div className="mt-8 grid gap-8 lg:grid-cols-3">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {items.map((item) => (
                <Card key={`${item.id}-${item.size}`} className="overflow-hidden">
                  <CardContent className="p-4">
                    <div className="flex gap-4">
                      <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-lg">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          fill
                          className="object-cover"
                          sizes="96px"
                        />
                      </div>
                      <div className="flex flex-1 flex-col">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="font-semibold text-card-foreground">{item.name}</h3>
                            <p className="mt-1 text-sm text-muted-foreground">
                              {sizeLabels[item.size]}
                            </p>
                          </div>
                          <p className="font-semibold text-primary">
                            €{(item.price * item.quantity).toFixed(2)}
                          </p>
                        </div>
                        <div className="mt-auto flex items-center justify-between pt-4">
                          <div className="flex items-center gap-2">
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-8 w-8 bg-transparent"
                              onClick={() =>
                                updateQuantity(item.id, item.size, item.quantity - 1)
                              }
                            >
                              <Minus className="h-4 w-4" />
                            </Button>
                            <span className="w-8 text-center font-medium text-foreground">
                              {item.quantity}
                            </span>
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-8 w-8 bg-transparent"
                              onClick={() =>
                                updateQuantity(item.id, item.size, item.quantity + 1)
                              }
                            >
                              <Plus className="h-4 w-4" />
                            </Button>
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-destructive hover:text-destructive"
                            onClick={() => removeItem(item.id, item.size)}
                          >
                            <Trash2 className="mr-2 h-4 w-4" />
                            {t.cart.remove}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardContent className="p-6">
                <h2 className="text-lg font-semibold text-card-foreground">Order Summary</h2>
                <div className="mt-6 space-y-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="font-medium text-card-foreground">€{totalPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Delivery</span>
                    <span className="font-medium text-card-foreground">€3.50</span>
                  </div>
                  <div className="border-t border-border pt-4">
                    <div className="flex justify-between">
                      <span className="text-lg font-semibold text-card-foreground">{t.cart.total}</span>
                      <span className="text-lg font-bold text-primary">
                        €{(totalPrice + 3.5).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
                <Link href="/checkout" className="mt-6 block">
                  <Button className="w-full" size="lg">
                    {t.cart.checkout}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  )
}
