import Image from "next/image"
import Link from "next/link"
import { Settings, LogOut, Heart, Star, Clock, Film, Edit } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import MovieCard from "@/components/movie-card"

// Mock data for user's watchlist
const watchlistMovies = [
  {
    id: "1",
    title: "Dune: Part Two",
    image: "/placeholder.svg?height=450&width=300",
    rating: 8.7,
    year: 2024,
    genre: "Sci-Fi",
  },
  {
    id: "2",
    title: "Oppenheimer",
    image: "/placeholder.svg?height=450&width=300",
    rating: 8.5,
    year: 2023,
    genre: "Biography",
  },
  {
    id: "3",
    title: "Poor Things",
    image: "/placeholder.svg?height=450&width=300",
    rating: 8.3,
    year: 2023,
    genre: "Comedy",
  },
  {
    id: "4",
    title: "The Holdovers",
    image: "/placeholder.svg?height=450&width=300",
    rating: 8.0,
    year: 2023,
    genre: "Drama",
  },
]

// Mock data for user's rated movies
const ratedMovies = [
  {
    id: "5",
    title: "Blade Runner 2049",
    image: "/placeholder.svg?height=450&width=300",
    rating: 9.0,
    userRating: 5,
    year: 2017,
    genre: "Sci-Fi",
  },
  {
    id: "6",
    title: "Arrival",
    image: "/placeholder.svg?height=450&width=300",
    rating: 7.9,
    userRating: 4,
    year: 2016,
    genre: "Sci-Fi",
  },
  {
    id: "7",
    title: "Interstellar",
    image: "/placeholder.svg?height=450&width=300",
    rating: 8.6,
    userRating: 5,
    year: 2014,
    genre: "Sci-Fi",
  },
  {
    id: "8",
    title: "The Martian",
    image: "/placeholder.svg?height=450&width=300",
    rating: 8.0,
    userRating: 4,
    year: 2015,
    genre: "Sci-Fi",
  },
]

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Profile Header */}
      <section className="bg-gray-900 py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <Avatar className="w-24 h-24 border-4 border-yellow-500">
              <AvatarImage src="/placeholder.svg?height=96&width=96" alt="User" />
              <AvatarFallback className="bg-gray-800 text-xl">JD</AvatarFallback>
            </Avatar>
            <div className="flex-1 text-center md:text-left">
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <h1 className="text-3xl font-bold">John Doe</h1>
                <div className="flex justify-center md:justify-start gap-2">
                  <Button variant="outline" size="sm" className="h-8 border-gray-700">
                    <Edit className="h-3.5 w-3.5 mr-1" />
                    Edit Profile
                  </Button>
                  <Button variant="outline" size="sm" className="h-8 border-gray-700">
                    <Settings className="h-3.5 w-3.5 mr-1" />
                    Settings
                  </Button>
                </div>
              </div>
              <p className="text-gray-400 mt-1">Member since January 2023</p>
              <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold">42</div>
                  <div className="text-sm text-gray-400">Movies Rated</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">16</div>
                  <div className="text-sm text-gray-400">Watchlist</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">87</div>
                  <div className="text-sm text-gray-400">Movies Watched</div>
                </div>
              </div>
            </div>
            <Button variant="outline" size="sm" className="h-8 border-gray-700 md:self-start">
              <LogOut className="h-3.5 w-3.5 mr-1" />
              Sign Out
            </Button>
          </div>
        </div>
      </section>

      {/* Profile Content */}
      <section className="container py-12">
        <Tabs defaultValue="watchlist" className="w-full">
          <TabsList className="bg-gray-900 border-b border-gray-800 w-full justify-start mb-6">
            <TabsTrigger value="watchlist" className="data-[state=active]:text-yellow-500">
              <Heart className="h-4 w-4 mr-2" />
              Watchlist
            </TabsTrigger>
            <TabsTrigger value="ratings" className="data-[state=active]:text-yellow-500">
              <Star className="h-4 w-4 mr-2" />
              Ratings
            </TabsTrigger>
            <TabsTrigger value="history" className="data-[state=active]:text-yellow-500">
              <Clock className="h-4 w-4 mr-2" />
              Watch History
            </TabsTrigger>
            <TabsTrigger value="recommendations" className="data-[state=active]:text-yellow-500">
              <Film className="h-4 w-4 mr-2" />
              Recommendations
            </TabsTrigger>
          </TabsList>

          <TabsContent value="watchlist" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">My Watchlist</h2>
              <Button variant="link" className="text-yellow-500">
                View All
              </Button>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {watchlistMovies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="ratings" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">My Ratings</h2>
              <Button variant="link" className="text-yellow-500">
                View All
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {ratedMovies.map((movie) => (
                <div key={movie.id} className="bg-gray-900 rounded-lg overflow-hidden flex">
                  <Link href={`/movies/${movie.id}`} className="shrink-0">
                    <Image
                      src={movie.image || "/placeholder.svg"}
                      alt={movie.title}
                      width={100}
                      height={150}
                      className="h-full object-cover"
                    />
                  </Link>
                  <div className="p-4 flex flex-col justify-between flex-1">
                    <div>
                      <Link href={`/movies/${movie.id}`} className="font-medium hover:text-yellow-500">
                        {movie.title}
                      </Link>
                      <div className="text-sm text-gray-400 mt-1">
                        {movie.year} • {movie.genre}
                      </div>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className={`h-5 w-5 ${
                              star <= movie.userRating ? "text-yellow-500 fill-yellow-500" : "text-gray-600"
                            }`}
                          />
                        ))}
                      </div>
                      <div className="text-sm text-gray-400">Rated on May 12, 2023</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="history" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Watch History</h2>
              <Button variant="link" className="text-yellow-500">
                View All
              </Button>
            </div>
            <div className="bg-gray-900 rounded-lg p-6">
              <div className="text-center py-8">
                <Film className="h-12 w-12 mx-auto text-gray-600 mb-4" />
                <h3 className="text-xl font-medium mb-2">Connect Your Streaming Services</h3>
                <p className="text-gray-400 max-w-md mx-auto mb-6">
                  Link your streaming accounts to automatically track your watch history and get better recommendations.
                </p>
                <Button className="bg-yellow-500 hover:bg-yellow-600 text-black">Connect Services</Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="recommendations" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Your Recommendations</h2>
              <Button variant="link" className="text-yellow-500">
                Refresh
              </Button>
            </div>
            <div className="bg-gray-900 rounded-lg p-6">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-3">Based on your ratings</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {watchlistMovies.slice(0, 6).map((movie) => (
                      <MovieCard key={movie.id} movie={movie} showActions={false} />
                    ))}
                  </div>
                </div>
                <Separator className="bg-gray-800" />
                <div>
                  <h3 className="text-lg font-medium mb-3">Because you watched "Dune: Part Two"</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {ratedMovies.slice(0, 6).map((movie) => (
                      <MovieCard key={movie.id} movie={movie} showActions={false} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* Stats Section */}
      <section className="container py-12">
        <h2 className="text-2xl font-bold mb-6">Your Movie Stats</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-900 rounded-lg p-6 space-y-6">
            <h3 className="text-lg font-medium">Favorite Genres</h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Sci-Fi</span>
                  <span>65%</span>
                </div>
                <Progress value={65} className="h-2 bg-gray-700" />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Drama</span>
                  <span>45%</span>
                </div>
                <Progress value={45} className="h-2 bg-gray-700" />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Action</span>
                  <span>30%</span>
                </div>
                <Progress value={30} className="h-2 bg-gray-700" />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Comedy</span>
                  <span>25%</span>
                </div>
                <Progress value={25} className="h-2 bg-gray-700" />
              </div>
            </div>
          </div>
          <div className="bg-gray-900 rounded-lg p-6 space-y-6">
            <h3 className="text-lg font-medium">Watching Activity</h3>
            <div className="grid grid-cols-7 gap-2">
              {Array.from({ length: 35 }).map((_, i) => (
                <div
                  key={i}
                  className={`aspect-square rounded-sm ${
                    [3, 8, 12, 15, 22, 27, 30].includes(i)
                      ? "bg-yellow-500"
                      : [5, 10, 18, 25].includes(i)
                        ? "bg-yellow-700"
                        : "bg-gray-800"
                  }`}
                  title={`${[3, 5, 8, 10, 12, 15, 18, 22, 25, 27, 30].includes(i) ? "Watched a movie" : "No activity"}`}
                />
              ))}
            </div>
            <div className="flex items-center justify-between text-sm text-gray-400">
              <span>Last 5 Weeks</span>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 bg-yellow-500 rounded-sm" />
                  <span>1 movie</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 bg-yellow-700 rounded-sm" />
                  <span>2+ movies</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
