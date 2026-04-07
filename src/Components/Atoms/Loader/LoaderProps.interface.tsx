export type LoaderVariant = 'line' | 'circle' | 'text' | 'image' | 'card';

export interface LoaderProps {
  /** Skeleton variant. Default: 'line' */
  variant?: LoaderVariant;
  /** Number of repeated skeleton lines (for 'line' variant). Default: 3 */
  lines?: number;
  /** Width of the skeleton element. Default: '100%' */
  width?: string | number;
  /** Height of the skeleton element. Default: depends on variant */
  height?: string | number;
  /** Show rounded style. Default: false */
  rounded?: boolean;
  className?: string;
}
