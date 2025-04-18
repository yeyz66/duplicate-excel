'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faUpload,
  faBolt,
  faShieldAlt,
  faSlidersH,
  faFileExcel,
  faDownload
} from '@fortawesome/free-solid-svg-icons';
import Navbar from './components/Navbar';
import Button from './components/Button';
import FileDropArea from './components/FileDropArea';
import FeatureCard from './components/FeatureCard';
import * as XLSX from 'xlsx';

export default function Home() {
  const [isFileUploadVisible, setIsFileUploadVisible] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [processedFileUrl, setProcessedFileUrl] = useState<string | null>(null);
  const [processedFileName, setProcessedFileName] = useState<string>('');
  const [originalRowCount, setOriginalRowCount] = useState<number>(0);
  const [uniqueRowCount, setUniqueRowCount] = useState<number>(0);
  
  const handleFileSelected = (file: File) => {
    setSelectedFile(file);
    setIsFileUploadVisible(false);
    setError(null);
    setProcessedFileUrl(null);
    setOriginalRowCount(0);
    setUniqueRowCount(0);
    console.log('File selected:', file.name);
  };
  
  const showFileUpload = () => {
    setSelectedFile(null);
    setIsFileUploadVisible(true);
    setError(null);
    setProcessedFileUrl(null);
    setOriginalRowCount(0);
    setUniqueRowCount(0);
  };
  
  const handleStartProcessing = async () => {
    if (!selectedFile) {
      setError("Please select a file first.");
      return;
    }
    setIsProcessing(true);
    setError(null);
    setProcessedFileUrl(null);
    setOriginalRowCount(0);
    setUniqueRowCount(0);
    console.log('Starting processing for:', selectedFile.name);

    try {
      const arrayBuffer = await selectedFile.arrayBuffer();
      const workbook = XLSX.read(arrayBuffer, { type: 'array' });
      
      const firstSheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[firstSheetName];
      
      const data: Record<string, unknown>[] = XLSX.utils.sheet_to_json(worksheet);

      const uniqueData: Record<string, unknown>[] = [];
      const seen = new Set<string>();

      for (const row of data) {
        const rowString = JSON.stringify(row);
        if (!seen.has(rowString)) {
          seen.add(rowString);
          uniqueData.push(row);
        }
      }

      setOriginalRowCount(data.length);
      setUniqueRowCount(uniqueData.length);

      console.log(`Original rows: ${data.length}, Unique rows: ${uniqueData.length}`);

      const newWorksheet = XLSX.utils.json_to_sheet(uniqueData);
      
      const newWorkbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(newWorkbook, newWorksheet, firstSheetName);

      const outputBuffer = XLSX.write(newWorkbook, { bookType: 'xlsx', type: 'array' });
      const blob = new Blob([outputBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      
      const url = URL.createObjectURL(blob);
      setProcessedFileUrl(url);

      const originalFileName = selectedFile.name;
      const nameWithoutExtension = originalFileName.substring(0, originalFileName.lastIndexOf('.')) || originalFileName;
      setProcessedFileName(`${nameWithoutExtension}_deduplicated.xlsx`);

      console.log('Processing finished for:', selectedFile.name);

    } catch (err) {
      console.error('Processing error:', err);
      setError(err instanceof Error ? err.message : 'Processing encountered an unknown error.');
      setProcessedFileUrl(null);
      setOriginalRowCount(0);
      setUniqueRowCount(0);
    } finally {
      setIsProcessing(false);
    }
  };
  
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 md:pt-40 md:pb-28 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 text-primary-dark">
            <span className="block">How to Remove Duplicates in Excel: Fast & Easy</span>
          </h1>
          <p className="text-xl text-secondary-text mb-10 max-w-2xl mx-auto">
            Learn how to delete duplicates in Excel with our simple tool. Upload your file, remove duplicate rows with one click, and improve your data accuracy instantly.
          </p>
          
          {!selectedFile && !isFileUploadVisible && (
            <Button 
              size="lg" 
              icon={<FontAwesomeIcon icon={faUpload} className="h-5 w-5 mr-2" />}
              onClick={showFileUpload}
            >
              Remove Excel Duplicates Now
            </Button>
          )}

          {isFileUploadVisible && (
             <div className="max-w-lg mx-auto bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
               <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Upload Your Excel File</h3>
              <FileDropArea onFileSelect={handleFileSelected} />
               <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">Drag and drop files here, or click to select</p>
               <Button size="sm" onClick={() => setIsFileUploadVisible(false)} className="mt-4 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700">Cancel</Button>
             </div>
          )}

          {selectedFile && (
            <div className="mt-10 max-w-lg mx-auto bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 text-left">
               <div className="flex items-center justify-between mb-4">
                 <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Selected File</h3>
                 <Button size="sm" onClick={showFileUpload} disabled={isProcessing} className="border border-gray-300 dark:border-gray-600 px-3 py-1 rounded text-sm hover:bg-gray-100 dark:hover:bg-gray-700">
                    Change File
                 </Button>
               </div>

               <div className="flex items-center space-x-3 bg-gray-100 dark:bg-gray-700 p-3 rounded-md mb-4">
                 <FontAwesomeIcon icon={faFileExcel} className="h-6 w-6 text-green-600" />
                 <span className="text-sm font-medium text-gray-800 dark:text-gray-200 truncate">{selectedFile.name}</span>
               </div>

              <Button
                size="lg"
                onClick={handleStartProcessing}
                disabled={isProcessing}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
              >
                {isProcessing ? 'Processing...' : 'Start Cleaning'}
              </Button>
              {error && <p className="text-red-500 text-sm mt-2 text-center">{error}</p>}

              {processedFileUrl && (
                <div className="mt-4 text-center">
                  <a
                    href={processedFileUrl}
                    download={processedFileName}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                  >
                    <FontAwesomeIcon icon={faDownload} className="h-5 w-5 mr-2" />
                    Download Processed File
                  </a>
                  {originalRowCount > 0 && uniqueRowCount >= 0 && (
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                      Processing complete! Found {originalRowCount - uniqueRowCount} duplicate rows (Original: {originalRowCount} rows, After processing: {uniqueRowCount} rows).
                    </p>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center text-primary-dark">How to Delete Duplicates in Excel</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<FontAwesomeIcon icon={faBolt} />}
              title="Step 1: Upload Your Excel File"
              description="Simply upload your Excel spreadsheet containing duplicate data that you want to clean"
            />
            
            <FeatureCard
              icon={<FontAwesomeIcon icon={faShieldAlt} />}
              title="Step 2: Process Your File"
              description="Our tool automatically identifies and removes duplicate rows while keeping your data secure"
            />
            
            <FeatureCard
              icon={<FontAwesomeIcon icon={faSlidersH} />}
              title="Step 3: Download Clean Data"
              description="Download your Excel file with all duplicates removed, saving you time and preventing data errors"
            />
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      {!selectedFile && !isFileUploadVisible && (
         <section className="py-20 px-4 sm:px-6 bg-gradient-to-r from-primary-dark to-primary">
           <div className="max-w-4xl mx-auto text-center">
             <h2 className="text-3xl font-bold mb-6 text-gray-800">Remove Duplicates in Excel Today</h2>
             <p className="text-lg mb-8 opacity-90 text-gray-800">
               Stop wasting time manually finding and deleting duplicates in Excel. Our tool makes it simple to identify and remove duplicate rows in your spreadsheets instantly.
             </p>
             <Button
               size="lg"
               className="shadow-lg hover:shadow-xl button button-primary"
               onClick={showFileUpload}
             >
               Delete Excel Duplicates Now
             </Button>
           </div>
         </section>
       )}
      
      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 border-t border-divider">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-secondary-text">
              © {new Date().getFullYear()} Excel Duplicate Remover. All rights reserved.
            </p>
          </div>
          
          <div className="flex space-x-6">
            <Link href="/privacy" className="text-sm text-secondary-text hover:text-primary">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-secondary-text hover:text-primary">
              Terms of Service
            </Link>
            <Link href="/contact" className="text-sm text-secondary-text hover:text-primary">
              Contact Us
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
