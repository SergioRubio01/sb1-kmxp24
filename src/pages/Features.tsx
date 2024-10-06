import React from 'react';
import { Brain, Code, Zap } from 'lucide-react'

const Features = () => {
  return (
    <section className="py-10 text-center">
      <h2 className="text-2xl font-bold text-gray-800">Why BizAI?</h2>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Add feature blocks here */}
        <div className="p-5 border rounded-lg">
          <Brain size={40} className="mx-auto text-green-400" />
          <h3 className="mt-2 text-xl font-semibold">AI-Integrated</h3>
          <p className="text-gray-600">Use AI to speed up your development process.</p>
        </div>
        <div className="p-5 border rounded-lg">
          <Code size={40} className="mx-auto text-green-400" />
          <h3 className="mt-2 text-xl font-semibold">Open Source</h3>
          <p className="text-gray-600">BizAI is fully open source and customizable.</p>
        </div>
        <div className="p-5 border rounded-lg">
          <Zap size={40} className="mx-auto text-green-400" />
          <h3 className="mt-2 text-xl font-semibold">Fast and Efficient</h3>
          <p className="text-gray-600">Experience lightning-fast coding with AI assistance.</p>
        </div>
      </div>
    </section>
  );
};

export default Features;