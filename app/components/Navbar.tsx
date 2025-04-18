'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTable, faHome, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 bg-primary text-gray-800 transition-all duration-300 ${
      isScrolled ? 'py-3 shadow-md' : 'py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <FontAwesomeIcon icon={faTable} className="h-5 w-5 mr-2" />
            <span className="text-xl font-bold">Excel Deduplication Expert</span>
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="flex items-center text-sm font-medium hover:bg-primary-dark rounded-md px-3 py-2 transition-colors">
              <FontAwesomeIcon icon={faHome} className="h-4 w-4 mr-2" />
              Home
            </Link>
            <Link href="/help" className="flex items-center text-sm font-medium hover:bg-primary-dark rounded-md px-3 py-2 transition-colors">
              <FontAwesomeIcon icon={faQuestionCircle} className="h-4 w-4 mr-2" />
              Help
            </Link>
          </div>
          
          <div className="md:hidden">
            <button className="text-gray-800 hover:text-primary-light">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
} 