import { type FC } from 'react'

export const Footer: FC = () => (
  <footer className="bg-gray-50 py-12 mt-20">
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-primary mb-4">FreelanceFlow</h3>
        <p className="text-gray-600 max-w-xl mx-auto">
          Built by freelancers, for freelancers
        </p>
      </div>
      
      <div className="grid md:grid-cols-4 gap-8 text-sm">
        <div className="space-y-2">
          <h4 className="font-bold text-gray-800">Product</h4>
          <ul className="space-y-2">
            {['Features', 'Pricing', 'Security', 'Status'].map((item) => (
              <li key={item}>
                <a href="#" className="text-gray-600 hover:text-primary transition">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
        
        // ... repeat for other columns
        
      </div>
      
      <div className="border-t mt-12 pt-8 text-center text-gray-600">
        <p>&copy; {new Date().getFullYear()} FreelanceFlow. All rights reserved.</p>
      </div>
    </div>
  </footer>
) 