import Img from '@/Components/Atoms/Img';
import React from 'react';
import { TestimonialCardProps } from './TestimonialCard.interface';

export default function TestimonialCard({
  testimonial,
  imageSrc,
  name,
  position,
  alignment = 'center',
  design = 'default',
}: TestimonialCardProps) {
  const displaycCard =
    design === 'default' ? (
      <div
        className={`from-card-background to-card-to_background w-full rounded-lg bg-gradient-to-r p-6 text-${alignment} shadow-lg`}
      >
        <div
          className={`mt-4 flex ${alignment === 'center' ? 'justify-center' : alignment === 'left' ? 'justify-start' : 'justify-end'}`}
        >
          {alignment === 'center' ? (
            <p className="text-card-dark italic">{testimonial}</p>
          ) : (
            <Img
              className={`h-12 w-12 rounded-full border-2 border-gray-300 ${alignment === 'left' ? 'justify-start' : 'justify-end'}`}
              src={imageSrc}
              alt={name}
            />
          )}
        </div>
        <div
          className={`mt-4 flex ${alignment === 'center' ? 'justify-center' : alignment === 'left' ? 'justify-start' : 'justify-end'}`}
        >
          {alignment !== 'center' ? (
            <p className="text-card-dark italic">{testimonial}</p>
          ) : (
            <Img
              className="h-12 w-12 rounded-full border-2 border-gray-300"
              src={imageSrc}
              alt={name}
            />
          )}
        </div>
        <h4 className="mt-2 font-semibold">{name}</h4>
        <p className="text-card-dark/80 text-sm">{position}</p>
      </div>
    ) : (
      <div
        className={`from-card-background to-card-to_background w-full rounded-lg bg-gradient-to-r p-6 text-${alignment} shadow-lg`}
      >
        <div
          className={`mt-4 flex ${alignment === 'center' ? 'justify-center' : alignment === 'left' ? 'justify-start' : 'flex-row-reverse'} items-center`}
        >
          <Img
            className="h-12 w-12 rounded-full border-2 border-gray-300"
            src={imageSrc}
            alt={name}
          />
          <p
            className={`text-card-dark italic ${alignment === 'center' ? 'mt-4' : alignment === 'left' ? 'ml-4' : 'mr-4'}`}
          >
            {testimonial}
          </p>
        </div>
        <h4 className="mt-2 font-semibold">{name}</h4>
        <p className="text-card-dark/80 text-sm">{position}</p>
      </div>
    );
  return displaycCard;
}
