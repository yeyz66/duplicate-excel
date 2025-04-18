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
    question: "How do I remove duplicates in Excel using this tool?",
    answer: "Simply upload your Excel file, click the &apos;Start Cleaning&apos; button, and then download your duplicate-free file. Our tool automatically detects and removes duplicate rows in seconds."
  },
  {
    question: "What file formats are supported for duplicate removal?",
    answer: "Our Excel duplicate removal tool supports Excel 2007-2019 (.xlsx), Excel 97-2003 (.xls), and CSV (.csv) formats."
  },
  {
    question: "How do I delete duplicates in Excel manually?",
    answer: "In Excel, select your data range, go to the &apos;Data&apos; tab, click &apos;Remove Duplicates&apos;, select the columns you want to check for duplicates, and click &apos;OK&apos;. Our online tool simplifies this process and works with any Excel version."
  },
  {
    question: "Is my data secure when removing duplicates?",
    answer: "Yes, all Excel duplicate removal processing is done locally in your browser. Your data never leaves your device. After processing, data is immediately cleared from browser memory."
  },
  {
    question: "Why should I use this tool instead of Excel&apos;s built-in duplicate removal?",
    answer: "Our tool is faster, easier to use, and works even if you don&apos;t have Excel installed. It also provides detailed statistics about how many duplicates were removed and handles larger files more efficiently."
  },
  {
    question: "What happens to duplicate rows when I use this tool?",
    answer: "By default, the tool keeps the first occurrence of each unique row and removes all duplicates. The tool provides a report showing how many duplicate rows were removed from your Excel file."
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
          <h1 className="text-3xl font-bold mb-6">How to Remove Duplicates in Excel: Step-by-Step Guide</h1>
          <p className="text-secondary-text mb-12">
            Learn multiple ways to delete duplicates in Excel quickly and easily
          </p>
          
          {/* Tutorial Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Methods to Remove Excel Duplicates</h2>
            
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold mb-4">Method 1: Use Our Online Excel Duplicate Remover Tool</h3>
              <p className="mb-4">The fastest and easiest way to remove duplicates in Excel:</p>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-6">
                <div className="text-center">
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <ArrowUpTrayIcon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-medium mb-2">1. Upload File</h3>
                  <p className="text-sm text-secondary-text">
                    Upload your Excel file with duplicate data
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <CogIcon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-medium mb-2">2. Click Process</h3>
                  <p className="text-sm text-secondary-text">
                    Click the &quot;Start Cleaning&quot; button to remove duplicates
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <SparklesIcon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-medium mb-2">3. View Results</h3>
                  <p className="text-sm text-secondary-text">
                    See how many duplicate rows were removed
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <ArrowDownTrayIcon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-medium mb-2">4. Download File</h3>
                  <p className="text-sm text-secondary-text">
                    Download your Excel file with all duplicates removed
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Method 2: How to Delete Duplicates in Excel Manually</h3>
              <p className="mb-4">If you prefer to use Excel&apos;s built-in functionality:</p>
              
              <ol className="list-decimal pl-6 space-y-4">
                <li>
                  <strong>Select your data:</strong> Click and drag to select the range of cells containing your data that may have duplicates.
                </li>
                <li>
                  <strong>Go to the Data tab:</strong> Find and click on the &quot;Data&quot; tab in the Excel ribbon at the top of the screen.
                </li>
                <li>
                  <strong>Find Remove Duplicates:</strong> In the &quot;Data Tools&quot; group, click on the &quot;Remove Duplicates&quot; button.
                </li>
                <li>
                  <strong>Select columns:</strong> In the dialog box that appears, select the columns you want Excel to check for duplicate values.
                </li>
                <li>
                  <strong>Click OK:</strong> Excel will remove the duplicate entries and display a message telling you how many duplicates were removed.
                </li>
              </ol>
              
              <p className="mt-4 text-sm italic">Note: Excel&apos;s built-in method permanently deletes duplicates. Our online tool is safer as it creates a new file and preserves your original data.</p>
            </div>
          </section>
          
          {/* FAQ Section */}
          <section>
            <h2 className="text-2xl font-bold mb-8">Frequently Asked Questions About Removing Duplicates in Excel</h2>
            
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
          
          {/* Tips Section */}
          <section className="mt-12 pt-12 border-t border-divider">
            <h2 className="text-2xl font-bold mb-6">Tips for Removing Duplicates in Excel</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-4 rounded">
                <h3 className="font-semibold mb-2">Always Backup Your Data</h3>
                <p className="text-sm">Before removing duplicates, always save a copy of your original Excel file to prevent accidental data loss.</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded">
                <h3 className="font-semibold mb-2">Check for Partial Duplicates</h3>
                <p className="text-sm">Sometimes you only want to check specific columns for duplicates, not entire rows. Our tool can help with this.</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded">
                <h3 className="font-semibold mb-2">Data Formatting Matters</h3>
                <p className="text-sm">Excel may not recognize duplicates if formatting differs. Standardize your data format before removing duplicates.</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded">
                <h3 className="font-semibold mb-2">Consider Case Sensitivity</h3>
                <p className="text-sm">Excel&apos;s built-in tools aren&apos;t case-sensitive. &quot;JOHN&quot; and &quot;john&quot; would be considered duplicates.</p>
              </div>
            </div>
          </section>
          
          {/* Contact Section */}
          <section className="mt-12 pt-12 border-t border-divider">
            <h2 className="text-2xl font-bold mb-4">Need Help Removing Duplicates?</h2>
            <p className="text-secondary-text">
              If you have questions about removing duplicates in Excel or need additional help, please contact us:
            </p>
            <p className="mt-4 flex items-center text-secondary-text">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              support@excelduplicate.com
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