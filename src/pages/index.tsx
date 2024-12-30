'use client'

import { useState } from 'react'
import Navigation from '../components/Navigation';
import Header from '../components/Header';
import Section from '../components/Section';
import CodeBlock from '../components/CodeBlock';

export default function Home() {
  const [language, setLanguage] = useState<'R' | 'Python'>('R')

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'R' ? 'Python' : 'R')
  }

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-white text-gray-800">
      <Navigation />
      <main className="flex-grow p-8 md:ml-64">
        <Header language={language} toggleLanguage={toggleLanguage} />
        
        <Section id="info" title="Package Info">
          <p className="mb-4"><strong>PairBayes</strong> is a Bayesian hypothesis testing package for paired samples. It supports both R and Python, offering a seamless way to conduct statistical tests and analyze results.</p>
          <p className="mb-2">Key features include:</p>
          <ul className="list-disc pl-5">
            <li>Support for Bayesian paired hypothesis tests</li>
            <li>Customizable priors for advanced Bayesian modeling</li>
            <li>Compatibility with both R and Python environments</li>
          </ul>
        </Section>

        <Section id="installation" title="Installation">
          <CodeBlock language={language} type="installation" />
        </Section>

        <Section id="usage" title="Usage">
          <CodeBlock language={language} type="usage" />
        </Section>

        <Section id="examples" title="Examples">
          <CodeBlock language={language} type="examples" />
        </Section>

        <Section id="authors" title="Authors">
          <p className="mb-4">The PairBayes package was developed by:</p>
          <ul className="list-disc pl-5 mb-4">
            <li><strong>John Doe:</strong> Lead Developer and Bayesian Statistics Expert</li>
            <li><strong>Jane Smith:</strong> Contributor and Documentation Specialist</li>
            <li><strong>Community Contributors:</strong> Thank you to all contributors on GitHub!</li>
          </ul>
          <p>For questions or feedback, please contact us at <a href="mailto:contact@pairbayes.com" className="text-blue-600 hover:underline">contact@pairbayes.com</a>.</p>
        </Section>
      </main>
    </div>
  )
}

