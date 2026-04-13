export interface QuoteProps {
  /** The quote text content */
  content: string;
  /** Author of the quote */
  author?: string;
  /** Source title, publication, or citation */
  source?: string;
  /** Show an opening quotation mark icon. Default: true */
  showIcon?: boolean;
  className?: string;
}
