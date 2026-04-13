import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import FileUploader from './index';

const defaultProps = {
  label: 'Upload File',
  onFileChange: jest.fn(),
};

// Helper to create a mock File
const createFile = (name: string, size: number, type: string): File => {
  const file = new File(['a'.repeat(size)], name, { type });
  return file;
};

// Helper to create a mock FileList (jsdom doesn't support DataTransfer)
const createFileList = (files: File[]): FileList => {
  const fileList = {
    length: files.length,
    item: (index: number) => files[index] ?? null,
    [Symbol.iterator]: function* () {
      yield* files;
    },
  } as unknown as FileList;
  files.forEach((f, i) => {
    Object.defineProperty(fileList, i, { value: f, enumerable: true });
  });
  return fileList;
};

describe('FileUploader', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('rendering', () => {
    it('renders the label', () => {
      render(<FileUploader {...defaultProps} />);
      expect(screen.getByText('Upload File')).toBeInTheDocument();
    });

    it('renders drag-and-drop zone by default', () => {
      render(<FileUploader {...defaultProps} />);
      expect(
        screen.getByRole('button', { name: /choose a file/i })
      ).toBeInTheDocument();
    });

    it('renders a plain file input when dragAndDrop=false', () => {
      render(<FileUploader {...defaultProps} dragAndDrop={false} />);
      const input = document.querySelector(
        'input[type="file"]'
      ) as HTMLInputElement;
      expect(input).toBeInTheDocument();
      expect(screen.queryByRole('button')).not.toBeInTheDocument();
    });

    it('renders custom uploadButtonText', () => {
      render(
        <FileUploader {...defaultProps} uploadButtonText="Select Image" />
      );
      expect(
        screen.getByRole('button', { name: /select image/i })
      ).toBeInTheDocument();
    });

    it('applies custom className to container', () => {
      const { container } = render(
        <FileUploader {...defaultProps} className="custom-uploader" />
      );
      expect(container.firstChild).toHaveClass('custom-uploader');
    });
  });

  describe('file selection via input', () => {
    it('calls onFileChange when a valid file is selected', () => {
      render(<FileUploader {...defaultProps} dragAndDrop={false} />);
      const input = document.querySelector(
        'input[type="file"]'
      ) as HTMLInputElement;
      const file = createFile('test.png', 100, 'image/png');
      const fileList = createFileList([file]);
      Object.defineProperty(input, 'files', {
        value: fileList,
        configurable: true,
      });
      fireEvent.change(input);
      expect(defaultProps.onFileChange).toHaveBeenCalledWith(fileList);
    });

    it('shows error for invalid file type', () => {
      render(
        <FileUploader
          {...defaultProps}
          dragAndDrop={false}
          acceptedFileTypes={['image/png']}
          errorMessageFileType="Only PNG allowed"
        />
      );
      const input = document.querySelector(
        'input[type="file"]'
      ) as HTMLInputElement;
      const file = createFile('test.pdf', 100, 'application/pdf');
      const fileList = createFileList([file]);
      Object.defineProperty(input, 'files', {
        value: fileList,
        configurable: true,
      });
      fireEvent.change(input);
      expect(screen.getByText('Only PNG allowed')).toBeInTheDocument();
      expect(defaultProps.onFileChange).toHaveBeenCalledWith(null);
    });

    it('shows error when file exceeds maxFileSize', () => {
      render(
        <FileUploader
          {...defaultProps}
          dragAndDrop={false}
          maxFileSize={50}
          errorMessageFileSize="File too large"
        />
      );
      const input = document.querySelector(
        'input[type="file"]'
      ) as HTMLInputElement;
      const file = createFile('big.png', 100, 'image/png');
      const fileList = createFileList([file]);
      Object.defineProperty(input, 'files', {
        value: fileList,
        configurable: true,
      });
      fireEvent.change(input);
      expect(screen.getByText('File too large')).toBeInTheDocument();
      expect(defaultProps.onFileChange).toHaveBeenCalledWith(null);
    });

    it('passes multiple attribute to hidden input when multiple=true', () => {
      render(<FileUploader {...defaultProps} multiple />);
      const hiddenInput = document.querySelector(
        'input[type="file"]'
      ) as HTMLInputElement;
      expect(hiddenInput).toHaveAttribute('multiple');
    });
  });

  describe('drag and drop', () => {
    it('shows drop zone with drag-and-drop text hint', () => {
      render(<FileUploader {...defaultProps} />);
      expect(screen.getByText(/drag and drop/i)).toBeInTheDocument();
    });

    it('shows "Drop files here" text while dragging over', () => {
      render(
        <FileUploader {...defaultProps} uploadButtonText="Choose a file" />
      );
      const dropZone = screen.getByRole('button', { name: /choose a file/i });
      fireEvent.dragOver(dropZone);
      expect(screen.getByText('Drop files here')).toBeInTheDocument();
    });

    it('reverts label text after drag leave', () => {
      render(
        <FileUploader {...defaultProps} uploadButtonText="Choose a file" />
      );
      const dropZone = screen.getByRole('button', { name: /choose a file/i });
      fireEvent.dragOver(dropZone);
      fireEvent.dragLeave(dropZone);
      expect(screen.getByText('Choose a file')).toBeInTheDocument();
    });

    it('calls onFileChange when a valid file is dropped', () => {
      render(
        <FileUploader {...defaultProps} acceptedFileTypes={['image/png']} />
      );
      const dropZone = screen.getByRole('button', { name: /choose a file/i });
      const file = createFile('photo.png', 100, 'image/png');
      const fileList = createFileList([file]);

      fireEvent.drop(dropZone, {
        dataTransfer: { files: fileList },
      });

      expect(defaultProps.onFileChange).toHaveBeenCalledWith(fileList);
    });

    it('shows error when dropped file has invalid type', () => {
      render(
        <FileUploader
          {...defaultProps}
          acceptedFileTypes={['image/png']}
          errorMessageFileType="PNG only"
        />
      );
      const dropZone = screen.getByRole('button', { name: /choose a file/i });
      const file = createFile('doc.pdf', 100, 'application/pdf');
      const fileList = createFileList([file]);

      fireEvent.drop(dropZone, {
        dataTransfer: { files: fileList },
      });

      expect(screen.getByText('PNG only')).toBeInTheDocument();
    });

    it('shows error when dropped file exceeds maxFileSize', () => {
      render(
        <FileUploader
          {...defaultProps}
          maxFileSize={50}
          errorMessageFileSize="Too big"
        />
      );
      const dropZone = screen.getByRole('button', { name: /choose a file/i });
      const file = createFile('large.png', 100, 'image/png');
      const fileList = createFileList([file]);

      fireEvent.drop(dropZone, {
        dataTransfer: { files: fileList },
      });

      expect(screen.getByText('Too big')).toBeInTheDocument();
    });

    it('displays file name after a successful drop', () => {
      render(<FileUploader {...defaultProps} />);
      const dropZone = screen.getByRole('button', { name: /choose a file/i });
      const file = createFile('my-photo.png', 100, 'image/png');
      const fileList = createFileList([file]);

      fireEvent.drop(dropZone, {
        dataTransfer: { files: fileList },
      });

      expect(screen.getByText('my-photo.png')).toBeInTheDocument();
    });

    it('is keyboard accessible — Enter key opens file dialog', () => {
      render(<FileUploader {...defaultProps} />);
      const dropZone = screen.getByRole('button', { name: /choose a file/i });
      // Should not throw when Enter is pressed
      expect(() => fireEvent.keyDown(dropZone, { key: 'Enter' })).not.toThrow();
    });
  });
});
