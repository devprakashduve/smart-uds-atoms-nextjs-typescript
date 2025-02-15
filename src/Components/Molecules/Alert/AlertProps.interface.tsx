export interface AlertProps {
  type: 'success' | 'error' | 'warning' | 'info'; // Type of alert (determines style)
  message: string; // Message to display in the alert
  dismissible?: boolean; // Optional: Whether the alert can be dismissed
  onClose?: () => void; // Optional: Callback for when the alert is dismissed
}
