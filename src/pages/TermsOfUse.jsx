import React from 'react'
import { FileText, Scale, Link, AlertTriangle } from 'lucide-react';
import { termsOfUse } from '../../public/data';
import HeroBanner from '../components/HeroBanner';

export default function TermsOfUse() {
  const { homeBanner, title, introduction, terms, footer} =
      termsOfUse;

  const getIcon = (index) => {
  const icons = [Scale, Link, AlertTriangle];
  const IconComponent = icons[index] || FileText;
  return <IconComponent className="h-5 w-5 text-red-600" />;
};
  return (
    <>
      <HeroBanner data={homeBanner} />
       <div className="min-h-screen">
      {/* Header */}
      <div className="shadow-sm">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-3 bg-red-700 rounded-lg">
              <Scale className="h-8 w-8 text-red-300" />
            </div>
            <p className="text-slate-300 text-lg leading-relaxed">
            {introduction}
          </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 pb-12">
        <div className="rounded-2xl shadow-xl border border-white overflow-hidden">
          {/* Terms Items */}
          <div className="p-8">
            <div className="flex items-center space-x-3 mb-8">
              <FileText className="h-6 w-6 text-red-600" />
              <h2 className="text-2xl font-semibold text-white">Terms and Conditions</h2>
            </div>
            
            <div className="space-y-6">
              {terms.map((term, index) => (
                <div
                  key={index}
                  className="p-6 bg-black rounded-xl border border-white hover:bg-zinc-900 transition-colors duration-200"
                >
                  <div className="flex items-center space-x-3 mb-4">
                    {getIcon(index)}
                    <h3 className="text-xl font-semibold text-white">
                      {index + 1}. {term.title}
                    </h3>
                  </div>
                  <p className="text-slate-200 leading-relaxed font-medium">
                    {term.content}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Footer Section */}
          <div className="bg-black p-4">
            <p className="leading-relaxed font-medium">
              {footer}
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
