import React from 'react'
import { motion } from 'framer-motion'
import { Brain, Code, Zap } from 'lucide-react'

const features = [
  {
    icon: Brain,
    title: 'Intuitive Building Blocks',
    description: 'Create ML models using pre-built, customizable components.'
  },
  {
    icon: Code,
    title: 'Easy Integration',
    description: 'Seamlessly integrate with existing codebases and workflows.'
  },
  {
    icon: Zap,
    title: 'Rapid Prototyping',
    description: 'Quickly iterate and test different ML architectures.'
  }
]

const Features = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Why Choose Ratio?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-md p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ 
                scale: 1.05, 
                zIndex: 1,
                transition: { duration: 0.2 }
              }}
            >
              <feature.icon className="w-12 h-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features