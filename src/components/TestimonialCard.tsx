import { type FC } from 'react'
import { motion } from 'framer-motion'

interface TestimonialProps {
  quote: string
  author: string
  role: string
  location: string
  index: number
}

export const TestimonialCard: FC<TestimonialProps> = ({ 
  quote, 
  author,
  role,
  location,
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
      className="h-full p-8 rounded-xl bg-background-dark/50 backdrop-blur-sm border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-300"
      whileHover={{ y: -5 }}
    >
      <div className="relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <svg className="absolute -top-4 -left-4 h-8 w-8 text-secondary/20" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
        </motion.div>
        <motion.p 
          className="text-white/80 mb-6 text-lg italic relative z-10 pl-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          "{quote}"
        </motion.p>
      </div>
      <motion.div 
        className="flex items-center gap-4 mt-6"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div className="h-12 w-12 bg-gradient-to-br from-secondary to-secondary/80 rounded-full flex items-center justify-center text-background-dark font-bold">
          {author.charAt(0)}
        </div>
        <div>
          <h4 className="font-bold text-white">{author}</h4>
          <p className="text-sm text-white/70">{role} • {location}</p>
        </div>
      </motion.div>
    </motion.div>
  </motion.div>
) 