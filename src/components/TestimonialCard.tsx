import { type FC } from 'react'

interface TestimonialProps {
  quote: string
  author: string
  role: string
  location: string
}

export const TestimonialCard: FC<TestimonialProps> = ({ 
  quote, 
  author,
  role,
  location
}) => (
  <div className="p-8 bg-white rounded-xl shadow-sm border">
    <p className="text-gray-600 mb-4">"{quote}"</p>
    <div className="mt-4">
      <h4 className="font-bold text-primary">{author}</h4>
      <p className="text-sm text-gray-500">{role} • {location}</p>
    </div>
  </div>
) 