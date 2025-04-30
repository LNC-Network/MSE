import Image from "next/image"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import RecommendationForm from "@/components/recommendation-form"
import MovieCard from "@/components/movie-card"

// Mock data for recommended movies
const recommendedMovies = [
  {
    id: "1",
    title: "Blade Runner 2049",
    image: "/placeholder.svg?height=450&width=300",
    rating: 8.0,
    year: 2017,
    genre: "Sci-Fi",
  },
  {
    id: "2",
    title: "Arrival",
    image: "/placeholder.svg?height=450&width=300",
    rating: 7.9,
    year: 2016,
    genre: "Sci-Fi",
  },
  {
    id: "3",
    title: "Ex Machina",
    image: "/placeholder.svg?height=450&width=300",
    rating: 7.7,
    year: 2014,
    genre: "Sci-Fi",
  },
  {
    id: "4",
    title: "Her",
    image: "/placeholder.svg?height=450&width=300",
    rating: 8.0,
    year: 2013,
    genre: "Drama",
  },
  {
    id: "5",
    title: "Interstellar",
    image: "/placeholder.svg?height=450&width=300",
    rating: 8.6,
    year: 2014,
    genre: "Sci-Fi",
  },
  {
    id: "6",
    title: "The Martian",
    image: "/placeholder.svg?height=450&width=300",
    rating: 8.0,
    year: 2015,
    genre: "Sci-Fi",
  },
]

export default function RecommendationsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black z-0" />
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold">Personalized Movie Recommendations</h1>
            <p className="text-lg text-gray-300">
              Tell us what you like, and we'll suggest movies tailored just for you.
            </p>
          </div>
        </div>
      </section>

      {/* Recommendation Form */}
      <section className="container py-12">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <RecommendationForm />

          <div className="space-y-8">
            <div className="bg-gray-900 p-6 rounded-lg space-y-4">
              <h3 className="text-xl font-semibold">Why Our Recommendations Work</h3>
              <p className="text-gray-300">
                Our advanced algorithm analyzes thousands of movies and user preferences to find the perfect matches for
                your taste.
              </p>
              <div className="grid gap-4">
                <div className="flex gap-3">
                  <div className="bg-yellow-500 text-black rounded-full w-8 h-8 flex items-center justify-center font-bold shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="font-medium">Smart Matching</h4>
                    <p className="text-sm text-gray-400">We analyze your preferences and viewing history</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="bg-yellow-500 text-black rounded-full w-8 h-8 flex items-center justify-center font-bold shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="font-medium">Deep Analysis</h4>
                    <p className="text-sm text-gray-400">We look beyond genres to themes, directors, and more</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="bg-yellow-500 text-black rounded-full w-8 h-8 flex items-center justify-center font-bold shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="font-medium">Continuous Learning</h4>
                    <p className="text-sm text-gray-400">Our system gets better with every recommendation</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg space-y-4">
              <h3 className="text-xl font-semibold">What Users Say</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-yellow-500 pl-4">
                  <p className="italic text-gray-300">
                    "I discovered so many hidden gems I would have never found on my own. The recommendations are spot
                    on!"
                  </p>
                  <p className="text-sm text-gray-400 mt-2">— Sarah T.</p>
                </div>
                <div className="border-l-4 border-yellow-500 pl-4">
                  <p className="italic text-gray-300">
                    "Finally, an algorithm that understands my taste in movies. Every recommendation feels personally
                    curated."
                  </p>
                  <p className="text-sm text-gray-400 mt-2">— Michael K.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Separator className="bg-gray-800" />

      {/* Sample Recommendations */}
      <section className="container py-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold">Sample Recommendations</h2>
          <Button variant="link" className="text-yellow-500">
            <span>View More</span>
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {recommendedMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="container py-12">
        <h2 className="text-2xl font-bold mb-8 text-center">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-900 p-6 rounded-lg text-center space-y-4">
            <div className="bg-yellow-500 text-black rounded-full w-12 h-12 flex items-center justify-center font-bold mx-auto">
              1
            </div>
            <h3 className="text-xl font-semibold">Tell Us What You Like</h3>
            <p className="text-gray-300">
              Fill out our quick questionnaire about your movie preferences, favorite genres, and viewing habits.
            </p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg text-center space-y-4">
            <div className="bg-yellow-500 text-black rounded-full w-12 h-12 flex items-center justify-center font-bold mx-auto">
              2
            </div>
            <h3 className="text-xl font-semibold">Our Algorithm Works</h3>
            <p className="text-gray-300">
              Our advanced recommendation engine analyzes your preferences and matches them with our extensive movie
              database.
            </p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg text-center space-y-4">
            <div className="bg-yellow-500 text-black rounded-full w-12 h-12 flex items-center justify-center font-bold mx-auto">
              3
            </div>
            <h3 className="text-xl font-semibold">Discover Great Movies</h3>
            <p className="text-gray-300">
              Get a personalized list of movie recommendations that match your unique taste and preferences.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container py-12 bg-gradient-to-r from-gray-900 to-black rounded-lg">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">Ready to Find Your Next Favorite Movie?</h2>
            <p className="text-gray-300">
              Create an account to save your preferences and get personalized recommendations anytime.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-black">Sign Up Now</Button>
              <Button variant="outline" className="border-yellow-500 text-yellow-500 hover:bg-yellow-500/10">
                Learn More
              </Button>
            </div>
          </div>
          <div className="relative h-64">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Movie collage"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
