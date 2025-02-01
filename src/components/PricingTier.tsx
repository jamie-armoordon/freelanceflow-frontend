import { type FC } from 'react'
import { CheckIcon } from '@heroicons/react/24/outline'

interface PricingTierProps {
  title: string
  price: string
  features: string[]
  isPopular?: boolean
}

export const PricingTier: FC<PricingTierProps> = ({ 
  title, 
  price, 
  features,
  isPopular = false
}) => (
  <div className={`p-8 rounded-xl border ${isPopular ? 'border-primary' : ''} relative`}>
    {isPopular && (
      <span className="absolute top-0 right-0 bg-primary text-white px-4 py-1 rounded-bl-xl text-sm">
        Most Popular
      </span>
    )}
    <h3 className="text-2xl font-bold mb-2">{title}</h3>
    <p className="text-4xl font-bold mb-6">{price}</p>
    <ul className="space-y-4">
      {features.map((feature) => (
        <li key={feature} className="flex items-center gap-2">
          <CheckIcon className="h-5 w-5 text-primary" />
          <span className="text-gray-600">{feature}</span>
        </li>
      ))}
    </ul>
    <button className={`mt-8 w-full py-3 rounded-lg font-medium ${
      isPopular ? 'bg-primary text-white' : 'bg-secondary text-primary'
    }`}>
      Get Started
    </button>
  </div>
) 