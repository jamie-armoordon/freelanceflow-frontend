import { type FC } from 'react'
import { 
  DocumentCheckIcon,
  ShieldCheckIcon,
  CurrencyPoundIcon,
} from '@heroicons/react/24/outline'
import { HeroSection } from './components/HeroSection'
import { FeatureCard } from './components/FeatureCard'
import { TestimonialCard } from './components/TestimonialCard'
import { PricingTier } from './components/PricingTier'
import { FAQSection } from './components/FAQSection'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { motion } from 'framer-motion'

const App: FC = () => {
  const features = [
    {
      title: "HMRC Compliance Automation",
      description: "Auto-generate VAT-ready invoices and self-assessment tax reports that meet HMRC's Making Tax Digital (MTD) standards—no more spreadsheet headaches.",
      Icon: DocumentCheckIcon,
      emoji: "🧾"
    },
    {
      title: "IR35 Risk Checker",
      description: "AI scans contracts for IR35 red flags and suggests compliant edits to keep you off HMRC's radar.",
      Icon: ShieldCheckIcon,
      emoji: "⚖️"
    },
    {
      title: "Local Payment Integrations",
      description: "Direct BACS, Faster Payments, and GoCardless support—no more chasing international fees.",
      Icon: CurrencyPoundIcon,
      emoji: "💷"
    }
  ]

  const testimonials = [
    {
      quote: "FreelanceFlow has saved me countless hours on admin. The IR35 checks and automated invoicing are game-changers.",
      author: "Sarah Chen",
      role: "Frontend Developer",
      location: "London"
    },
    {
      quote: "The IR35 checker helped me revise a risky contract. Lifesaver for solo freelancers!",
      author: "James P.",
      role: "IT Consultant",
      location: "Manchester"
    }
  ]

  const pricingTiers = [
    {
      title: "Free Tier",
      price: "£0/month",
      features: [
        "Basic invoicing",
        "20 client messages/month",
        "Limited templates"
      ],
      isPopular: false
    },
    {
      title: "Pro Tier",
      price: "£10/month",
      features: [
        "Unlimited invoices",
        "AI tax estimates",
        "IR35 tools",
        "BACS integration"
      ],
      isPopular: true
    }
  ]

  const faqs = [
    {
      question: "Is my data GDPR-compliant?",
      answer: "Yes—hosted on UK servers with end-to-end encryption."
    },
    {
      question: "Can I integrate with Xero/FreeAgent?",
      answer: "Yes! Sync seamlessly with popular UK accounting tools."
    },
    {
      question: "What if I'm new to freelancing?",
      answer: "Start with free templates and step-by-step tax guides."
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-background-dark via-background to-background-light">
      <Header />
      <main>
        <HeroSection
          title="Stop Chasing Paperwork—Automate UK Freelancer Admin in 5 Minutes"
          subtitle="FreelanceFlow handles HMRC-compliant invoicing, IR35 checks, and client work so you can focus on what you love. Save 10+ hours/month."
          ctaText="Join 500+ UK Freelancers on the Waitlist →"
        />
        
        <section id="features" className="container section-padding">
          <h2 className="text-center mb-12">Built for UK Freelancers</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={feature.title} {...feature} index={index} />
            ))}
          </div>
        </section>

        <section className="container section-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Loved by UK Freelancers</h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              Join hundreds of freelancers who've simplified their admin with FreelanceFlow
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard 
                key={testimonial.author} 
                {...testimonial} 
                index={index} 
              />
            ))}
          </div>
        </section>

        <section id="pricing" className="container section-padding">
          <h2 className="text-center mb-12">Transparent Pricing</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {pricingTiers.map((tier) => (
              <PricingTier key={tier.title} {...tier} />
            ))}
          </div>
        </section>

        <section id="faq">
          <FAQSection faqs={faqs} />
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App
