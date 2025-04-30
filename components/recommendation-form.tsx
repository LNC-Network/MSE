"use client"

import { useState } from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"

const genres = [
  { value: "action", label: "Action" },
  { value: "adventure", label: "Adventure" },
  { value: "animation", label: "Animation" },
  { value: "comedy", label: "Comedy" },
  { value: "crime", label: "Crime" },
  { value: "documentary", label: "Documentary" },
  { value: "drama", label: "Drama" },
  { value: "fantasy", label: "Fantasy" },
  { value: "horror", label: "Horror" },
  { value: "mystery", label: "Mystery" },
  { value: "romance", label: "Romance" },
  { value: "sci-fi", label: 'Sci-Fi"  label: "Mystery' },
  { value: "romance", label: "Romance" },
  { value: "sci-fi", label: "Sci-Fi" },
  { value: "thriller", label: "Thriller" },
  { value: "western", label: "Western" },
]

interface RecommendationFormProps {
  minimal?: boolean
}

export default function RecommendationForm({ minimal = false }: RecommendationFormProps) {
  const [open, setOpen] = useState(false)
  const [selectedGenre, setSelectedGenre] = useState("")

  return (
    <div className={`space-y-6 ${minimal ? "" : "max-w-2xl mx-auto bg-gray-900 p-6 rounded-lg"}`}>
      {!minimal && (
        <div className="space-y-2">
          <h2 className="text-2xl font-bold">Get Personalized Recommendations</h2>
          <p className="text-gray-400">Tell us what you like, and we'll suggest movies you'll love.</p>
        </div>
      )}

      <div className="space-y-4">
        <div className="space-y-2">
          <Label>Favorite Genre</Label>
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                role="combobox"
                aria-expanded={open}
                className="w-full justify-between bg-gray-800 border-gray-700"
              >
                {selectedGenre ? genres.find((genre) => genre.value === selectedGenre)?.label : "Select genre..."}
                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-full p-0 bg-gray-800 border-gray-700">
              <Command className="bg-gray-800">
                <CommandInput placeholder="Search genre..." />
                <CommandList>
                  <CommandEmpty>No genre found.</CommandEmpty>
                  <CommandGroup>
                    {genres.map((genre) => (
                      <CommandItem
                        key={genre.value}
                        value={genre.value}
                        onSelect={(currentValue) => {
                          setSelectedGenre(currentValue === selectedGenre ? "" : currentValue)
                          setOpen(false)
                        }}
                      >
                        <Check
                          className={cn("mr-2 h-4 w-4", selectedGenre === genre.value ? "opacity-100" : "opacity-0")}
                        />
                        {genre.label}
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
        </div>

        {!minimal && (
          <>
            <div className="space-y-2">
              <Label>Movie Length Preference</Label>
              <div className="pt-4">
                <Slider
                  defaultValue={[120]}
                  max={240}
                  min={60}
                  step={10}
                  className="[&>span:first-child]:h-2 [&>span:first-child]:bg-gray-700"
                />
                <div className="flex justify-between mt-2 text-xs text-gray-400">
                  <span>1h</span>
                  <span>2h</span>
                  <span>3h</span>
                  <span>4h</span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <Label>Mood</Label>
              <div className="grid grid-cols-2 gap-4">
                {["Uplifting", "Dark", "Thought-provoking", "Relaxing"].map((mood) => (
                  <div key={mood} className="flex items-center space-x-2">
                    <Checkbox id={`mood-${mood}`} />
                    <Label htmlFor={`mood-${mood}`} className="text-sm font-normal">
                      {mood}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <Label>Release Period</Label>
              <div className="grid grid-cols-2 gap-4">
                {["Recent (last 5 years)", "2000s", "90s", "Classics"].map((period) => (
                  <div key={period} className="flex items-center space-x-2">
                    <Checkbox id={`period-${period}`} />
                    <Label htmlFor={`period-${period}`} className="text-sm font-normal">
                      {period}
                    </Label>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black">
          {minimal ? "Quick Recommend" : "Get Recommendations"}
        </Button>
      </div>
    </div>
  )
}
