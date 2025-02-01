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

const App: FC = () => {
  const features = [
    {
      title: 'HMRC Compliance Automation',
      description: 'Auto-generate VAT-ready invoices, self-assessment tax estimates, and MTD-compatible reports.',
      Icon: DocumentCheckIcon
    },
    {
      title: 'IR35 Risk Checker',
      description: 'AI-powered contract analysis to flag IR35 risks and suggest compliant edits.',
      Icon: ShieldCheckIcon
    },
    {
      title: 'Local Payment Integrations',
      description: 'Direct BACS, Faster Payments, and GoCardless support—no more chasing international fees.',
      Icon: CurrencyPoundIcon
    }
  ]

  const testimonials = [
    {
      quote: "Finally, a tool that understands UK freelancers! The HMRC automation alone saved me hours this tax quarter.",
      author: "Sarah M.",
      role: "Graphic Designer",
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
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-16">
        <HeroSection
          title="Automate Invoices, Taxes & Client Work—Built for UK Freelancers"
          subtitle="Spend less time on admin and more on your craft. FreelanceFlow automates HMRC-compliant invoicing, tax calculations, and client communication—all in one place."
          ctaText="Join the Waitlist →"
        />
        
        <section id="features" className="container section-padding">
          <h2 className="text-center mb-12">Built for UK Freelancers</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>
        </section>

        <section id="testimonials" className="bg-gray-50 section-padding">
          <div className="container">
            <h2 className="text-center mb-12">Trusted by UK Freelancers</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.map((testimonial) => (
                <TestimonialCard key={testimonial.author} {...testimonial} />
              ))}
            </div>
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
