export interface FileUploaderProps {
  onFileChange: (files: FileList | null) => void; // Callback to handle file selection
  label: string; // Label for the uploader button
  acceptedFileTypes?: string[]; // Optional: Array of accepted file types (e.g., ['image/png', 'application/pdf'])
  maxFileSize?: number; // Optional: Maximum file size in bytes
  uploadButtonText?: string; // Optional: Text for the upload button
  errorMessageFileType?: string; // Optional: Error message for invalid file type
  errorMessageFileSize?: string; // Optional: Error message for file size exceeding limit
}
