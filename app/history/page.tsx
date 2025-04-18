'use client';

import { ArrowPathIcon, ArrowDownTrayIcon } from '@heroicons/react/24/outline';
import Navbar from '../components/Navbar';
import Button from '../components/Button';

// Sample history data for demonstration
const historyItems = [
  {
    id: 1,
    fileName: 'employees_data.xlsx',
    processDate: '2023-06-28 14:32',
    removedRows: 213,
  },
  {
    id: 2,
    fileName: 'sales_report_2023Q1.xlsx',
    processDate: '2023-06-25 09:15',
    removedRows: 78,
  },
  {
    id: 3,
    fileName: 'customer_database.xlsx',
    processDate: '2023-06-20 16:45',
    removedRows: 156,
  },
  {
    id: 4,
    fileName: 'product_inventory.xlsx',
    processDate: '2023-06-18 11:20',
    removedRows: 45,
  },
];

export default function HistoryPage() {
  const handleDownload = (id: number) => {
    // In a real app, trigger download of the processed file
    console.log('Download file with ID:', id);
  };
  
  const handleReprocess = (id: number) => {
    // In a real app, navigate to the processing page with the saved settings
    console.log('Reprocess file with ID:', id);
  };
  
  return (
    <main className="min-h-screen pb-16">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
        <div className="bg-card rounded-xl shadow p-8">
          <h1 className="text-3xl font-bold mb-6">Processing History</h1>
          <p className="text-secondary-text mb-8">
            View and manage your recently processed Excel files
          </p>
          
          {historyItems.length > 0 ? (
            <div className="divide-y divide-divider">
              {historyItems.map((item) => (
                <div key={item.id} className="py-6 flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <div className="mb-4 sm:mb-0">
                    <h3 className="text-lg font-medium mb-1">{item.fileName}</h3>
                    <div className="flex items-center text-sm text-secondary-text">
                      <span className="mr-4">
                        <span className="inline-block w-4 h-4 mr-1 align-middle">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </span>
                        {item.processDate}
                      </span>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                        {item.removedRows} rows removed
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex space-x-3">
                    <Button 
                      variant="secondary" 
                      size="sm" 
                      icon={<ArrowDownTrayIcon className="h-4 w-4" />}
                      onClick={() => handleDownload(item.id)}
                    >
                      Download
                    </Button>
                    
                    <Button 
                      variant="secondary" 
                      size="sm" 
                      icon={<ArrowPathIcon className="h-4 w-4" />}
                      onClick={() => handleReprocess(item.id)}
                    >
                      Reprocess
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 text-secondary-text">
              <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              <h3 className="mt-2 text-lg font-medium">No processing history</h3>
              <p className="mt-1 text-sm">You haven&apos;t processed any Excel files yet.</p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
} 