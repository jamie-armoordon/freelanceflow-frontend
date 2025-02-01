import { type FC } from 'react'
import { type IconComponent } from '../types'

interface FeatureCardProps {
  title: string
  description: string
  Icon: IconComponent
}

export const FeatureCard: FC<FeatureCardProps> = ({ title, description, Icon }) => (
  <div className="p-8 border rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow">
    <Icon className="h-12 w-12 text-primary mb-6" />
    <h3 className="text-2xl font-bold mb-4">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
)

// Create type definition file at src/types.ts 