import { useState, useEffect, useRef, useCallback } from 'react';
import ReactDOM from 'react-dom';
import { ModalDialogsProps } from './ModalDialogsProps.interface';
import Button from '@/Components/Atoms/Button';
import Icon from '@/Components/Atoms/Icon';

const FOCUSABLE_SELECTORS =
  'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

export default function ModalDialogs({
  isOpen,
  onClose,
  onConfirm,
  title = 'Deactivate account',
  message = 'Are you sure you want to deactivate your account? All of your data will be permanently removed. This action cannot be undone.',
  confirmText = 'Deactivate',
  cancelText = 'Cancel',
  icon,
  className,
  usePortal = false,
}: ModalDialogsProps) {
  const [isMounted, setIsMounted] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      previousFocusRef.current = document.activeElement as HTMLElement;
      setIsMounted(true);
      requestAnimationFrame(() => {
        setIsActive(true);
        // Move focus to the first focusable element in the modal
        const focusable = containerRef.current?.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTORS);
        if (focusable && focusable.length > 0) {
          focusable[0].focus();
        }
      });
    } else {
      setIsActive(false);
      const timer = setTimeout(() => {
        setIsMounted(false);
        // Restore focus to the element that triggered the modal
        previousFocusRef.current?.focus();
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Escape key + focus trap
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isActive) return;

      if (e.key === 'Escape') {
        onClose();
        return;
      }

      if (e.key === 'Tab') {
        const focusable = containerRef.current?.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTORS);
        if (!focusable || focusable.length === 0) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault();
            last.focus();
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      }
    },
    [isActive, onClose]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  if (!isMounted) return null;

  const modalContent = (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black transition-opacity duration-300 ease-out ${
          isActive ? 'opacity-40' : 'opacity-0'
        }`}
        aria-hidden="true"
        onClick={onClose}
      />

      <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
        <div
          ref={containerRef}
          className={`relative transform overflow-hidden rounded text-left shadow-xl transition-all duration-300 ease-out sm:my-8 sm:w-full sm:max-w-lg ${
            isActive ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          } ${className ?? ''}`}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
        >
          <div className="bg-atom-modelBox-to_background/40 px-4 pb-4 pt-5 text-atom-modelBox-text sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              {icon && (
                <div className="mx-auto flex h-12 w-12 shrink-0 items-center justify-center sm:mx-0 sm:h-10 sm:w-10">
                  <Icon name={'close'} variant={'outline'} />
                </div>
              )}
              <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                <h3 className="text-base font-semibold" id="modal-title">
                  {title}
                </h3>
                <div className="mt-2">
                  <p className="text-sm" id="modal-description">
                    {message}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-atom-modelBox-to_background/40 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
            {confirmText && (
              <Button
                type="button"
                onClick={() => {
                  onConfirm();
                  onClose();
                }}
                variant="default"
              >
                {confirmText}
              </Button>
            )}
            {cancelText && (
              <Button
                type="button"
                onClick={onClose}
                variant="default"
                className="mr-2"
              >
                {cancelText}
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  if (usePortal && typeof document !== 'undefined') {
    return ReactDOM.createPortal(modalContent, document.body);
  }

  return modalContent;
}
