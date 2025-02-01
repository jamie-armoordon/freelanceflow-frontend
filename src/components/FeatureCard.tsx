import { type FC } from 'react'
import { motion } from 'framer-motion'
import { type IconComponent } from '../types'

interface FeatureCardProps {
  title: string
  description: string
  Icon: IconComponent
  emoji: string
  index: number
}

export const FeatureCard: FC<FeatureCardProps> = ({ 
  title, 
  description, 
  Icon,
  emoji,
  index
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="h-full"
  >
    <motion.div
      className="h-full p-8 rounded-xl bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 shadow-xl shadow-black/5 transition-all duration-300"
      whileHover={{ y: -5 }}
    >
      <div className="flex items-center gap-4 mb-6">
        <div className="relative p-3">
          <motion.div
            className="absolute inset-0 bg-secondary/10 rounded-lg"
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <Icon className="h-8 w-8 text-secondary relative z-10" />
        </div>
        <motion.span
          className="text-4xl"
          whileHover={{ scale: 1.2, rotate: 10 }}
          role="img"
          aria-label={title}
        >
          {emoji}
        </motion.span>
      </div>
      <h3 className="text-xl font-bold mb-4 text-white">{title}</h3>
      <p className="text-white/80 leading-relaxed">{description}</p>
    </motion.div>
  </motion.div>
)

// Create type definition file at src/types.ts 