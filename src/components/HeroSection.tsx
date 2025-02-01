import { type FC } from 'react'

interface HeroProps {
  title: string
  subtitle: string
  ctaText: string
}

export const HeroSection: FC<HeroProps> = ({ title, subtitle, ctaText }) => (
  <section className="bg-primary text-white py-20 px-4">
    <div className="max-w-6xl mx-auto text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-6">{title}</h1>
      <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">{subtitle}</p>
      <button className="bg-secondary text-primary px-8 py-4 rounded-lg font-bold hover:bg-yellow-500 transition-colors">
        {ctaText}
      </button>
    </div>
  </section>
) 