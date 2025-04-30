import Link from "next/link";
import Image from "next/image";
import { Star, TrendingUp, Clock, Award } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MovieCard from "@/components/movie-card";
import RecommendationForm from "@/components/recommendation-form";

export default function Home() {
  // Mock data for new releases
  const newReleases = [
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
    {
      id: "5",
      title: "Killers of the Flower Moon",
      image: "/placeholder.svg?height=450&width=300",
      rating: 7.8,
      year: 2023,
      genre: "Crime",
    },
    {
      id: "6",
      title: "The Boy and the Heron",
      image: "/placeholder.svg?height=450&width=300",
      rating: 7.7,
      year: 2023,
      genre: "Animation",
    },
  ];

  // Mock data for trending movies
  const trendingMovies = [
    {
      id: "7",
      title: "Civil War",
      image: "/placeholder.svg?height=450&width=300",
      rating: 7.5,
      year: 2024,
      genre: "Action",
    },
    {
      id: "8",
      title: "Challengers",
      image: "/placeholder.svg?height=450&width=300",
      rating: 7.3,
      year: 2024,
      genre: "Drama",
    },
    {
      id: "9",
      title: "Godzilla x Kong",
      image: "/placeholder.svg?height=450&width=300",
      rating: 7.0,
      year: 2024,
      genre: "Action",
    },
    {
      id: "10",
      title: "The Fall Guy",
      image: "/placeholder.svg?height=450&width=300",
      rating: 7.2,
      year: 2024,
      genre: "Action",
    },
  ];

  // Mock data for top rated movies
  const topRatedMovies = [
    {
      id: "11",
      title: "The Shawshank Redemption",
      image: "/placeholder.svg?height=450&width=300",
      rating: 9.3,
      year: 1994,
      genre: "Drama",
    },
    {
      id: "12",
      title: "The Godfather",
      image: "/placeholder.svg?height=450&width=300",
      rating: 9.2,
      year: 1972,
      genre: "Crime",
    },
    {
      id: "13",
      title: "The Dark Knight",
      image: "/placeholder.svg?height=450&width=300",
      rating: 9.0,
      year: 2008,
      genre: "Action",
    },
    {
      id: "14",
      title: "The Godfather Part II",
      image: "/placeholder.svg?height=450&width=300",
      rating: 9.0,
      year: 1974,
      genre: "Crime",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent z-10" />
        <Image
          src="/cover.jpg"
          alt="Featured movie"
          fill
          className="object-cover opacity-50"
          priority
        />
        <div className="container relative z-20">
          <div className="max-w-2xl space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold">
              Discover Your Next Favorite Movie
            </h1>
            <p className="text-lg md:text-xl text-gray-300">
              Personalized recommendations based on your taste
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                className="bg-yellow-500 hover:bg-yellow-600 text-black"
              >
                <Link href="/recommendations">Get Recommendations</Link>
              </Button>
              <Button
                variant="outline"
                className="border-yellow-500 text-yellow-500 hover:bg-yellow-500/10"
              >
                <Link href="/movies/trending">Explore Trending</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container py-12 space-y-12">
        {/* New Releases Section */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl md:text-3xl font-bold">New Releases</h2>
            <Button variant="link" className="text-yellow-500">
              <Link href="/movies/new">View All</Link>
            </Button>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {newReleases.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        </section>

        {/* Movie Categories */}
        <section>
          <Tabs defaultValue="trending" className="w-full">
            <TabsList className="bg-gray-900 border-b border-gray-800 w-full justify-start mb-6">
              <TabsTrigger
                value="trending"
                className="data-[state=active]:text-yellow-500"
              >
                <TrendingUp className="mr-2 h-4 w-4" />
                Trending
              </TabsTrigger>
              <TabsTrigger
                value="top-rated"
                className="data-[state=active]:text-yellow-500"
              >
                <Star className="mr-2 h-4 w-4" />
                Top Rated
              </TabsTrigger>
              <TabsTrigger
                value="coming-soon"
                className="data-[state=active]:text-yellow-500"
              >
                <Clock className="mr-2 h-4 w-4" />
                Coming Soon
              </TabsTrigger>
            </TabsList>
            <TabsContent value="trending">
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {trendingMovies.map((movie) => (
                  <MovieCard key={movie.id} movie={movie} />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="top-rated">
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {topRatedMovies.map((movie) => (
                  <MovieCard key={movie.id} movie={movie} />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="coming-soon">
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
                <Card className="bg-gray-900 border-gray-800">
                  <CardContent className="p-4 flex items-center justify-center h-64">
                    <p className="text-gray-400">Coming soon...</p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </section>

        {/* Personalized Recommendations Section */}
        <section className="bg-gray-900 rounded-lg p-6 md:p-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold">
                Get Personalized Recommendations
              </h2>
              <p className="text-gray-300">
                Tell us about your movie preferences and we'll suggest films
                tailored just for you.
              </p>
              <Button
                asChild
                className="bg-yellow-500 hover:bg-yellow-600 text-black"
              >
                <Link href="/recommendations">Take the Quiz</Link>
              </Button>
            </div>
            <div className="bg-black/50 p-6 rounded-lg">
              <RecommendationForm minimal />
            </div>
          </div>
        </section>

        {/* Award Winners */}
        <section>
          <div className="flex items-center gap-2 mb-6">
            <Award className="text-yellow-500 h-6 w-6" />
            <h2 className="text-2xl md:text-3xl font-bold">Award Winners</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {topRatedMovies.slice(0, 4).map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
