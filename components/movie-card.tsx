import Link from "next/link"
import Image from "next/image"
import { Star, Heart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface Movie {
  id: string
  title: string
  image: string
  rating: number
  year: number
  genre: string
}

interface MovieCardProps {
  movie: Movie
  showActions?: boolean
}

export default function MovieCard({ movie, showActions = true }: MovieCardProps) {
  return (
    <Card className="overflow-hidden bg-gray-900 border-gray-800 transition-all hover:scale-105 hover:shadow-lg hover:shadow-black/20">
      <Link href={`/movies/${movie.id}`} className="relative block">
        <div className="aspect-[2/3] relative">
          <Image src={movie.image || "/placeholder.svg"} alt={movie.title} fill className="object-cover" />
        </div>
        <div className="absolute top-2 right-2 bg-black/70 rounded-full p-1.5 flex items-center gap-1">
          <Star className="h-3 w-3 fill-yellow-500 text-yellow-500" />
          <span className="text-xs font-medium">{movie.rating.toFixed(1)}</span>
        </div>
      </Link>
      <CardContent className="p-3">
        <Link href={`/movies/${movie.id}`} className="font-medium line-clamp-1 hover:text-yellow-500">
          {movie.title}
        </Link>
        <div className="flex items-center justify-between mt-1 text-xs text-gray-400">
          <span>{movie.year}</span>
          <span>{movie.genre}</span>
        </div>
        {showActions && (
          <div className="flex items-center gap-2 mt-3">
            <Button size="sm" variant="secondary" className="w-full text-xs h-8 bg-gray-800 hover:bg-gray-700">
              <Heart className="h-3.5 w-3.5 mr-1" />
              Watchlist
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
