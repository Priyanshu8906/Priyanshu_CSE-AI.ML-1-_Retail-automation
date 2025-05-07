"use client"
import { useState, useEffect } from "react"
import {
  ArrowRight,
  Bot,
  Cpu,
  Database,
  ShoppingCart,
  Store,
  Zap,
  Menu,
  X,
  ChevronRight,
  MapPin,
  ShoppingBag,
  Search,
  User,
  Heart,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import AIAssistant from "@/components/ai-assistant"
import ProductCard from "@/components/product-card"
import StoreCard from "@/components/store-card"

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [cartCount, setCartCount] = useState(0)
  const [showAI, setShowAI] = useState(false)

  // Simulate loading products
  const [products, setProducts] = useState([])
  const [stores, setStores] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate fetching products
    setTimeout(() => {
      setProducts([
        // Hardware Products
        {
          id: 1,
          name: "Smart Self-Checkout Kiosk",
          price: 2499.99,
          icon: "ShoppingCart",
          category: "Hardware",
          rating: 4.8,
          stock: 12,
        },
        {
          id: 2,
          name: "RFID Inventory Scanner",
          price: 349.99,
          icon: "ScanLine",
          category: "Hardware",
          rating: 4.7,
          stock: 35,
        },
        {
          id: 3,
          name: "Smart Shelf System",
          price: 1299.99,
          icon: "LayoutGrid",
          category: "Hardware",
          rating: 4.5,
          stock: 8,
        },
        {
          id: 4,
          name: "Interactive Digital Signage",
          price: 1899.99,
          icon: "MonitorSmartphone",
          category: "Hardware",
          rating: 4.6,
          stock: 15,
        },
        {
          id: 5,
          name: "Automated Inventory Robot",
          price: 3499.99,
          icon: "Bot",
          category: "Hardware",
          rating: 4.9,
          stock: 5,
        },

        // Software Products
        {
          id: 6,
          name: "AI Customer Service Bot",
          price: 999.99,
          icon: "MessageSquare",
          category: "Software",
          rating: 4.6,
          stock: 50,
        },
        {
          id: 7,
          name: "Retail Analytics Dashboard",
          price: 199.99,
          icon: "BarChart",
          category: "Software",
          rating: 4.9,
          stock: 100,
        },
        {
          id: 8,
          name: "Customer Behavior Analytics",
          price: 149.99,
          icon: "Users",
          category: "Software",
          rating: 4.4,
          stock: 200,
        },
        {
          id: 9,
          name: "Inventory Management System",
          price: 299.99,
          icon: "PackageCheck",
          category: "Software",
          rating: 4.7,
          stock: 75,
        },
        {
          id: 10,
          name: "Omnichannel POS Software",
          price: 399.99,
          icon: "Wallet",
          category: "Software",
          rating: 4.8,
          stock: 60,
        },

        // Services
        {
          id: 11,
          name: "Retail Automation Consultation",
          price: 1500.0,
          icon: "Lightbulb",
          category: "Services",
          rating: 4.9,
          stock: 20,
        },
        {
          id: 12,
          name: "Store Layout Optimization",
          price: 2500.0,
          icon: "LayoutPanelTop",
          category: "Services",
          rating: 4.7,
          stock: 15,
        },
        {
          id: 13,
          name: "Staff Training Program",
          price: 999.99,
          icon: "GraduationCap",
          category: "Services",
          rating: 4.8,
          stock: 30,
        },
        {
          id: 14,
          name: "System Integration Service",
          price: 3999.99,
          icon: "Combine",
          category: "Services",
          rating: 4.9,
          stock: 10,
        },
        {
          id: 15,
          name: "Maintenance & Support Plan",
          price: 799.99,
          icon: "Wrench",
          category: "Services",
          rating: 4.6,
          stock: 100,
        },
      ])

      setStores([
        {
          id: 1,
          name: "RetailTech Flagship Store",
          address: "123 Innovation Ave, San Francisco, CA",
          image: "/placeholder.svg?height=200&width=300",
          hours: "9:00 AM - 9:00 PM",
          phone: "(555) 123-4567",
        },
        {
          id: 2,
          name: "RetailTech NYC",
          address: "456 Tech Square, New York, NY",
          image: "/placeholder.svg?height=200&width=300",
          hours: "8:00 AM - 8:00 PM",
          phone: "(555) 987-6543",
        },
        {
          id: 3,
          name: "RetailTech Chicago",
          address: "789 Retail Row, Chicago, IL",
          image: "/placeholder.svg?height=200&width=300",
          hours: "9:00 AM - 7:00 PM",
          phone: "(555) 456-7890",
        },
        {
          id: 4,
          name: "RetailTech Seattle",
          address: "321 Innovation Blvd, Seattle, WA",
          image: "/placeholder.svg?height=200&width=300",
          hours: "8:30 AM - 8:30 PM",
          phone: "(555) 234-5678",
        },
        {
          id: 5,
          name: "RetailTech Austin",
          address: "567 Tech Park, Austin, TX",
          image: "/placeholder.svg?height=200&width=300",
          hours: "9:00 AM - 8:00 PM",
          phone: "(555) 345-6789",
        },
        {
          id: 6,
          name: "RetailTech Miami",
          address: "890 Retail Drive, Miami, FL",
          image: "/placeholder.svg?height=200&width=300",
          hours: "10:00 AM - 9:00 PM",
          phone: "(555) 567-8901",
        },
        {
          id: 7,
          name: "RetailTech Boston",
          address: "432 Innovation Street, Boston, MA",
          image: "/placeholder.svg?height=200&width=300",
          hours: "9:00 AM - 7:30 PM",
          phone: "(555) 678-9012",
        },
        {
          id: 8,
          name: "RetailTech Denver",
          address: "765 Tech Avenue, Denver, CO",
          image: "/placeholder.svg?height=200&width=300",
          hours: "8:00 AM - 7:00 PM",
          phone: "(555) 789-0123",
        },
        {
          id: 9,
          name: "RetailTech Atlanta",
          address: "987 Retail Plaza, Atlanta, GA",
          image: "/placeholder.svg?height=200&width=300",
          hours: "9:00 AM - 8:00 PM",
          phone: "(555) 890-1234",
        },
      ])

      setLoading(false)
    }, 1000)
  }, [])

  const addToCart = () => {
    setCartCount((prev) => prev + 1)
  }

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setMobileMenuOpen(false)
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex gap-2 items-center text-xl font-bold">
            <Store className="h-6 w-6 text-primary" />
            <span>RetailTech</span>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <button
              onClick={() => scrollToSection("products")}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md px-2 py-1"
            >
              Products
            </button>
            <button
              onClick={() => scrollToSection("stores")}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md px-2 py-1"
            >
              Stores
            </button>
            <button
              onClick={() => scrollToSection("solutions")}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md px-2 py-1"
            >
              Solutions
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md px-2 py-1"
            >
              Contact
            </button>

            <div className="flex items-center gap-4">
              <button className="relative p-2 rounded-full bg-muted/50 hover:bg-muted transition-colors">
                <Search className="h-5 w-5" />
              </button>
              <button className="relative p-2 rounded-full bg-muted/50 hover:bg-muted transition-colors">
                <User className="h-5 w-5" />
              </button>
              <button className="relative p-2 rounded-full bg-muted/50 hover:bg-muted transition-colors">
                <Heart className="h-5 w-5" />
              </button>
              <button className="relative p-2 rounded-full bg-muted/50 hover:bg-muted transition-colors">
                <ShoppingBag className="h-5 w-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-medium text-primary-foreground">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </nav>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-background border-b">
            <div className="container py-4 space-y-3">
              <button
                onClick={() => scrollToSection("products")}
                className="block w-full text-left px-4 py-2 text-sm font-medium text-foreground hover:bg-muted rounded-md"
              >
                Products
              </button>
              <button
                onClick={() => scrollToSection("stores")}
                className="block w-full text-left px-4 py-2 text-sm font-medium text-foreground hover:bg-muted rounded-md"
              >
                Stores
              </button>
              <button
                onClick={() => scrollToSection("solutions")}
                className="block w-full text-left px-4 py-2 text-sm font-medium text-foreground hover:bg-muted rounded-md"
              >
                Solutions
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block w-full text-left px-4 py-2 text-sm font-medium text-foreground hover:bg-muted rounded-md"
              >
                Contact
              </button>
              <div className="flex items-center justify-between pt-3 border-t">
                <div className="flex gap-3">
                  <button className="p-2 rounded-full bg-muted/50">
                    <Search className="h-5 w-5" />
                  </button>
                  <button className="p-2 rounded-full bg-muted/50">
                    <User className="h-5 w-5" />
                  </button>
                  <button className="p-2 rounded-full bg-muted/50">
                    <Heart className="h-5 w-5" />
                  </button>
                </div>
                <button className="relative p-2 rounded-full bg-muted/50">
                  <ShoppingBag className="h-5 w-5" />
                  {cartCount > 0 && (
                    <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-medium text-primary-foreground">
                      {cartCount}
                    </span>
                  )}
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-br from-background to-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
                    Next-Gen Retail Technology
                  </div>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Shop Smart with RetailTech Solutions
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Browse our catalog of cutting-edge retail automation products, find a store near you, or get
                    real-time assistance from our AI.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row pt-4">
                  <Button
                    size="lg"
                    className="group shadow-lg hover:shadow-xl transition-all"
                    onClick={() => scrollToSection("products")}
                  >
                    Shop Now
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button size="lg" variant="outline" onClick={() => setShowAI(true)}>
                    <Bot className="mr-2 h-4 w-4" />
                    Get AI Help
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-[350px] w-[350px] sm:h-[400px] sm:w-[400px] lg:h-[450px] lg:w-[450px] xl:h-[550px] xl:w-[550px]">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-primary/10 rounded-full blur-[100px] opacity-50" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative h-[300px] w-[300px] sm:h-[350px] sm:w-[350px] lg:h-[400px] lg:w-[400px] xl:h-[500px] xl:w-[500px] rounded-2xl bg-background p-4 shadow-2xl border border-muted transition-all hover:shadow-primary/20">
                      <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                        <Store className="h-16 w-16 mb-4 text-primary" />
                        <h3 className="text-xl font-bold">Smart Retail Solutions</h3>
                        <p className="mt-2 text-sm text-muted-foreground">
                          Our technology transforms traditional stores into intelligent, efficient spaces
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="products" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
              <div className="space-y-2">
                <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">
                  Our Products
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Shop Our Retail Technology</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Browse our selection of cutting-edge retail automation products
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm">
                All
              </Button>
              <Button variant="ghost" size="sm">
                Hardware
              </Button>
              <Button variant="ghost" size="sm">
                Software
              </Button>
              <Button variant="ghost" size="sm">
                Services
              </Button>
            </div>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-2">
                <span className="text-sm text-muted-foreground">Sort by:</span>
                <select className="h-8 rounded-md border border-input px-3 py-1 text-sm bg-background">
                  <option>Featured</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Newest</option>
                </select>
              </div>
            </div>

            {loading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="rounded-xl border p-6 shadow-sm bg-background h-[350px] animate-pulse">
                    <div className="h-[180px] bg-muted rounded-lg mb-4"></div>
                    <div className="h-4 bg-muted rounded w-3/4 mb-2"></div>
                    <div className="h-4 bg-muted rounded w-1/2 mb-4"></div>
                    <div className="h-6 bg-muted rounded w-1/3 mb-4"></div>
                    <div className="h-10 bg-muted rounded"></div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
                ))}
              </div>
            )}

            <div className="flex justify-center mt-10">
              <Button variant="outline" className="gap-1">
                View All Products
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        <section id="stores" className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
              <div className="space-y-2">
                <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">
                  Our Locations
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Find a RetailTech Store Near You
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Visit one of our stores to experience our retail technology solutions in person
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center mb-8">
              <div className="relative w-full max-w-md">
                <Input type="text" placeholder="Enter your zip code or city" className="pr-10" />
                <Button size="sm" className="absolute right-1 top-1 h-7">
                  Find
                </Button>
              </div>
            </div>

            {loading ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="rounded-xl border p-6 shadow-sm bg-background h-[300px] animate-pulse">
                    <div className="h-[120px] bg-muted rounded-lg mb-4"></div>
                    <div className="h-4 bg-muted rounded w-3/4 mb-2"></div>
                    <div className="h-4 bg-muted rounded w-full mb-2"></div>
                    <div className="h-4 bg-muted rounded w-2/3 mb-2"></div>
                    <div className="h-4 bg-muted rounded w-1/2 mb-4"></div>
                    <div className="h-10 bg-muted rounded"></div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {stores.map((store) => (
                  <StoreCard key={store.id} store={store} />
                ))}
              </div>
            )}

            <div className="mt-10 p-6 rounded-xl border bg-background shadow-sm">
              <h3 className="text-xl font-bold mb-4">Store Locator</h3>
              <div className="aspect-video bg-muted rounded-lg overflow-hidden relative">
                <img
                  src="/placeholder.svg?height=400&width=800&text=RetailTech+Store+Locations"
                  alt="Store locations map"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-background/80 p-4 rounded-lg shadow-lg">
                    <MapPin className="h-8 w-8 mx-auto mb-2 text-primary" />
                    <p className="text-center font-medium">Find a store near you</p>
                    <p className="text-xs text-muted-foreground text-center mt-1">9 locations nationwide</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="solutions" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">
                  Retail Solutions
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Comprehensive Automation Solutions
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  From checkout to inventory management, our solutions cover every aspect of retail operations
                </p>
              </div>
            </div>
            <div className="grid gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="group flex flex-col space-y-4 rounded-xl border p-6 shadow-sm bg-background hover:shadow-md transition-all">
                <div className="flex items-center space-x-4">
                  <div className="rounded-full bg-primary/10 p-2">
                    <ShoppingCart className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Self-Checkout Systems</h3>
                </div>
                <p className="text-muted-foreground">
                  Streamline the checkout process with intuitive self-service kiosks that reduce wait times and improve
                  customer satisfaction. Our systems integrate seamlessly with existing POS solutions.
                </p>
                <button
                  className="flex items-center text-primary text-sm font-medium mt-2 group-hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md px-2 py-1 w-fit"
                  onClick={() => scrollToSection("products")}
                >
                  Shop self-checkout systems <ChevronRight className="ml-1 h-4 w-4" />
                </button>
              </div>
              <div className="group flex flex-col space-y-4 rounded-xl border p-6 shadow-sm bg-background hover:shadow-md transition-all">
                <div className="flex items-center space-x-4">
                  <div className="rounded-full bg-primary/10 p-2">
                    <Bot className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">AI-Powered Customer Support</h3>
                </div>
                <p className="text-muted-foreground">
                  Provide 24/7 assistance with intelligent chatbots and virtual assistants that can answer questions,
                  guide customers to products, and offer personalized recommendations.
                </p>
                <button
                  className="flex items-center text-primary text-sm font-medium mt-2 group-hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md px-2 py-1 w-fit"
                  onClick={() => scrollToSection("products")}
                >
                  Shop AI solutions <ChevronRight className="ml-1 h-4 w-4" />
                </button>
              </div>
              <div className="group flex flex-col space-y-4 rounded-xl border p-6 shadow-sm bg-background hover:shadow-md transition-all">
                <div className="flex items-center space-x-4">
                  <div className="rounded-full bg-primary/10 p-2">
                    <Database className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Smart Inventory Management</h3>
                </div>
                <p className="text-muted-foreground">
                  Monitor stock levels in real-time with smart shelves and RFID technology. Automatically generate
                  purchase orders when inventory runs low and optimize stock placement based on customer behavior.
                </p>
                <button
                  className="flex items-center text-primary text-sm font-medium mt-2 group-hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md px-2 py-1 w-fit"
                  onClick={() => scrollToSection("products")}
                >
                  Shop inventory solutions <ChevronRight className="ml-1 h-4 w-4" />
                </button>
              </div>
              <div className="group flex flex-col space-y-4 rounded-xl border p-6 shadow-sm bg-background hover:shadow-md transition-all">
                <div className="flex items-center space-x-4">
                  <div className="rounded-full bg-primary/10 p-2">
                    <Store className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Cashier-less Store Solutions</h3>
                </div>
                <p className="text-muted-foreground">
                  Create frictionless shopping experiences with advanced computer vision and sensor fusion technology
                  that allows customers to simply pick up items and walk out, with automatic payment processing.
                </p>
                <button
                  className="flex items-center text-primary text-sm font-medium mt-2 group-hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md px-2 py-1 w-fit"
                  onClick={() => scrollToSection("products")}
                >
                  Shop cashier-less solutions <ChevronRight className="ml-1 h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-primary/5 to-background">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-2">
              <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
                Get Started Today
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Ready to Transform Your Retail Business?
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Contact us today to schedule a demo and discover how our retail automation solutions can help you
                increase efficiency, reduce costs, and enhance customer experience.
              </p>
            </div>
            <div className="flex flex-col gap-4 rounded-xl border bg-background p-6 shadow-lg">
              <h3 className="text-xl font-bold">Contact Us</h3>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="grid gap-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="grid gap-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="flex min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Tell us about your needs"
                  />
                </div>
                <Button
                  className="w-full shadow-lg hover:shadow-xl transition-all"
                  onClick={() => alert("Thank you for your message! We'll get back to you soon.")}
                >
                  Send Message
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Trusted by Leading Retailers</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join hundreds of retailers who have transformed their businesses with our automation solutions
                </p>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-8 py-8">
                <div className="flex h-20 w-32 items-center justify-center rounded-lg bg-background p-4 shadow-sm border">
                  <Zap className="h-10 w-10 text-primary/50" />
                </div>
                <div className="flex h-20 w-32 items-center justify-center rounded-lg bg-background p-4 shadow-sm border">
                  <Store className="h-10 w-10 text-primary/50" />
                </div>
                <div className="flex h-20 w-32 items-center justify-center rounded-lg bg-background p-4 shadow-sm border">
                  <ShoppingCart className="h-10 w-10 text-primary/50" />
                </div>
                <div className="flex h-20 w-32 items-center justify-center rounded-lg bg-background p-4 shadow-sm border">
                  <Database className="h-10 w-10 text-primary/50" />
                </div>
                <div className="flex h-20 w-32 items-center justify-center rounded-lg bg-background p-4 shadow-sm border">
                  <Cpu className="h-10 w-10 text-primary/50" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex gap-2 items-center text-lg font-bold">
            <Store className="h-5 w-5 text-primary" />
            <span>RetailTech</span>
          </div>
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2023 RetailTech. All rights reserved.
          </p>
          <nav className="flex items-center space-x-4 text-sm">
            <button className="text-muted-foreground underline-offset-4 hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md px-2 py-1">
              Privacy
            </button>
            <button className="text-muted-foreground underline-offset-4 hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md px-2 py-1">
              Terms
            </button>
            <button className="text-muted-foreground underline-offset-4 hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md px-2 py-1">
              Contact
            </button>
          </nav>
        </div>
      </footer>

      {/* AI Assistant */}
      {showAI && <AIAssistant onClose={() => setShowAI(false)} />}
    </div>
  )
}
