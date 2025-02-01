import { type FC } from 'react'
import { motion } from 'framer-motion'

export const Footer: FC = () => {
  const footerSections = [
    {
      title: 'Product',
      links: ['Features', 'Pricing', 'Security', 'Status']
    },
    {
      title: 'Company',
      links: ['About', 'Blog', 'Careers', 'Press']
    },
    {
      title: 'Resources',
      links: ['Documentation', 'Support', 'Terms', 'Privacy']
    },
    {
      title: 'Connect',
      links: ['Twitter', 'LinkedIn', 'GitHub', 'Contact']
    }
  ]

  return (
    <footer className="border-t border-white/10 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl font-bold text-white mb-4">FreelanceFlow</h3>
          <p className="text-white/80 max-w-xl mx-auto">
            Built by freelancers, for freelancers. Making UK compliance easy.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {footerSections.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: sectionIndex * 0.1 }}
              className="space-y-4"
            >
              <h4 className="font-bold text-white">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <motion.li
                    key={link}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (sectionIndex * 0.1) + (linkIndex * 0.05) }}
                  >
                    <a
                      href="#"
                      className="text-white/70 hover:text-secondary transition-colors"
                    >
                      {link}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="border-t border-white/10 pt-8 mt-12"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/70">
            <p>&copy; {new Date().getFullYear()} FreelanceFlow. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-secondary transition-colors">Terms</a>
              <a href="#" className="hover:text-secondary transition-colors">Privacy</a>
              <a href="#" className="hover:text-secondary transition-colors">Cookies</a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
} 