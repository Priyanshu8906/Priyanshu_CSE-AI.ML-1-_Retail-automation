import Image from "next/image"
import { MapPin, Phone, Clock, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

interface Store {
  id: number
  name: string
  address: string
  image: string
  hours: string
  phone: string
}

interface StoreCardProps {
  store: Store
}

export default function StoreCard({ store }: StoreCardProps) {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-md">
      <div className="relative h-48 overflow-hidden">
        <Image src={store.image || "/placeholder.svg"} alt={store.name} fill className="object-cover" />
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg">{store.name}</h3>
        <div className="mt-3 space-y-2">
          <div className="flex items-start gap-2">
            <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
            <p className="text-sm text-muted-foreground">{store.address}</p>
          </div>
          <div className="flex items-start gap-2">
            <Clock className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
            <p className="text-sm text-muted-foreground">{store.hours}</p>
          </div>
          <div className="flex items-start gap-2">
            <Phone className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
            <p className="text-sm text-muted-foreground">{store.phone}</p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex gap-2">
        <Button variant="outline" className="w-1/2">
          Call
        </Button>
        <Button className="w-1/2 gap-1">
          Directions
          <ExternalLink className="h-3 w-3" />
        </Button>
      </CardFooter>
    </Card>
  )
}
