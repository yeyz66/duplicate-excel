'use client';

import { useState } from 'react';
import Navbar from '../components/Navbar';
import Button from '../components/Button';

export default function AccountPage() {
  const [activeTab, setActiveTab] = useState('profile');
  
  return (
    <main className="min-h-screen pb-16">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
        <div className="bg-card rounded-xl shadow overflow-hidden">
          <div className="md:flex">
            {/* Sidebar */}
            <div className="md:w-64 border-r border-divider">
              <div className="p-6">
                <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4">
                  <div className="flex items-center justify-center h-full text-2xl font-bold text-gray-500">JD</div>
                </div>
                <h2 className="text-xl font-bold text-center">John Doe</h2>
                <p className="text-sm text-secondary-text text-center">john.doe@example.com</p>
              </div>
              
              <nav className="border-t border-divider">
                <button
                  className={`w-full py-3 px-6 text-left flex items-center ${
                    activeTab === 'profile' ? 'bg-primary/5 text-primary border-l-4 border-primary' : ''
                  }`}
                  onClick={() => setActiveTab('profile')}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  Profile Settings
                </button>
                
                <button
                  className={`w-full py-3 px-6 text-left flex items-center ${
                    activeTab === 'preferences' ? 'bg-primary/5 text-primary border-l-4 border-primary' : ''
                  }`}
                  onClick={() => setActiveTab('preferences')}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Preferences
                </button>
                
                <button
                  className={`w-full py-3 px-6 text-left flex items-center ${
                    activeTab === 'subscription' ? 'bg-primary/5 text-primary border-l-4 border-primary' : ''
                  }`}
                  onClick={() => setActiveTab('subscription')}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                  Subscription
                </button>
              </nav>
            </div>
            
            {/* Content Area */}
            <div className="flex-1 p-8">
              {activeTab === 'profile' && (
                <div>
                  <h2 className="text-2xl font-bold mb-6">Profile Settings</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Full Name</label>
                      <input
                        type="text"
                        defaultValue="John Doe"
                        className="w-full px-4 py-2 border border-divider rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Email Address</label>
                      <input
                        type="email"
                        defaultValue="john.doe@example.com"
                        className="w-full px-4 py-2 border border-divider rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Company</label>
                      <input
                        type="text"
                        defaultValue="Acme Inc."
                        className="w-full px-4 py-2 border border-divider rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                      />
                    </div>
                    
                    <div>
                      <Button>
                        Save Changes
                      </Button>
                    </div>
                  </div>
                </div>
              )}
              
              {activeTab === 'preferences' && (
                <div>
                  <h2 className="text-2xl font-bold mb-6">Preferences</h2>
                  
                  <div className="space-y-6">
                    <section className="pb-6 border-b border-divider">
                      <h3 className="text-lg font-medium mb-4">Data Comparison Settings</h3>
                      
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">Number Comparison</label>
                          <select className="w-full px-4 py-2 border border-divider rounded-md focus:ring-2 focus:ring-primary focus:border-primary">
                            <option>Exact match (123 != 123.0)</option>
                            <option selected>Value equality (123 = 123.0)</option>
                            <option>Approximate equality (tolerance 0.001)</option>
                          </select>
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium mb-2">Date Comparison</label>
                          <select className="w-full px-4 py-2 border border-divider rounded-md focus:ring-2 focus:ring-primary focus:border-primary">
                            <option>Exact match (including time)</option>
                            <option selected>Date only (ignore time)</option>
                            <option>Year and month only</option>
                          </select>
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium mb-2">Text Comparison</label>
                          <select className="w-full px-4 py-2 border border-divider rounded-md focus:ring-2 focus:ring-primary focus:border-primary">
                            <option>Exact match (case sensitive)</option>
                            <option selected>Ignore case</option>
                            <option>Ignore case and whitespace</option>
                            <option>Compare letters and numbers only</option>
                          </select>
                        </div>
                      </div>
                    </section>
                    
                    <section>
                      <h3 className="text-lg font-medium mb-4">Output Settings</h3>
                      
                      <div className="space-y-4">
                        <div className="flex items-center">
                          <input 
                            type="checkbox" 
                            id="output-removed"
                            defaultChecked
                            className="h-4 w-4 text-primary rounded border-gray-300 focus:ring-primary"
                          />
                          <label htmlFor="output-removed" className="ml-2 text-sm">
                            Generate separate worksheet for removed rows
                          </label>
                        </div>
                        
                        <div className="flex items-center">
                          <input 
                            type="checkbox" 
                            id="output-stats"
                            defaultChecked
                            className="h-4 w-4 text-primary rounded border-gray-300 focus:ring-primary"
                          />
                          <label htmlFor="output-stats" className="ml-2 text-sm">
                            Include statistics in the results file
                          </label>
                        </div>
                        
                        <div className="flex items-center">
                          <input 
                            type="checkbox" 
                            id="output-highlight"
                            className="h-4 w-4 text-primary rounded border-gray-300 focus:ring-primary"
                          />
                          <label htmlFor="output-highlight" className="ml-2 text-sm">
                            Highlight possible partial duplicates
                          </label>
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium mb-2">Output File Format</label>
                          <select className="w-full px-4 py-2 border border-divider rounded-md focus:ring-2 focus:ring-primary focus:border-primary">
                            <option selected>Same as source file</option>
                            <option>Excel 2007-2019 (.xlsx)</option>
                            <option>Excel 97-2003 (.xls)</option>
                            <option>CSV (.csv)</option>
                          </select>
                        </div>
                      </div>
                    </section>
                    
                    <div className="pt-4">
                      <Button>
                        Save Preferences
                      </Button>
                      <Button variant="secondary" className="ml-3">
                        Reset to Defaults
                      </Button>
                    </div>
                  </div>
                </div>
              )}
              
              {activeTab === 'subscription' && (
                <div>
                  <h2 className="text-2xl font-bold mb-6">Subscription</h2>
                  
                  <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mb-8">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-bold">Free Plan</h3>
                        <p className="text-secondary-text text-sm">Your current plan</p>
                      </div>
                      <span className="px-3 py-1 bg-primary text-white text-xs rounded-full">
                        Active
                      </span>
                    </div>
                    
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center text-sm">
                        <svg className="h-5 w-5 mr-2 text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Up to 10MB file size
                      </li>
                      <li className="flex items-center text-sm">
                        <svg className="h-5 w-5 mr-2 text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Basic deduplication features
                      </li>
                      <li className="flex items-center text-sm">
                        <svg className="h-5 w-5 mr-2 text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        History for last 5 files
                      </li>
                    </ul>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4">Upgrade your plan</h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="border border-divider rounded-lg p-6 hover:shadow-md transition-shadow">
                      <h4 className="text-lg font-bold mb-2">Pro Plan</h4>
                      <p className="text-primary text-2xl font-bold mb-4">$9.99<span className="text-sm text-secondary-text font-normal">/month</span></p>
                      
                      <ul className="space-y-2 mb-6">
                        <li className="flex items-center text-sm">
                          <svg className="h-5 w-5 mr-2 text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          Up to 50MB file size
                        </li>
                        <li className="flex items-center text-sm">
                          <svg className="h-5 w-5 mr-2 text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          Advanced deduplication features
                        </li>
                        <li className="flex items-center text-sm">
                          <svg className="h-5 w-5 mr-2 text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          Unlimited history
                        </li>
                        <li className="flex items-center text-sm">
                          <svg className="h-5 w-5 mr-2 text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          Email support
                        </li>
                      </ul>
                      
                      <Button fullWidth>Upgrade to Pro</Button>
                    </div>
                    
                    <div className="border border-divider rounded-lg p-6 hover:shadow-md transition-shadow">
                      <h4 className="text-lg font-bold mb-2">Business Plan</h4>
                      <p className="text-primary text-2xl font-bold mb-4">$24.99<span className="text-sm text-secondary-text font-normal">/month</span></p>
                      
                      <ul className="space-y-2 mb-6">
                        <li className="flex items-center text-sm">
                          <svg className="h-5 w-5 mr-2 text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          Up to 100MB file size
                        </li>
                        <li className="flex items-center text-sm">
                          <svg className="h-5 w-5 mr-2 text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          All features included
                        </li>
                        <li className="flex items-center text-sm">
                          <svg className="h-5 w-5 mr-2 text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          API access
                        </li>
                        <li className="flex items-center text-sm">
                          <svg className="h-5 w-5 mr-2 text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          Priority support
                        </li>
                      </ul>
                      
                      <Button fullWidth>Upgrade to Business</Button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 