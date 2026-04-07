export interface ModalDialogsProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title?: string;
  message?: string;
  confirmText?: string;
  cancelText?: string;
  icon?: string;
  className?: string;
  /** Render modal in a React Portal attached to document.body */
  usePortal?: boolean;
}
