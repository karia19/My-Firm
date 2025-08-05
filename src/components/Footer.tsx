import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { motion } from "framer-motion"

const dialogAnimation = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.95 },
}

export default function Footer() {
  return (
    <footer className="relative w-full h-[400px] mt-32">
      {/* 🌄 Background Image */}
      <div className="absolute inset-0 -z-10">
        <img
          src="moon4.png"
          alt="Footer background"
          className="w-full h-full object-cover opacity-80"
        />
      </div>

      {/* 💳 Footer Content */}
      <Card className="dot-background bg-white/80 backdrop-blur-md border-none rounded-none py-12">
        <CardContent className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          {/* 🔗 Logo + Info */}
          <div className="flex flex-col gap-2 items-center md:items-start">
            <img src="/Logo1.png" alt="Logo" className="w-40 h-20 mb-2" />
            <p className="text-sm text-gray-700">
              © {new Date().getFullYear()} Your Company — Designed with integrity and love.
            </p>
          </div>

          {/* 📞 Contact + Links */}
          <div className="flex flex-col gap-2 items-center md:items-end">
            <p className="text-sm text-gray-700">Contact: oivauix@gmail.com</p>
            <Separator className="w-16 bg-purple-500" />
            <div className="flex gap-4 text-sm">

              {/* 🛡 Privacy Dialog */}
              <Dialog>
                <DialogTrigger className="text-purple-700 hover:underline cursor-pointer">
                  Privacy
                </DialogTrigger>
                <DialogContent>
                  <motion.div
                    {...dialogAnimation}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="bg-white p-6 rounded-xl shadow-xl backdrop-blur-sm"
                  >
                    <DialogHeader>
                      <DialogTitle className="text-purple-700">Privacy Policy</DialogTitle>
                      <DialogDescription className="space-y-2 text-gray-600">
                        <p>🔐 We respect your privacy. No creepy tracking here.</p>
                        <p>📉 Opt out of analytics anytime or request data removal.</p>
                      </DialogDescription>
                    </DialogHeader>
                  </motion.div>
                </DialogContent>
              </Dialog>

              {/* 📜 Terms Dialog */}
              <Dialog>
                <DialogTrigger className="text-purple-700 hover:underline cursor-pointer">
                  Terms
                </DialogTrigger>
                <DialogContent>
                  <motion.div
                    {...dialogAnimation}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="bg-white p-6 rounded-xl shadow-xl backdrop-blur-sm"
                  >
                    <DialogHeader>
                      <DialogTitle className="text-purple-700">Terms of Service</DialogTitle>
                      <DialogDescription className="space-y-2 text-gray-600">
                        <p>📎 Use responsibly. Don’t break stuff or laws.</p>
                        <p>🔄 Terms may update occasionally, we’ll notify you.</p>
                      </DialogDescription>
                    </DialogHeader>
                  </motion.div>
                </DialogContent>
              </Dialog>

              {/* 🔗 GitHub Link */}
              <a
                href="https://github.com/yourusername/yourrepo"
                className="text-purple-700 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>

            </div>
          </div>
        </CardContent>
      </Card>
    </footer>
  )
}
