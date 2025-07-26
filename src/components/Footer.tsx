import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function Footer() {
  return (
    <footer className="relative w-full h-[400px] mt-32">
    {/* 🌄 Background Image */}
    <div className="absolute inset-0 -z-10">
      <img
        src="moon4.png" // update this to your image path
        alt="Footer background"
        className="w-full h-full object-cover opacity-30"
      />
    </div>

      {/* 💳 Footer Content */}
      <Card className="bg-white/80 backdrop-blur-md border-none rounded-none py-12">
        <CardContent className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          {/* 🔗 Logo + Info */}
          <div className="flex flex-col gap-2 items-center md:items-start">
            <img
              src="/Logo1.png" // your logo file here
              alt="Logo"
              className="w-40 h-20 mb-2"
            />
            <p className="text-sm text-gray-700">
              © {new Date().getFullYear()} Your Company — Designed with integrity and love.
            </p>
          </div>

          {/* 📞 Contact + Links */}
          <div className="flex flex-col gap-2 items-center md:items-end">
            <p className="text-sm text-gray-700">Contact: hello@yourcompany.com</p>
            <Separator className="w-16 bg-purple-500" />
            <div className="flex gap-4 text-sm">
              <a href="#" className="text-purple-700 hover:underline">
                Privacy
              </a>
              <a href="#" className="text-purple-700 hover:underline">
                Terms
              </a>
              <a href="#" className="text-purple-700 hover:underline">
                Github
              </a>
            </div>
          </div>
        </CardContent>
      </Card>
    </footer>
  )
}
