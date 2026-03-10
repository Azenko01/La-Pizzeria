"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type Language = "en" | "nl"

interface Translations {
  nav: {
    home: string
    menu: string
    about: string
    contact: string
    cart: string
  }
  hero: {
    title: string
    subtitle: string
    cta: string
  }
  features: {
    title: string
    fresh: { title: string; desc: string }
    hot: { title: string; desc: string }
    fast: { title: string; desc: string }
  }
  howItWorks: {
    title: string
    step1: { title: string; desc: string }
    step2: { title: string; desc: string }
    step3: { title: string; desc: string }
  }
  reviews: {
    title: string
  }
  menu: {
    title: string
    subtitle: string
    addToCart: string
    viewDetails: string
    drinks: string
    drinksSubtitle: string
    bestSeller: string
    chefChoice: string
    filter: {
      all: string
      classic: string
      specialty: string
      vegetarian: string
      soft: string
      alcohol: string
      juice: string
    }
  }
  payment: {
    title: string
    methods: {
      card: string
      ideal: string
      paypal: string
      cash: string
    }
  }
  cart: {
    title: string
    empty: string
    total: string
    checkout: string
    remove: string
    quantity: string
  }
  checkout: {
    title: string
    delivery: string
    payment: string
    placeOrder: string
    name: string
    email: string
    phone: string
    address: string
    city: string
    notes: string
    success: string
  }
  about: {
    title: string
    story: string
    storyText: string
  }
  contact: {
    title: string
    subtitle: string
    form: {
      name: string
      email: string
      message: string
      send: string
    }
  }
  footer: {
    tagline: string
    hours: string
    weekdays: string
    weekend: string
    location: string
    phone: string
    followUs: string
    rights: string
  }
  sizes: {
    small: string
    medium: string
    large: string
  }
  cta: {
    orderNow: string
    viewMenu: string
    readyToOrder: string
    readyToOrderDesc: string
  }
}

const translations: Record<Language, Translations> = {
  en: {
    nav: {
      home: "Home",
      menu: "Menu",
      about: "About",
      contact: "Contact",
      cart: "Cart",
    },
    hero: {
      title: "Fresh Hot Pizza Delivered Fast",
      subtitle: "Handmade pizza with fresh ingredients. Order online in seconds.",
      cta: "Order Now",
    },
    features: {
      title: "Why Customers Love Our Pizza",
      fresh: { title: "Fresh Ingredients", desc: "We use only fresh and high-quality products" },
      hot: { title: "Baked Hot", desc: "Every pizza is baked fresh after your order" },
      fast: { title: "Fast Delivery", desc: "Hot pizza delivered to your door in 30 minutes" },
    },
    howItWorks: {
      title: "How It Works",
      step1: { title: "Choose Your Pizza", desc: "Browse our menu and pick your favorites" },
      step2: { title: "Add to Cart", desc: "Customize size and add to your order" },
      step3: { title: "Enjoy Fast Delivery", desc: "We deliver hot pizza to your door" },
    },
    reviews: {
      title: "What Our Customers Say",
    },
    menu: {
      title: "Our Menu",
      subtitle: "Discover our selection of handcrafted pizzas",
      addToCart: "Add to Cart",
      viewDetails: "View Details",
      drinks: "Beverages",
      drinksSubtitle: "Refresh yourself with our drinks",
      bestSeller: "Best Seller",
      chefChoice: "Chef's Choice",
      filter: {
        all: "All",
        classic: "Classic",
        specialty: "Specialty",
        vegetarian: "Vegetarian",
        soft: "Soft Drinks",
        alcohol: "Alcoholic",
        juice: "Juices",
      },
    },
    payment: {
      title: "Payment Method",
      methods: {
        card: "Credit Card",
        ideal: "iDEAL",
        paypal: "PayPal",
        cash: "Cash on Delivery",
      },
    },
    cart: {
      title: "Your Cart",
      empty: "Your cart is empty",
      total: "Total",
      checkout: "Proceed to Checkout",
      remove: "Remove",
      quantity: "Qty",
    },
    checkout: {
      title: "Checkout",
      delivery: "Delivery Information",
      payment: "Payment",
      placeOrder: "Place Order",
      name: "Full Name",
      email: "Email",
      phone: "Phone Number",
      address: "Delivery Address",
      city: "City",
      notes: "Order Notes (optional)",
      success: "Order placed successfully!",
    },
    about: {
      title: "Our Story",
      story: "A Family Tradition",
      storyText: "Since 1985, we've been serving authentic Italian pizza made with passion and tradition. Our recipes have been passed down through three generations, ensuring every pizza tells a story of dedication and love for great food.",
    },
    contact: {
      title: "Get in Touch",
      subtitle: "We'd love to hear from you",
      form: {
        name: "Your Name",
        email: "Your Email",
        message: "Your Message",
        send: "Send Message",
      },
    },
    footer: {
      tagline: "Authentic Italian Pizza Since 1985",
      hours: "Opening Hours",
      weekdays: "Mon-Fri: 11:00 - 23:00",
      weekend: "Sat-Sun: 12:00 - 24:00",
      location: "Pizzastraat 123, Amsterdam",
      phone: "+31 20 123 4567",
      followUs: "Follow Us",
      rights: "All rights reserved",
    },
    sizes: {
      small: "Small (25cm)",
      medium: "Medium (30cm)",
      large: "Large (35cm)",
    },
    cta: {
      orderNow: "Order Now",
      viewMenu: "View Full Menu",
      readyToOrder: "Ready to Order?",
      readyToOrderDesc: "Get your favorite pizza delivered hot and fresh to your door.",
    },
  },
  nl: {
    nav: {
      home: "Home",
      menu: "Menu",
      about: "Over Ons",
      contact: "Contact",
      cart: "Winkelwagen",
    },
    hero: {
      title: "Verse Hete Pizza Snel Bezorgd",
      subtitle: "Handgemaakte pizza met verse ingrediënten. Bestel online in seconden.",
      cta: "Bestel Nu",
    },
    features: {
      title: "Waarom Klanten Van Onze Pizza Houden",
      fresh: { title: "Verse Ingrediënten", desc: "Wij gebruiken alleen verse producten van hoge kwaliteit" },
      hot: { title: "Vers Gebakken", desc: "Elke pizza wordt vers gebakken na je bestelling" },
      fast: { title: "Snelle Bezorging", desc: "Warme pizza binnen 30 minuten aan je deur" },
    },
    howItWorks: {
      title: "Hoe Het Werkt",
      step1: { title: "Kies Je Pizza", desc: "Bekijk ons menu en kies je favorieten" },
      step2: { title: "Voeg Toe aan Winkelwagen", desc: "Kies de maat en voeg toe aan je bestelling" },
      step3: { title: "Geniet van Snelle Bezorging", desc: "Wij bezorgen warme pizza aan je deur" },
    },
    reviews: {
      title: "Wat Onze Klanten Zeggen",
    },
    menu: {
      title: "Ons Menu",
      subtitle: "Ontdek onze selectie van ambachtelijke pizza's",
      addToCart: "In Winkelwagen",
      viewDetails: "Bekijk Details",
      drinks: "Dranken",
      drinksSubtitle: "Verfris jezelf met onze dranken",
      bestSeller: "Best Verkocht",
      chefChoice: "Chef's Keuze",
      filter: {
        all: "Alles",
        classic: "Klassiek",
        specialty: "Specialiteit",
        vegetarian: "Vegetarisch",
        soft: "Frisdranken",
        alcohol: "Alcoholisch",
        juice: "Sappen",
      },
    },
    payment: {
      title: "Betaalmethode",
      methods: {
        card: "Creditcard",
        ideal: "iDEAL",
        paypal: "PayPal",
        cash: "Contant bij Levering",
      },
    },
    cart: {
      title: "Winkelwagen",
      empty: "Je winkelwagen is leeg",
      total: "Totaal",
      checkout: "Afrekenen",
      remove: "Verwijderen",
      quantity: "Aantal",
    },
    checkout: {
      title: "Afrekenen",
      delivery: "Bezorginformatie",
      payment: "Betaling",
      placeOrder: "Bestelling Plaatsen",
      name: "Volledige Naam",
      email: "E-mail",
      phone: "Telefoonnummer",
      address: "Bezorgadres",
      city: "Stad",
      notes: "Opmerkingen (optioneel)",
      success: "Bestelling succesvol geplaatst!",
    },
    about: {
      title: "Ons Verhaal",
      story: "Een Familie Traditie",
      storyText: "Sinds 1985 serveren wij authentieke Italiaanse pizza gemaakt met passie en traditie. Onze recepten zijn doorgegeven door drie generaties, zodat elke pizza een verhaal vertelt van toewijding en liefde voor goed eten.",
    },
    contact: {
      title: "Neem Contact Op",
      subtitle: "We horen graag van je",
      form: {
        name: "Je Naam",
        email: "Je E-mail",
        message: "Je Bericht",
        send: "Verstuur Bericht",
      },
    },
    footer: {
      tagline: "Authentieke Italiaanse Pizza Sinds 1985",
      hours: "Openingstijden",
      weekdays: "Ma-Vr: 11:00 - 23:00",
      weekend: "Za-Zo: 12:00 - 24:00",
      location: "Pizzastraat 123, Amsterdam",
      phone: "+31 20 123 4567",
      followUs: "Volg Ons",
      rights: "Alle rechten voorbehouden",
    },
    sizes: {
      small: "Klein (25cm)",
      medium: "Medium (30cm)",
      large: "Groot (35cm)",
    },
    cta: {
      orderNow: "Bestel Nu",
      viewMenu: "Bekijk Volledig Menu",
      readyToOrder: "Klaar om te Bestellen?",
      readyToOrderDesc: "Krijg je favoriete pizza warm en vers aan je deur bezorgd.",
    },
  },
}

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: Translations
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  useEffect(() => {
    const saved = localStorage.getItem("language") as Language
    if (saved && (saved === "en" || saved === "nl")) {
      setLanguage(saved)
    }
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem("language", lang)
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
