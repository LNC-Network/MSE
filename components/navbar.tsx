"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Film, Search, User, Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export default function Navbar() {
  const pathname = usePathname()
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Movies", href: "/movies" },
    { name: "TV Shows", href: "/tv-shows" },
    { name: "Recommendations", href: "/recommendations" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/60">
      <div className="container flex h-16 items-center">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="bg-gray-950 text-white">
            <div className="flex flex-col gap-6 pt-6">
              <Link href="/" className="flex items-center gap-2 text-xl font-bold text-yellow-500">
                <Film className="h-6 w-6" />
                MovieMind
              </Link>
              <nav className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`text-lg ${
                      pathname === item.href ? "text-yellow-500" : "text-gray-300 hover:text-white"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>
          </SheetContent>
        </Sheet>

        <Link href="/" className="flex items-center gap-2 mr-6">
          <Film className="h-6 w-6 text-yellow-500" />
          <span className="text-xl font-bold hidden sm:inline-block text-yellow-500">MovieMind</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 mr-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors ${
                pathname === item.href ? "text-yellow-500" : "text-gray-300 hover:text-white"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center ml-auto gap-4">
          {isSearchOpen ? (
            <div className="flex items-center relative">
              <Input
                type="search"
                placeholder="Search movies..."
                className="w-full sm:w-[300px] bg-gray-900 border-gray-700 focus-visible:ring-yellow-500"
                autoFocus
              />
              <Button variant="ghost" size="icon" className="absolute right-0" onClick={() => setIsSearchOpen(false)}>
                <X className="h-4 w-4" />
                <span className="sr-only">Close search</span>
              </Button>
            </div>
          ) : (
            <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(true)}>
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
          )}
          <Button variant="ghost" size="icon" asChild>
            <Link href="/profile">
              <User className="h-5 w-5" />
              <span className="sr-only">Profile</span>
            </Link>
          </Button>
          <Link href="/profile" className="hidden sm:flex items-center gap-2">
            <Avatar className="h-8 w-8 border border-gray-800">
              <AvatarFallback className="bg-gray-800 text-gray-400">U</AvatarFallback>
            </Avatar>
          </Link>
        </div>
      </div>
    </header>
  )
}
