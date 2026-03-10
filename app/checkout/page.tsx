"use client"

import React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, CreditCard, CheckCircle2, Landmark, Wallet, Banknote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useLanguage } from "@/lib/language-context"
import { useCart } from "@/lib/cart-context"
import { cn } from "@/lib/utils"

type PaymentMethod = "card" | "ideal" | "paypal" | "cash"

export default function CheckoutPage() {
  const router = useRouter()
  const { t, language } = useLanguage()
  const { items, totalPrice, clearCart } = useCart()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [orderPlaced, setOrderPlaced] = useState(false)
  const [selectedPayment, setSelectedPayment] = useState<PaymentMethod>("card")

  const paymentMethods = [
    {
      id: "card" as PaymentMethod,
      name: t.payment.methods.card,
      description: language === "en" ? "Visa, Mastercard, Amex" : "Visa, Mastercard, Amex",
      icon: CreditCard,
    },
    {
      id: "ideal" as PaymentMethod,
      name: t.payment.methods.ideal,
      description: language === "en" ? "Dutch online banking" : "Nederlandse online bankieren",
      icon: Landmark,
    },
    {
      id: "paypal" as PaymentMethod,
      name: t.payment.methods.paypal,
      description: language === "en" ? "Fast & secure" : "Snel & veilig",
      icon: Wallet,
    },
    {
      id: "cash" as PaymentMethod,
      name: t.payment.methods.cash,
      description: language === "en" ? "Pay when delivered" : "Betaal bij levering",
      icon: Banknote,
    },
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate order processing
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setOrderPlaced(true)
    clearCart()
  }

  if (orderPlaced) {
    return (
      <main className="py-12 sm:py-16">
        <div className="mx-auto max-w-lg px-4 text-center sm:px-6 lg:px-8">
          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
            <CheckCircle2 className="h-12 w-12 text-green-600 dark:text-green-400" />
          </div>
          <h1 className="mt-6 font-serif text-3xl font-bold tracking-tight text-foreground">
            {t.checkout.success}
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            {language === "en" 
              ? "Your order has been confirmed. We will deliver your delicious pizza soon!" 
              : "Je bestelling is bevestigd. We bezorgen je heerlijke pizza binnenkort!"}
          </p>
          <div className="mt-4 rounded-lg bg-muted p-4">
            <p className="text-sm text-muted-foreground">
              {language === "en" ? "Order Number" : "Bestelnummer"}
            </p>
            <p className="text-xl font-bold text-foreground">
              #{Math.random().toString(36).substring(2, 10).toUpperCase()}
            </p>
          </div>
          <Link href="/" className="mt-8 inline-block">
            <Button size="lg" className="gap-2">
              <ArrowLeft className="h-5 w-5" />
              {language === "en" ? "Back to Home" : "Terug naar Home"}
            </Button>
          </Link>
        </div>
      </main>
    )
  }

  if (items.length === 0) {
    router.push("/cart")
    return null
  }

  return (
    <main className="py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Link
          href="/cart"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          {language === "en" ? "Back to Cart" : "Terug naar Winkelwagen"}
        </Link>

        <h1 className="mt-6 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {t.checkout.title}
        </h1>

        <form onSubmit={handleSubmit}>
          <div className="mt-8 grid gap-8 lg:grid-cols-3">
            {/* Checkout Form */}
            <div className="lg:col-span-2 space-y-8">
              {/* Delivery Information */}
              <Card className="shadow-sm">
                <CardContent className="p-6">
                  <h2 className="text-lg font-semibold text-card-foreground flex items-center gap-2">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">1</span>
                    {t.checkout.delivery}
                  </h2>
                  <div className="mt-6 grid gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">{t.checkout.name}</Label>
                      <Input
                        id="name"
                        required
                        placeholder="John Doe"
                        className="bg-input text-foreground"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">{t.checkout.email}</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        placeholder="john@example.com"
                        className="bg-input text-foreground"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">{t.checkout.phone}</Label>
                      <Input
                        id="phone"
                        type="tel"
                        required
                        placeholder="+31 6 12345678"
                        className="bg-input text-foreground"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="city">{t.checkout.city}</Label>
                      <Input
                        id="city"
                        required
                        placeholder="Amsterdam"
                        className="bg-input text-foreground"
                      />
                    </div>
                    <div className="space-y-2 sm:col-span-2">
                      <Label htmlFor="address">{t.checkout.address}</Label>
                      <Input
                        id="address"
                        required
                        placeholder="123 Main Street, Apt 4B"
                        className="bg-input text-foreground"
                      />
                    </div>
                    <div className="space-y-2 sm:col-span-2">
                      <Label htmlFor="notes">{t.checkout.notes}</Label>
                      <Textarea
                        id="notes"
                        placeholder={language === "en" ? "Special instructions for delivery..." : "Speciale instructies voor levering..."}
                        className="bg-input text-foreground"
                        rows={3}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Payment Method */}
              <Card className="shadow-sm">
                <CardContent className="p-6">
                  <h2 className="text-lg font-semibold text-card-foreground flex items-center gap-2">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">2</span>
                    {t.payment.title}
                  </h2>
                  <RadioGroup
                    value={selectedPayment}
                    onValueChange={(value) => setSelectedPayment(value as PaymentMethod)}
                    className="mt-6 grid gap-3 sm:grid-cols-2"
                  >
                    {paymentMethods.map((method) => {
                      const Icon = method.icon
                      return (
                        <div key={method.id}>
                          <RadioGroupItem
                            value={method.id}
                            id={method.id}
                            className="peer sr-only"
                          />
                          <Label
                            htmlFor={method.id}
                            className={cn(
                              "flex cursor-pointer items-center gap-4 rounded-xl border-2 p-4 transition-all",
                              "hover:border-primary/50 hover:bg-muted/50",
                              selectedPayment === method.id
                                ? "border-primary bg-primary/5 shadow-sm"
                                : "border-border"
                            )}
                          >
                            <div className={cn(
                              "flex h-12 w-12 items-center justify-center rounded-lg",
                              selectedPayment === method.id
                                ? "bg-primary text-primary-foreground"
                                : "bg-muted text-muted-foreground"
                            )}>
                              <Icon className="h-6 w-6" />
                            </div>
                            <div>
                              <p className="font-semibold text-card-foreground">{method.name}</p>
                              <p className="text-sm text-muted-foreground">{method.description}</p>
                            </div>
                          </Label>
                        </div>
                      )
                    })}
                  </RadioGroup>

                  {/* Card Details (shown only if card is selected) */}
                  {selectedPayment === "card" && (
                    <div className="mt-6 grid gap-4 rounded-lg bg-muted/50 p-4 sm:grid-cols-2">
                      <div className="space-y-2 sm:col-span-2">
                        <Label htmlFor="cardNumber">
                          {language === "en" ? "Card Number" : "Kaartnummer"}
                        </Label>
                        <Input
                          id="cardNumber"
                          placeholder="1234 5678 9012 3456"
                          className="bg-background"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="expiry">
                          {language === "en" ? "Expiry Date" : "Vervaldatum"}
                        </Label>
                        <Input
                          id="expiry"
                          placeholder="MM/YY"
                          className="bg-background"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cvv">CVV</Label>
                        <Input
                          id="cvv"
                          placeholder="123"
                          className="bg-background"
                        />
                      </div>
                    </div>
                  )}

                  {/* iDEAL Bank Selection */}
                  {selectedPayment === "ideal" && (
                    <div className="mt-6 rounded-lg bg-muted/50 p-4">
                      <Label htmlFor="bank">
                        {language === "en" ? "Select your bank" : "Selecteer je bank"}
                      </Label>
                      <select
                        id="bank"
                        className="mt-2 w-full rounded-lg border border-border bg-background p-3 text-foreground"
                      >
                        <option value="">-- {language === "en" ? "Choose bank" : "Kies bank"} --</option>
                        <option value="abn">ABN AMRO</option>
                        <option value="ing">ING</option>
                        <option value="rabo">Rabobank</option>
                        <option value="sns">SNS</option>
                        <option value="asn">ASN Bank</option>
                        <option value="bunq">bunq</option>
                      </select>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24 shadow-sm">
                <CardContent className="p-6">
                  <h2 className="text-lg font-semibold text-card-foreground">
                    {language === "en" ? "Your Order" : "Je Bestelling"}
                  </h2>
                  <div className="mt-6 divide-y divide-border">
                    {items.map((item) => (
                      <div key={`${item.id}-${item.size}`} className="flex gap-3 py-3">
                        <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-lg">
                          <Image
                            src={item.image || "/placeholder.svg"}
                            alt={item.name}
                            fill
                            className="object-cover"
                            sizes="64px"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-card-foreground truncate">{item.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {item.quantity}x €{item.price.toFixed(2)}
                            {item.size && ` (${item.size})`}
                          </p>
                        </div>
                        <p className="font-medium text-card-foreground whitespace-nowrap">
                          €{(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 space-y-3 border-t border-border pt-6">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span className="font-medium text-card-foreground">€{totalPrice.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">
                        {language === "en" ? "Delivery" : "Bezorging"}
                      </span>
                      <span className="font-medium text-card-foreground">€3.50</span>
                    </div>
                    <div className="flex justify-between border-t border-border pt-3">
                      <span className="text-lg font-semibold text-card-foreground">{t.cart.total}</span>
                      <span className="text-lg font-bold text-primary">
                        €{(totalPrice + 3.5).toFixed(2)}
                      </span>
                    </div>
                  </div>
                  <Button
                    type="submit"
                    className="mt-6 w-full h-12 text-base font-semibold"
                    disabled={isSubmitting}
                  >
                    {isSubmitting 
                      ? (language === "en" ? "Processing..." : "Verwerken...") 
                      : t.checkout.placeOrder}
                  </Button>
                  <p className="mt-4 text-center text-xs text-muted-foreground">
                    {language === "en" 
                      ? "By placing your order, you agree to our Terms of Service and Privacy Policy" 
                      : "Door je bestelling te plaatsen, ga je akkoord met onze Servicevoorwaarden en Privacybeleid"}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </form>
      </div>
    </main>
  )
}
