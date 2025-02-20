import React, { useState } from 'react';
import { FileUploaderProps } from './FileUploaderProps.interface';

const FileUploader: React.FC<FileUploaderProps> = ({
  onFileChange,
  label,
  acceptedFileTypes = [],
  maxFileSize = Infinity,
  uploadButtonText = 'Choose a file',
  errorMessageFileType = 'Invalid file type',
  errorMessageFileSize = 'File is too large',
}) => {
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files) return;

    const selectedFile = files[0];

    // Check file type
    if (
      acceptedFileTypes.length > 0 &&
      !acceptedFileTypes.includes(selectedFile.type)
    ) {
      setError(errorMessageFileType);
      onFileChange(null); // Clear the selected file
      return;
    }

    // Check file size
    if (selectedFile.size > maxFileSize) {
      setError(errorMessageFileSize);
      onFileChange(null); // Clear the selected file
      return;
    }

    // If no errors, clear the error message and pass the file
    setError(null);
    onFileChange(files);
  };

  return (
    <div className="file-uploader space-y-4">
      <label className="block text-sm font-semibold">{label}</label>
      <input
        type="file"
        onChange={handleFileChange}
        className="w-full rounded-md border border-atom-input-text/40 p-3 hover:border-atom-input-text/80 focus:outline-none"
        title={uploadButtonText}
        placeholder={uploadButtonText}
      />
      {error && <p className="text-sm text-red-600">{error}</p>}
    </div>
  );
};

export default FileUploader;
