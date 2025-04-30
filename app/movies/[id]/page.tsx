import Image from "next/image"
import Link from "next/link"
import { Star, Clock, Calendar, Film, Heart, Share2, Play } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import MovieCard from "@/components/movie-card"

// This would normally come from a database
const getMovie = (id: string) => {
  return {
    id,
    title: "Dune: Part Two",
    tagline: "Long live the fighters",
    image: "/placeholder.svg?height=600&width=400",
    backdrop: "/placeholder.svg?height=1080&width=1920",
    rating: 8.7,
    votes: 4823,
    year: 2024,
    runtime: 166,
    genres: ["Sci-Fi", "Adventure", "Drama"],
    director: "Denis Villeneuve",
    cast: [
      "Timothée Chalamet",
      "Zendaya",
      "Rebecca Ferguson",
      "Josh Brolin",
      "Austin Butler",
      "Florence Pugh",
      "Dave Bautista",
      "Christopher Walken",
      "Stellan Skarsgård",
      "Javier Bardem",
    ],
    description: `Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family. Facing a choice between the love of his life and the fate of the universe, he must prevent a terrible future only he can foresee.

The saga continues as the Atreides legacy unfolds, bringing Paul face-to-face with his destiny and the ancient prophecies that haunt his visions. As the political landscape of Arrakis shifts, Paul must navigate the complex web of power, betrayal, and his own evolving abilities.`,
    trailer: "https://www.youtube.com/watch?v=Way9Dexny3w",
  }
}

// This would normally come from a database
const getSimilarMovies = () => {
  return [
    {
      id: "2",
      title: "Blade Runner 2049",
      image: "/placeholder.svg?height=450&width=300",
      rating: 8.0,
      year: 2017,
      genre: "Sci-Fi",
    },
    {
      id: "3",
      title: "Arrival",
      image: "/placeholder.svg?height=450&width=300",
      rating: 7.9,
      year: 2016,
      genre: "Sci-Fi",
    },
    {
      id: "4",
      title: "Interstellar",
      image: "/placeholder.svg?height=450&width=300",
      rating: 8.6,
      year: 2014,
      genre: "Sci-Fi",
    },
    {
      id: "5",
      title: "Foundation",
      image: "/placeholder.svg?height=450&width=300",
      rating: 7.5,
      year: 2021,
      genre: "Sci-Fi",
    },
  ]
}

export default function MoviePage({ params }: { params: { id: string } }) {
  const movie = getMovie(params.id)
  const similarMovies = getSimilarMovies()

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Movie Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent z-10" />
        <Image
          src={movie.backdrop || "/placeholder.svg"}
          alt={movie.title}
          width={1920}
          height={1080}
          className="w-full h-[70vh] object-cover"
          priority
        />
        <div className="container relative z-20 -mt-80">
          <div className="grid md:grid-cols-[300px_1fr] gap-8 items-end">
            <div className="hidden md:block">
              <div className="rounded-lg overflow-hidden border-2 border-gray-800 shadow-xl">
                <Image
                  src={movie.image || "/placeholder.svg"}
                  alt={movie.title}
                  width={300}
                  height={450}
                  className="w-full aspect-[2/3] object-cover"
                />
              </div>
            </div>
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold">{movie.title}</h1>
              <p className="text-xl text-gray-400 italic">{movie.tagline}</p>
              <div className="flex flex-wrap gap-2">
                {movie.genres.map((genre) => (
                  <Badge key={genre} variant="outline" className="border-yellow-500 text-yellow-500">
                    {genre}
                  </Badge>
                ))}
              </div>
              <div className="flex flex-wrap items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                  <div>
                    <span className="font-bold text-lg">{movie.rating}</span>
                    <span className="text-gray-400">/10</span>
                    <span className="text-gray-400 ml-1">({movie.votes})</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <Clock className="h-4 w-4" />
                  <span>
                    {Math.floor(movie.runtime / 60)}h {movie.runtime % 60}m
                  </span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <Calendar className="h-4 w-4" />
                  <span>{movie.year}</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-3 pt-2">
                <Button className="bg-yellow-500 hover:bg-yellow-600 text-black">
                  <Play className="mr-2 h-4 w-4 fill-black" />
                  Watch Now
                </Button>
                <Button variant="outline" className="border-gray-700">
                  <Heart className="mr-2 h-4 w-4" />
                  Add to Watchlist
                </Button>
                <Button variant="outline" className="border-gray-700">
                  <Share2 className="mr-2 h-4 w-4" />
                  Share
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Movie Content */}
      <section className="container py-12">
        <div className="grid md:grid-cols-[300px_1fr] gap-8">
          <div className="md:hidden">
            <div className="rounded-lg overflow-hidden border-2 border-gray-800 shadow-xl">
              <Image
                src={movie.image || "/placeholder.svg"}
                alt={movie.title}
                width={300}
                height={450}
                className="w-full aspect-[2/3] object-cover"
              />
            </div>
          </div>
          <div className="space-y-8">
            <div className="md:hidden space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">Director</h3>
                <p>{movie.director}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Cast</h3>
                <div className="flex flex-wrap gap-2">
                  {movie.cast.slice(0, 5).map((actor) => (
                    <Badge key={actor} className="bg-gray-800">
                      {actor}
                    </Badge>
                  ))}
                  {movie.cast.length > 5 && <Badge className="bg-gray-800">+{movie.cast.length - 5} more</Badge>}
                </div>
              </div>
            </div>

            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="bg-gray-900 border-b border-gray-800 w-full justify-start mb-6">
                <TabsTrigger value="overview" className="data-[state=active]:text-yellow-500">
                  Overview
                </TabsTrigger>
                <TabsTrigger value="reviews" className="data-[state=active]:text-yellow-500">
                  Reviews
                </TabsTrigger>
                <TabsTrigger value="media" className="data-[state=active]:text-yellow-500">
                  Media
                </TabsTrigger>
              </TabsList>
              <TabsContent value="overview" className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Synopsis</h3>
                  <div className="text-gray-300 space-y-4">
                    {movie.description.split("\n\n").map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">Trailer</h3>
                  <div className="aspect-video bg-gray-900 rounded-lg flex items-center justify-center">
                    <Link href={movie.trailer} target="_blank" className="flex items-center gap-2">
                      <Film className="h-8 w-8" />
                      <span>Watch on YouTube</span>
                    </Link>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="reviews" className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="text-center">
                    <div className="text-5xl font-bold text-yellow-500">{movie.rating}</div>
                    <div className="text-sm text-gray-400">{movie.votes} votes</div>
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="text-sm w-6">5★</div>
                      <Progress value={70} className="h-2 bg-gray-700" />
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="text-sm w-6">4★</div>
                      <Progress value={20} className="h-2 bg-gray-700" />
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="text-sm w-6">3★</div>
                      <Progress value={7} className="h-2 bg-gray-700" />
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="text-sm w-6">2★</div>
                      <Progress value={2} className="h-2 bg-gray-700" />
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="text-sm w-6">1★</div>
                      <Progress value={1} className="h-2 bg-gray-700" />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-gray-900 p-4 rounded-lg">
                    <div className="flex justify-between mb-2">
                      <div className="font-semibold">MovieFan2000</div>
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className={`h-4 w-4 ${star <= 5 ? "text-yellow-500 fill-yellow-500" : "text-gray-600"}`}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-300 text-sm">
                      Villeneuve has done it again! This sequel expands on the first film in every way possible. The
                      visuals are breathtaking, the sound design is immersive, and the performances are stellar across
                      the board.
                    </p>
                  </div>
                  <div className="bg-gray-900 p-4 rounded-lg">
                    <div className="flex justify-between mb-2">
                      <div className="font-semibold">SciFiLover</div>
                      <div className="flex">
                        {[1, 2, 3, 4].map((star) => (
                          <Star
                            key={star}
                            className={`h-4 w-4 ${star <= 4 ? "text-yellow-500 fill-yellow-500" : "text-gray-600"}`}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-300 text-sm">
                      A worthy continuation of the epic saga. The world-building is incredible, and the political
                      intrigue adds layers to the story. My only criticism is that some characters could have been
                      developed more.
                    </p>
                  </div>
                </div>

                <Button variant="outline" className="w-full border-gray-700">
                  Load More Reviews
                </Button>
              </TabsContent>
              <TabsContent value="media" className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Photos</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[1, 2, 3, 4].map((photo) => (
                      <div key={photo} className="rounded-lg overflow-hidden">
                        <Image
                          src={`/placeholder.svg?height=200&width=300`}
                          alt={`${movie.title} scene ${photo}`}
                          width={300}
                          height={200}
                          className="w-full aspect-video object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Videos</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[1, 2].map((video) => (
                      <div
                        key={video}
                        className="rounded-lg overflow-hidden bg-gray-900 aspect-video flex items-center justify-center"
                      >
                        <Link href="#" className="flex items-center gap-2">
                          <Play className="h-8 w-8" />
                          <span>{video === 1 ? "Official Trailer" : "Behind the Scenes"}</span>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          <div className="hidden md:block space-y-8">
            <div>
              <h3 className="text-lg font-semibold mb-2">Director</h3>
              <p>{movie.director}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Cast</h3>
              <div className="space-y-2">
                {movie.cast.map((actor) => (
                  <div key={actor} className="text-gray-300">
                    {actor}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Where to Watch</h3>
              <div className="grid grid-cols-3 gap-2">
                <Button variant="outline" className="border-gray-700 h-12">
                  <Image
                    src="/placeholder.svg?height=30&width=30"
                    alt="Netflix"
                    width={30}
                    height={30}
                    className="rounded-full"
                  />
                </Button>
                <Button variant="outline" className="border-gray-700 h-12">
                  <Image
                    src="/placeholder.svg?height=30&width=30"
                    alt="Amazon"
                    width={30}
                    height={30}
                    className="rounded-full"
                  />
                </Button>
                <Button variant="outline" className="border-gray-700 h-12">
                  <Image
                    src="/placeholder.svg?height=30&width=30"
                    alt="HBO"
                    width={30}
                    height={30}
                    className="rounded-full"
                  />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Similar Movies */}
      <section className="container py-12">
        <h2 className="text-2xl font-bold mb-6">Similar Movies</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {similarMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </div>
  )
}
