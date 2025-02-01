import { type FC } from 'react'

interface FAQItem {
  question: string
  answer: string
}

interface FAQSectionProps {
  faqs: FAQItem[]
}

export const FAQSection: FC<FAQSectionProps> = ({ faqs }) => (
  <section className="max-w-4xl mx-auto py-16 px-4">
    <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
    <div className="space-y-6">
      {faqs.map((faq) => (
        <div key={faq.question} className="border rounded-lg p-6">
          <h3 className="font-bold text-lg mb-2">{faq.question}</h3>
          <p className="text-gray-600">{faq.answer}</p>
        </div>
      ))}
    </div>
  </section>
) 