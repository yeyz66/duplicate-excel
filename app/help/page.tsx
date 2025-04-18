'use client';

import { useState } from 'react';
import { 
  ArrowUpTrayIcon, 
  CogIcon, 
  SparklesIcon, 
  ArrowDownTrayIcon 
} from '@heroicons/react/24/outline';
import Navbar from '../components/Navbar';

interface FaqItem {
  question: string;
  answer: string;
}

const faqItems: FaqItem[] = [
  {
    question: "What file formats are supported?",
    answer: "Our tool supports Excel 2007-2019 (.xlsx), Excel 97-2003 (.xls), and CSV (.csv) formats."
  },
  {
    question: "Is there a file size limit?",
    answer: "The free version supports files up to 10MB in size. Premium subscriptions support files up to 100MB."
  },
  {
    question: "How do I determine which columns to use for duplicate checking?",
    answer: "Select columns that uniquely identify records. For customer data, you might use a combination of customer ID, name, and phone number fields."
  },
  {
    question: "Is my data secure?",
    answer: "Yes, all processing is done locally in your browser. Your data never leaves your device. After processing, data is immediately cleared from browser memory."
  },
  {
    question: "Can I save processing history?",
    answer: "Yes, the system automatically saves records of your recent processing jobs, allowing you to download or reprocess them at any time."
  },
  {
    question: "What happens to duplicate rows?",
    answer: "You can choose to keep the first occurrence, keep the last occurrence, or remove all duplicates. The tool provides a complete report of which rows were removed."
  }
];

export default function HelpPage() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  
  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };
  
  return (
    <main className="min-h-screen pb-16">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
        <div className="bg-card rounded-xl shadow p-8">
          <h1 className="text-3xl font-bold mb-6">Help & FAQ</h1>
          <p className="text-secondary-text mb-12">
            Learn how to use our Excel duplicate removal tool effectively
          </p>
          
          {/* User Guide Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-8">User Guide</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <ArrowUpTrayIcon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-medium mb-2">1. Upload File</h3>
                <p className="text-sm text-secondary-text">
                  Upload your Excel file (.xlsx, .xls, or .csv format)
                </p>
              </div>
              
              <div className="text-center">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <CogIcon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-medium mb-2">2. Configure Options</h3>
                <p className="text-sm text-secondary-text">
                  Select columns for duplicate checking and set processing options
                </p>
              </div>
              
              <div className="text-center">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <SparklesIcon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-medium mb-2">3. Process File</h3>
                <p className="text-sm text-secondary-text">
                  Start processing to automatically remove duplicate rows
                </p>
              </div>
              
              <div className="text-center">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <ArrowDownTrayIcon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-medium mb-2">4. Download Results</h3>
                <p className="text-sm text-secondary-text">
                  Download the processed Excel file and view deduplication details
                </p>
              </div>
            </div>
          </section>
          
          {/* FAQ Section */}
          <section>
            <h2 className="text-2xl font-bold mb-8">Frequently Asked Questions</h2>
            
            <div className="space-y-4">
              {faqItems.map((faq, index) => (
                <div 
                  key={index} 
                  className="border border-divider rounded-lg overflow-hidden"
                >
                  <button
                    className="w-full px-6 py-4 text-left flex justify-between items-center"
                    onClick={() => toggleFaq(index)}
                  >
                    <span className="font-medium">{faq.question}</span>
                    <svg
                      className={`h-5 w-5 transition-transform ${expandedFaq === index ? 'transform rotate-180' : ''}`}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  
                  {expandedFaq === index && (
                    <div className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                      <p className="text-secondary-text text-sm">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
          
          {/* Contact Section */}
          <section className="mt-12 pt-12 border-t border-divider">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p className="text-secondary-text">
              If you have any questions or need help, please don&apos;t hesitate to contact us:
            </p>
            <p className="mt-4 flex items-center text-secondary-text">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              support@excelclean.com
            </p>
            <p className="mt-2 flex items-center text-secondary-text">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +1 (800) 123-4567
            </p>
          </section>
        </div>
      </div>
    </main>
  );
} 