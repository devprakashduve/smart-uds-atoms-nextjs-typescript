import React from 'react';
import { QuoteProps } from './QuoteProps.interface';

const Quote: React.FC<QuoteProps> = ({
  content,
  author,
  source,
  showIcon = true,
  className,
}) => {
  return (
    <blockquote
      className={`relative border-l-4 border-atom-btn-dark pl-6 py-2 italic text-atom-input-text ${className ?? ''}`}
    >
      {showIcon && (
        <span
          aria-hidden="true"
          className="absolute -left-1 -top-2 text-5xl leading-none text-atom-btn-dark/30 select-none"
        >
          &ldquo;
        </span>
      )}
      <p className="text-base leading-relaxed">{content}</p>
      {(author || source) && (
        <footer className="mt-3 not-italic">
          {author && (
            <cite className="text-sm font-semibold text-atom-btn-dark">
              {author}
            </cite>
          )}
          {source && (
            <span className="ml-1 text-sm text-atom-input-text/60">
              &mdash; <em>{source}</em>
            </span>
          )}
        </footer>
      )}
    </blockquote>
  );
};

export default Quote;
