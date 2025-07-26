// components/Navbar.tsx
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Menu } from "lucide-react";


export default function Navbar() {


    
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-background/70 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* 🌟 Brand */}
        <nav className="text-2xl font-bold tracking-tight text-primary">
          OivaUIX
        </nav>

        {/* 📱 Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background border-l border-border">
                <nav className="hidden md:flex items-center space-x-6">
                <a href="#home" className="text-sm font-medium hover:text-primary">Home</a>
                <a href="#about" className="text-sm font-medium hover:text-primary">About</a>
                <a href="#services" className="text-sm font-medium hover:text-primary">Services</a>
                <a href="#contact" className="text-sm font-medium hover:text-primary">Contact</a>
                <Button className="ml-4" size="sm">
                    Let’s Talk
                </Button>
                </nav>
            </SheetContent>
          </Sheet>
        </div>

        {/* 🖥️ Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-6">
                <a href="#home" className="text-sm font-medium hover:text-primary">Home</a>
                <a href="#about" className="text-sm font-medium hover:text-primary">About</a>
                <a href="#services" className="text-sm font-medium hover:text-primary">Services</a>
                <a href="#contact" className="text-sm font-medium hover:text-primary">Contact</a>
                <Button className="ml-4" size="sm">
                    Let’s Talk
                </Button>
        </nav>
      </div>
    </header>
  );
}
