"use client"

import { useState } from "react"
import {
  ShoppingCart,
  Heart,
  Star,
  ScanLine,
  LayoutGrid,
  MonitorSmartphone,
  Bot,
  MessageSquare,
  BarChart,
  Users,
  PackageCheck,
  Wallet,
  Lightbulb,
  LayoutPanelTop,
  GraduationCap,
  Combine,
  Wrench,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

// Update the Product interface to include icon instead of image
interface Product {
  id: number
  name: string
  price: number
  icon: string
  category: string
  rating: number
  stock: number
}

interface ProductCardProps {
  product: Product
  onAddToCart: () => void
}

export default function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  // Add this function before the return statement in the ProductCard component:
  const renderIcon = (iconName: string) => {
    const iconSize = "h-16 w-16 text-primary/70"

    switch (iconName) {
      case "ShoppingCart":
        return <ShoppingCart className={iconSize} />
      case "ScanLine":
        return <ScanLine className={iconSize} />
      case "LayoutGrid":
        return <LayoutGrid className={iconSize} />
      case "MonitorSmartphone":
        return <MonitorSmartphone className={iconSize} />
      case "Bot":
        return <Bot className={iconSize} />
      case "MessageSquare":
        return <MessageSquare className={iconSize} />
      case "BarChart":
        return <BarChart className={iconSize} />
      case "Users":
        return <Users className={iconSize} />
      case "PackageCheck":
        return <PackageCheck className={iconSize} />
      case "Wallet":
        return <Wallet className={iconSize} />
      case "Lightbulb":
        return <Lightbulb className={iconSize} />
      case "LayoutPanelTop":
        return <LayoutPanelTop className={iconSize} />
      case "GraduationCap":
        return <GraduationCap className={iconSize} />
      case "Combine":
        return <Combine className={iconSize} />
      case "Wrench":
        return <Wrench className={iconSize} />
      default:
        return <ShoppingCart className={iconSize} />
    }
  }

  return (
    <Card
      className="overflow-hidden transition-all duration-300 hover:shadow-md"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Replace the Image component in the ProductCard with this dynamic icon rendering: */}
      <div className="relative aspect-square overflow-hidden bg-muted/30 flex items-center justify-center">
        {renderIcon(product.icon)}
        <Badge className="absolute top-2 right-2 bg-primary">{product.category}</Badge>
        <button className="absolute top-2 left-2 h-8 w-8 rounded-full bg-white/80 flex items-center justify-center hover:bg-white transition-colors">
          <Heart className="h-4 w-4 text-muted-foreground hover:text-red-500 transition-colors" />
        </button>
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg line-clamp-1">{product.name}</h3>
        <div className="flex items-center mt-1 mb-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < Math.floor(product.rating) ? "text-yellow-400 fill-yellow-400" : "text-muted-foreground"
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-muted-foreground ml-1">({product.rating})</span>
        </div>
        <div className="flex items-center justify-between">
          <p className="font-bold text-lg">${product.price.toFixed(2)}</p>
          <p className="text-xs text-muted-foreground">
            {product.stock > 10 ? "In Stock" : product.stock > 0 ? `Only ${product.stock} left` : "Out of Stock"}
          </p>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button className="w-full gap-2" onClick={onAddToCart} disabled={product.stock === 0}>
          <ShoppingCart className="h-4 w-4" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  )
}
