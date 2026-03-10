export interface Pizza {
  id: string
  name: {
    en: string
    nl: string
  }
  description: {
    en: string
    nl: string
  }
  ingredients: {
    en: string[]
    nl: string[]
  }
  price: {
    small: number
    medium: number
    large: number
  }
  image: string
  category: "classic" | "specialty" | "vegetarian"
  popular?: boolean
  bestSeller?: boolean
  chefChoice?: boolean
  rating: number
  reviews: number
  orders: number
}

export interface Drink {
  id: string
  name: {
    en: string
    nl: string
  }
  description: {
    en: string
    nl: string
  }
  price: number
  image: string
  category: "soft" | "alcohol" | "juice"
  volume: string
  rating: number
  reviews: number
  orders: number
}

export const pizzas: Pizza[] = [
  {
    id: "margherita",
    name: { en: "Margherita", nl: "Margherita" },
    description: {
      en: "The classic Italian pizza with fresh tomatoes, mozzarella, and basil. A timeless favorite that captures the essence of Naples.",
      nl: "De klassieke Italiaanse pizza met verse tomaten, mozzarella en basilicum. Een tijdloze favoriet die de essentie van Napels vastlegt.",
    },
    ingredients: {
      en: ["Tomato Sauce", "Fresh Mozzarella", "Basil", "Olive Oil"],
      nl: ["Tomatensaus", "Verse Mozzarella", "Basilicum", "Olijfolie"],
    },
    price: { small: 9.50, medium: 12.50, large: 15.50 },
    image: "/images/pizza-margherita.jpg",
    category: "classic",
    popular: true,
    chefChoice: true,
    rating: 4.8,
    reviews: 324,
    orders: 1542,
  },
  {
    id: "pepperoni",
    name: { en: "Pepperoni", nl: "Pepperoni" },
    description: {
      en: "Loaded with spicy pepperoni and melted mozzarella cheese. The perfect combination of crispy edges and gooey cheese.",
      nl: "Beladen met pittige pepperoni en gesmolten mozzarella kaas. De perfecte combinatie van knapperige randen en smeuïge kaas.",
    },
    ingredients: {
      en: ["Tomato Sauce", "Mozzarella", "Pepperoni", "Oregano"],
      nl: ["Tomatensaus", "Mozzarella", "Pepperoni", "Oregano"],
    },
    price: { small: 10.50, medium: 13.50, large: 16.50 },
    image: "/images/pizza-pepperoni.jpg",
    category: "classic",
    popular: true,
    bestSeller: true,
    rating: 4.9,
    reviews: 512,
    orders: 2341,
  },
  {
    id: "quattro-formaggi",
    name: { en: "Quattro Formaggi", nl: "Quattro Formaggi" },
    description: {
      en: "A cheese lover's dream with four premium Italian cheeses. Rich, creamy, and absolutely irresistible.",
      nl: "Een droom voor kaasliefhebbers met vier premium Italiaanse kazen. Rijk, romig en absoluut onweerstaanbaar.",
    },
    ingredients: {
      en: ["Mozzarella", "Gorgonzola", "Parmesan", "Fontina"],
      nl: ["Mozzarella", "Gorgonzola", "Parmezaan", "Fontina"],
    },
    price: { small: 11.50, medium: 14.50, large: 17.50 },
    image: "/images/pizza-quattro.jpg",
    category: "specialty",
    chefChoice: true,
    rating: 4.7,
    reviews: 198,
    orders: 876,
  },
  {
    id: "hawaiian",
    name: { en: "Hawaiian", nl: "Hawaii" },
    description: {
      en: "Sweet pineapple meets savory ham on a bed of melted cheese. A tropical twist on the classic pizza.",
      nl: "Zoete ananas ontmoet hartige ham op een bed van gesmolten kaas. Een tropische twist op de klassieke pizza.",
    },
    ingredients: {
      en: ["Tomato Sauce", "Mozzarella", "Ham", "Pineapple"],
      nl: ["Tomatensaus", "Mozzarella", "Ham", "Ananas"],
    },
    price: { small: 10.50, medium: 13.50, large: 16.50 },
    image: "/images/pizza-hawaiian.jpg",
    category: "specialty",
    rating: 4.5,
    reviews: 276,
    orders: 1123,
  },
  {
    id: "veggie-supreme",
    name: { en: "Veggie Supreme", nl: "Veggie Supreme" },
    description: {
      en: "A colorful mix of fresh vegetables for the health-conscious. Bursting with flavor and goodness.",
      nl: "Een kleurrijke mix van verse groenten voor de gezondheidsbewuste. Vol smaak en goedheid.",
    },
    ingredients: {
      en: ["Tomato Sauce", "Mozzarella", "Bell Peppers", "Mushrooms", "Olives", "Onions"],
      nl: ["Tomatensaus", "Mozzarella", "Paprika", "Champignons", "Olijven", "Uien"],
    },
    price: { small: 10.50, medium: 13.50, large: 16.50 },
    image: "/images/pizza-veggie.jpg",
    category: "vegetarian",
    popular: true,
    rating: 4.6,
    reviews: 234,
    orders: 987,
  },
  {
    id: "bbq-chicken",
    name: { en: "BBQ Chicken", nl: "BBQ Kip" },
    description: {
      en: "Smoky BBQ sauce with grilled chicken and red onions. A bold, American-inspired pizza with Italian roots.",
      nl: "Rokerige BBQ saus met gegrilde kip en rode uien. Een gedurfde, Amerikaans-geïnspireerde pizza met Italiaanse roots.",
    },
    ingredients: {
      en: ["BBQ Sauce", "Mozzarella", "Grilled Chicken", "Red Onions", "Cilantro"],
      nl: ["BBQ Saus", "Mozzarella", "Gegrilde Kip", "Rode Uien", "Koriander"],
    },
    price: { small: 11.50, medium: 14.50, large: 17.50 },
    image: "/images/pizza-bbq.jpg",
    category: "specialty",
    popular: true,
    rating: 4.8,
    reviews: 389,
    orders: 1654,
  },
  {
    id: "meat-lovers",
    name: { en: "Meat Lovers", nl: "Vleesliefhebbers" },
    description: {
      en: "For the carnivore - loaded with pepperoni, sausage, bacon, and ham. The ultimate meat feast.",
      nl: "Voor de carnivoor - beladen met pepperoni, worst, spek en ham. Het ultieme vleesfeest.",
    },
    ingredients: {
      en: ["Tomato Sauce", "Mozzarella", "Pepperoni", "Italian Sausage", "Bacon", "Ham"],
      nl: ["Tomatensaus", "Mozzarella", "Pepperoni", "Italiaanse Worst", "Spek", "Ham"],
    },
    price: { small: 12.50, medium: 15.50, large: 18.50 },
    image: "/images/pizza-meat.jpg",
    category: "specialty",
    bestSeller: true,
    rating: 4.9,
    reviews: 445,
    orders: 1987,
  },
  {
    id: "funghi",
    name: { en: "Funghi", nl: "Funghi" },
    description: {
      en: "A mushroom medley with truffle oil and fresh herbs. Earthy, aromatic, and simply divine.",
      nl: "Een champignon mengeling met truffelolie en verse kruiden. Aards, aromatisch en gewoonweg goddelijk.",
    },
    ingredients: {
      en: ["Cream Sauce", "Mozzarella", "Mixed Mushrooms", "Truffle Oil", "Thyme"],
      nl: ["Roomsaus", "Mozzarella", "Gemengde Champignons", "Truffelolie", "Tijm"],
    },
    price: { small: 11.00, medium: 14.00, large: 17.00 },
    image: "/images/pizza-veggie.jpg",
    category: "vegetarian",
    rating: 4.7,
    reviews: 167,
    orders: 654,
  },
]

export const drinks: Drink[] = [
  {
    id: "cola",
    name: { en: "Coca-Cola", nl: "Coca-Cola" },
    description: {
      en: "The classic refreshing cola drink. Ice-cold and perfect with any pizza.",
      nl: "De klassieke verfrissende cola drank. IJskoud en perfect bij elke pizza.",
    },
    price: 2.50,
    image: "/images/drink-cola.jpg",
    category: "soft",
    volume: "330ml",
    rating: 4.7,
    reviews: 234,
    orders: 3421,
  },
  {
    id: "sprite",
    name: { en: "Sprite", nl: "Sprite" },
    description: {
      en: "Crisp lemon-lime soda that refreshes. A perfect palate cleanser.",
      nl: "Frisse citroen-limoen frisdrank die verfrist. Een perfecte smaakverfrissing.",
    },
    price: 2.50,
    image: "/images/drink-sprite.jpg",
    category: "soft",
    volume: "330ml",
    rating: 4.5,
    reviews: 178,
    orders: 2134,
  },
  {
    id: "water",
    name: { en: "Mineral Water", nl: "Mineraalwater" },
    description: {
      en: "Pure sparkling mineral water from the Italian Alps. Naturally refreshing.",
      nl: "Puur bruisend mineraalwater uit de Italiaanse Alpen. Natuurlijk verfrissend.",
    },
    price: 2.00,
    image: "/images/drink-water.jpg",
    category: "soft",
    volume: "500ml",
    rating: 4.8,
    reviews: 312,
    orders: 4532,
  },
  {
    id: "orange-juice",
    name: { en: "Fresh Orange Juice", nl: "Verse Sinaasappelsap" },
    description: {
      en: "Freshly squeezed orange juice. Vitamin-packed and delicious.",
      nl: "Vers geperst sinaasappelsap. Vol vitamines en heerlijk.",
    },
    price: 3.50,
    image: "/images/drink-orange.jpg",
    category: "juice",
    volume: "300ml",
    rating: 4.9,
    reviews: 267,
    orders: 1876,
  },
  {
    id: "beer",
    name: { en: "Italian Craft Beer", nl: "Italiaans Ambachtelijk Bier" },
    description: {
      en: "Premium Italian craft lager. The perfect companion for pizza night.",
      nl: "Premium Italiaans ambachtelijk pils. De perfecte metgezel voor pizza-avond.",
    },
    price: 4.50,
    image: "/images/drink-beer.jpg",
    category: "alcohol",
    volume: "330ml",
    rating: 4.6,
    reviews: 189,
    orders: 1234,
  },
  {
    id: "wine",
    name: { en: "House Red Wine", nl: "Huiswijn Rood" },
    description: {
      en: "Smooth Italian red wine. Full-bodied with notes of cherry and oak.",
      nl: "Zachte Italiaanse rode wijn. Vol van smaak met tonen van kers en eik.",
    },
    price: 5.50,
    image: "/images/drink-wine.jpg",
    category: "alcohol",
    volume: "175ml",
    rating: 4.8,
    reviews: 156,
    orders: 987,
  },
]

export const getSizePrice = (pizza: Pizza, size: "small" | "medium" | "large") => {
  return pizza.price[size]
}
