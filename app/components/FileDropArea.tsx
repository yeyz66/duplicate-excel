'use client';

import { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudUploadAlt, faFileExcel } from '@fortawesome/free-solid-svg-icons';
import Button from './Button';

interface FileDropAreaProps {
  onFileSelect: (file: File) => void;
  acceptedFileTypes?: string[];
}

export default function FileDropArea({ 
  onFileSelect,
  acceptedFileTypes = ['.xlsx', '.xls', '.csv']
}: FileDropAreaProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };
  
  const handleDragLeave = () => {
    setIsDragging(false);
  };
  
  const validateFile = (file: File): boolean => {
    // Check file type
    const fileExtension = '.' + file.name.split('.').pop()?.toLowerCase();
    if (!acceptedFileTypes.includes(fileExtension)) {
      setErrorMessage(`Unsupported file type. Please upload a file in ${acceptedFileTypes.join(', ')} format.`);
      return false;
    }
    
    // Check file size (10MB limit)
    const fileSizeInMB = file.size / (1024 * 1024);
    if (fileSizeInMB > 10) {
      setErrorMessage('File size exceeds the 10MB limit.');
      return false;
    }
    
    setErrorMessage(null);
    return true;
  };
  
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const file = e.dataTransfer.files[0];
      if (validateFile(file)) {
        onFileSelect(file);
      }
    }
  };
  
  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      if (validateFile(file)) {
        onFileSelect(file);
      }
    }
  };
  
  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };
  
  return (
    <div className="w-full">
      <div
        className={`
          border-2 border-dashed rounded-lg p-8 text-center transition-all
          ${isDragging 
            ? 'border-primary bg-primary-light/20' 
            : 'border-primary-light hover:bg-primary-light/10 bg-primary-light/5'}
        `}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <FontAwesomeIcon 
          icon={faCloudUploadAlt} 
          className="text-primary text-5xl mb-4" 
        />
        <h3 className="text-lg font-medium mb-2">Drag and drop files here</h3>
        <p className="text-secondary-text mb-4">or</p>
        
        <Button 
          onClick={handleButtonClick}
          className="mx-auto"
          icon={<FontAwesomeIcon icon={faFileExcel} className="h-4 w-4" />}
        >
          Select File
        </Button>
        
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileSelect}
          accept={acceptedFileTypes.join(',')}
          className="hidden"
        />
        
        <p className="mt-4 text-sm text-secondary-text">
          Supports {acceptedFileTypes.join(', ')} formats (max 10MB)
        </p>
      </div>
      
      {errorMessage && (
        <div className="mt-3 text-sm text-error">
          {errorMessage}
        </div>
      )}
    </div>
  );
} 