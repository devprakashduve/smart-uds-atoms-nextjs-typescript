import React, { useRef, useState } from 'react';
import { FileUploaderProps } from './FileUploaderProps.interface';

const FileUploader: React.FC<FileUploaderProps> = ({
  onFileChange,
  label,
  acceptedFileTypes = [],
  maxFileSize = Infinity,
  uploadButtonText = 'Choose a file',
  errorMessageFileType = 'Invalid file type',
  errorMessageFileSize = 'File is too large',
  dragAndDrop = true,
  multiple = false,
  className,
}) => {
  const [error, setError] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [fileNames, setFileNames] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const validateAndApply = (files: FileList | null) => {
    if (!files || files.length === 0) return;

    const fileArray = Array.from(files);

    for (const file of fileArray) {
      if (
        acceptedFileTypes.length > 0 &&
        !acceptedFileTypes.includes(file.type)
      ) {
        setError(errorMessageFileType);
        onFileChange(null);
        return;
      }
      if (file.size > maxFileSize) {
        setError(errorMessageFileSize);
        onFileChange(null);
        return;
      }
    }

    setError(null);
    setFileNames(fileArray.map((f) => f.name));
    onFileChange(files);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    validateAndApply(event.target.files);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    validateAndApply(e.dataTransfer.files);
  };

  return (
    <div className={`file-uploader space-y-4 ${className ?? ''}`}>
      <label className="block text-sm font-semibold">{label}</label>

      {dragAndDrop ? (
        <div
          role="button"
          tabIndex={0}
          aria-label={uploadButtonText}
          onClick={() => inputRef.current?.click()}
          onKeyDown={(e) => e.key === 'Enter' && inputRef.current?.click()}
          onDragOver={handleDragOver}
          onDragEnter={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          className={`flex cursor-pointer flex-col items-center justify-center rounded-md border-2 border-dashed p-8 text-center transition-colors focus:outline-none focus:ring-2 focus:ring-atom-input focus:ring-offset-1 ${
            isDragging
              ? 'border-atom-input bg-atom-input/10 text-atom-input'
              : 'border-atom-input-text/40 hover:border-atom-input/80'
          }`}
        >
          <svg
            className="mb-2 h-8 w-8 text-atom-input-text/50"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
            />
          </svg>
          <span className="text-sm font-medium">
            {isDragging ? 'Drop files here' : uploadButtonText}
          </span>
          <span className="mt-1 text-xs text-atom-input-text/60">
            or drag and drop
          </span>
          {fileNames.length > 0 && (
            <span className="mt-2 text-xs text-atom-input">
              {fileNames.join(', ')}
            </span>
          )}
          <input
            ref={inputRef}
            type="file"
            onChange={handleFileChange}
            className="hidden"
            title={uploadButtonText}
            multiple={multiple}
            accept={acceptedFileTypes.join(',')}
          />
        </div>
      ) : (
        <input
          type="file"
          onChange={handleFileChange}
          className="w-full rounded-md border border-atom-input-text/40 p-3 hover:border-atom-input-text/80 focus:outline-none"
          title={uploadButtonText}
          placeholder={uploadButtonText}
          multiple={multiple}
          accept={acceptedFileTypes.join(',')}
        />
      )}

      {error && <p className="text-sm text-error">{error}</p>}
    </div>
  );
};

export default FileUploader;
