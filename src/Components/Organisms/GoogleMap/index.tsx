import React from 'react';
import { GoogleMapProps } from './GoogleMap.interface';

const GoogleMap: React.FC<GoogleMapProps> = ({
  mapSrc,
  title,
  description,
  emailPlaceholder,
  messagePlaceholder,
  buttonText,
  footerText,
}) => {
  return (
    <section className="relative text-gray-700">
      {/* Map Background */}
      <div className="absolute inset-0 bg-gray-300">
        <iframe
          width="100%"
          height="100%"
          title="map"
          scrolling="no"
          src={mapSrc}
          style={{ filter: 'grayscale(1) contrast(1.2) opacity(0.4)' }}
        ></iframe>
      </div>

      {/* Contact Form */}
      <div className="container mx-auto flex px-5 py-24">
        <div className="relative z-10 mt-10 flex w-full flex-col rounded-lg bg-white p-8 shadow-lg md:ml-auto md:mt-0 md:w-1/2 lg:w-1/3">
          <h2 className="title-font mb-1 text-lg font-medium text-gray-900">
            {title}
          </h2>
          <p className="mb-5 leading-relaxed text-gray-600">{description}</p>

          <input
            className="mb-4 rounded border border-gray-400 bg-white px-4 py-2 text-base focus:border-indigo-500 focus:outline-none"
            placeholder={emailPlaceholder}
            type="email"
          />
          <textarea
            className="mb-4 h-32 resize-none rounded border border-gray-400 bg-white px-4 py-2 text-base focus:border-indigo-500 focus:outline-none"
            placeholder={messagePlaceholder}
          ></textarea>

          <button className="rounded border-0 bg-indigo-500 px-6 py-2 text-lg text-white hover:bg-indigo-600 focus:outline-none">
            {buttonText}
          </button>

          <p className="mt-3 text-xs text-gray-500">{footerText}</p>
        </div>
      </div>
    </section>
  );
};

export default GoogleMap;
