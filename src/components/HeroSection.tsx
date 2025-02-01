import { type FC } from 'react'
import { motion } from 'framer-motion'
// Import SVGs from assets folder
import xeroLogo from '../assets/xero.svg'
import freeAgentLogo from '../assets/freeagent.svg'
import goCardlessLogo from '../assets/gocardless.svg'

interface HeroProps {
  title: string
  subtitle: string
  ctaText: string
}

export const HeroSection: FC<HeroProps> = ({ title, subtitle, ctaText }) => (
  <section className="bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-white py-32 px-4 relative overflow-hidden">
    <div className="max-w-6xl mx-auto text-center relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          {title}
        </h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-white/90">
          {subtitle}
        </p>
      </motion.div>

      <motion.button
        className="bg-secondary text-primary px-8 py-4 rounded-lg font-bold hover:bg-yellow-400 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        {ctaText}
      </motion.button>

      {/* Trust Signals - adjusted mobile spacing and scaling */}
      <motion.div
        className="mt-24"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <p className="text-sm text-white/70 mb-6">Trusted By UK Accounting Tools</p>
        <div className="flex justify-center items-center space-x-4 sm:space-x-8 md:space-x-12 px-4">
          <motion.img
            src={xeroLogo}
            alt="Xero"
            className="h-6 sm:h-8 md:h-10 w-auto opacity-70 hover:opacity-100 transition-opacity"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 0.7, y: 0 }}
            whileHover={{ opacity: 1 }}
          />
          <motion.img
            src={freeAgentLogo}
            alt="FreeAgent"
            className="h-6 sm:h-8 md:h-10 w-auto opacity-70 hover:opacity-100 transition-opacity"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 0.7, y: 0 }}
            whileHover={{ opacity: 1 }}
          />
          <motion.img
            src={goCardlessLogo}
            alt="GoCardless"
            className="h-6 sm:h-8 md:h-10 w-auto opacity-70 hover:opacity-100 transition-opacity"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 0.7, y: 0 }}
            whileHover={{ opacity: 1 }}
          />
        </div>
      </motion.div>
    </div>

    {/* Floating elements */}
    <div className="absolute inset-0 pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-secondary/20 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  </section>
) 