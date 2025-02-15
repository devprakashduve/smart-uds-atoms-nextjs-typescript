'use client';

import { useState, useEffect } from 'react';

import { ModalDialogsProps } from './ModalDialogsProps.interface';
import Button from '@/Components/Atoms/Button';
import Icon from '@/Components/Atoms/Icon';

export default function ModalDialogs({
  isOpen,
  onClose,
  onConfirm,
  title = 'Deactivate account',
  message = 'Are you sure you want to deactivate your account? All of your data will be permanently removed. This action cannot be undone.',
  confirmText = 'Deactivate',
  cancelText = 'Cancel',
  icon,
}: ModalDialogsProps) {
  const [isMounted, setIsMounted] = useState(false);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
      requestAnimationFrame(() => setIsActive(true));
    } else {
      setIsActive(false);
      const timer = setTimeout(() => setIsMounted(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isActive) onClose();
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isActive, onClose]);

  if (!isMounted) return null;

  return (
    <div className="fixed inset-0 z-10 overflow-y-auto">
      <div
        className={`fixed inset-0 bg-line-light/75 transition-opacity duration-300 ease-out ${
          isActive ? 'opacity-75' : 'opacity-0'
        }`}
        aria-hidden="true"
        onClick={onClose}
      />

      <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
        <div
          className={`relative transform overflow-hidden rounded text-left shadow-xl transition-all duration-300 ease-out sm:my-8 sm:w-full sm:max-w-lg ${
            isActive ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
        >
          <div className="bg-line-dark/75 px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              {icon && (
                <div className="mx-auto flex h-12 w-12 shrink-0 items-center justify-center sm:mx-0 sm:h-10 sm:w-10">
                  <Icon name={icon} className="h-6 w-6" />
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
          <div className="bg-line-dark/75 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
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
}
