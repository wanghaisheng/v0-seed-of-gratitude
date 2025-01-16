import React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from 'next/image'

export default function LandingPage() {
  return (
    <div className="bg-[#f5f0e8] min-h-screen font-serif">
      <header className="container mx-auto px-4 py-6 flex flex-col sm:flex-row justify-between items-center">
        <div className="text-2xl font-bold mb-4 sm:mb-0">Seed of Gratitude</div>
        <nav className="space-x-4">
          <a href="#features" className="text-gray-800 hover:text-gray-600">Features</a>
          <a href="#about" className="text-gray-800 hover:text-gray-600">About</a>
          <Button className="bg-[#4a5568] hover:bg-[#4a5568]/90 text-white">
            Get Started
          </Button>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Unlock Your Potential With Gratitude</h1>
          <p className="text-xl text-gray-700 mb-8">Discover the power of gratitude and transform your life through mindful journaling.</p>
          <div className="relative inline-block">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/GTToisq0Rw6BOYR_JcALsw-OuTAwFNyaGFDv5f5dkoZClc5WGvNmH.webp"
              alt="Gratitude Journal"
              className="rounded-2xl shadow-lg max-w-full h-auto"
              width={500}
              height={300}
            />
          </div>
        </section>

        <section id="features" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Key Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Daily Prompts", description: "Receive thoughtful prompts to inspire your gratitude practice.", icon: "💡" },
              { title: "Mood Tracking", description: "Monitor your emotional well-being and see how gratitude impacts your mood.", icon: "📊" },
              { title: "Reflection Insights", description: "Gain valuable insights into your growth and patterns over time.", icon: "🔍" }
            ].map((feature, index) => (
              <div key={index} className="text-center bg-white p-6 rounded-xl shadow-md">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="screenshots-and-tutorials" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">App Preview</h2>
          <Tabs defaultValue="screenshots" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="screenshots">Screenshots</TabsTrigger>
              <TabsTrigger value="tutorial">Video Tutorial</TabsTrigger>
            </TabsList>
            <TabsContent value="screenshots">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[1, 2, 3, 4, 5, 6].map((index) => (
                  <div key={index} className="relative aspect-[9/16] bg-gray-200 rounded-lg overflow-hidden">
                    <Image
                      src={`/placeholder.svg?height=640&width=360&text=Screenshot ${index}`}
                      alt={`App Screenshot ${index}`}
                      className="absolute inset-0 w-full h-full object-cover"
                      width={360}
                      height={640}
                    />
                  </div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="tutorial">
              <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-gray-500">
                  Video Tutorial Placeholder
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </section>

        <section id="about" className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">About Seed of Gratitude</h2>
            <p className="text-gray-700 mb-4">
              Seed of Gratitude is more than just a journaling app. It's a transformative experience that helps you cultivate a mindset of appreciation and unlock your full potential. By focusing on the positive aspects of your life, you'll discover new opportunities for growth and happiness.
            </p>
            <p className="text-gray-700 mb-4">
              Our app combines the ancient wisdom of gratitude practices with modern psychology to create a powerful tool for personal development. Whether you're new to journaling or a seasoned practitioner, Seed of Gratitude offers a supportive environment to nurture your growth.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Start Your Gratitude Journey Today</h2>
          <div className="max-w-md mx-auto">
            <form className="space-y-4">
              <Input type="email" placeholder="Enter your email" className="w-full" />
              <Button className="w-full bg-[#4a5568] hover:bg-[#4a5568]/90 text-white text-lg py-6">
                Get Early Access
              </Button>
            </form>
            <p className="text-sm text-gray-600 mt-2 text-center">
              Join our waitlist and be the first to experience the power of gratitude.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">What Our Users Say</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { name: "Sarah K.", quote: "Seed of Gratitude has completely changed my outlook on life. I feel more positive and appreciative every day.".replace(/"/g, '"') },
              { name: "Michael R.", quote: "The daily prompts are so thoughtful. They've helped me discover gratitude in unexpected places." }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                <p className="text-gray-700 mb-4">"{testimonial.quote}"</p>
                <p className="text-gray-900 font-semibold">- {testimonial.name}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-gray-100 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600">© 2023 Seed of Gratitude. All rights reserved.</p>
          <div className="mt-4">
            <a href="#" className="text-gray-600 hover:text-gray-800 mx-2">Privacy Policy</a>
            <a href="#" className="text-gray-600 hover:text-gray-800 mx-2">Terms of Service</a>
            <a href="#" className="text-gray-600 hover:text-gray-800 mx-2">Contact Us</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
