import { type FC } from 'react'

export const Header: FC = () => (
  <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 border-b">
    <div className="container mx-auto px-4">
      <nav className="flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center">
          <a href="/" className="text-xl font-bold text-primary">
            FreelanceFlow
          </a>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-gray-600 hover:text-primary transition-colors">
            Features
          </a>
          <a href="#pricing" className="text-gray-600 hover:text-primary transition-colors">
            Pricing
          </a>
          <a href="#faq" className="text-gray-600 hover:text-primary transition-colors">
            FAQ
          </a>
        </div>

        {/* CTA Button */}
        <div>
          <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors">
            Join Waitlist
          </button>
        </div>
      </nav>
    </div>
  </header>
) 