import React from 'react';
import { Brain, Code, Zap } from 'lucide-react';
import CardFeatures from './CardFeatures';

const Features = ({ isDarkMode }) => {
  return (
    <section
      className={`relative w-full h-full pt-20 flex flex-col justify-center items-center text-center ${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'} pb-40 `}
      style={{
        backgroundSize: isDarkMode ? 'cover' : '100% 200%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      <div className="w-1/2">
        <h2 className={`text-4xl font-bold ${isDarkMode ? 'text-gray-300' : 'text-black'}`}>
          <span className={isDarkMode ? 'text-gray-300' : 'text-black'}>Why</span>
          <span className="text-red-900"> BizAI</span>?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pt-14">
          <CardFeatures
            title="No-Code"
            description="Build AI, no code needed."
            icon={<Brain size={40} className="text-red-600" />}
          />
          <CardFeatures
            title="Efficient"
            description="AI power without the price."
            icon={<Zap size={40} className="text-yellow-500" />}
          />
          <CardFeatures
            title="Fast"
            description="Deploy models in record time."
            icon={<Code size={40} className="text-blue-500" />}
          />
          <CardFeatures
            title="Scalable"
            description="Grow AI with your business."
            icon={<Brain size={40} className="text-green-600" />}
          />
          <CardFeatures
            title="Integrated"
            description="Seamless tool integration."
            icon={<Zap size={40} className="text-purple-500" />}
          />
          <CardFeatures
            title="Supported"
            description="Experts at your service."
            icon={<Code size={40} className="text-orange-500" />}
          />
        </div>
      </div>
      {/* Background Image Layer at the Bottom */}
      
    </section>
  );
};

export default Features;
