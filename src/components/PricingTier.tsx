import { type FC } from 'react'
import { motion } from 'framer-motion'
import { CheckIcon } from '@heroicons/react/24/outline'

interface PricingTierProps {
  title: string
  price: string
  features: string[]
  isPopular?: boolean
  index: number
}

export const PricingTier: FC<PricingTierProps> = ({ 
  title, 
  price, 
  features,
  isPopular = false,
  index
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
  >
    <motion.div 
      className={`p-8 rounded-xl border ${
        isPopular ? 'border-secondary shadow-secondary/20' : 'border-white/10'
      } relative bg-white/5 backdrop-blur-sm shadow-xl shadow-black/5 hover:shadow-2xl transition-all duration-300`}
      whileHover={{ y: -5 }}
    >
      {isPopular && (
        <motion.span 
          className="absolute -top-4 left-1/2 -translate-x-1/2 bg-secondary text-background-dark px-4 py-1 rounded-full text-sm font-medium shadow-lg"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          Most Popular
        </motion.span>
      )}
      
      <div className="text-center mb-8">
        <motion.h3 
          className="text-2xl font-bold mb-2 text-white"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {title}
        </motion.h3>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <span className="text-5xl font-bold text-secondary">{price}</span>
          <span className="text-white/70">/month</span>
        </motion.div>
      </div>

      <motion.ul 
        className="space-y-4 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        {features.map((feature, i) => (
          <motion.li 
            key={feature}
            className="flex items-center gap-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.2 + i * 0.1 }}
          >
            <div className="rounded-full bg-secondary/10 p-1">
              <CheckIcon className="h-4 w-4 text-secondary" />
            </div>
            <span className="text-white/80">{feature}</span>
          </motion.li>
        ))}
      </motion.ul>

      <motion.button 
        className={`w-full py-4 rounded-lg font-medium transition-all duration-300 ${
          isPopular 
            ? 'bg-secondary text-background-dark hover:bg-secondary/90' 
            : 'bg-white/10 text-white hover:bg-white/20'
        }`}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        Get Started
      </motion.button>
    </motion.div>
  </motion.div>
) 