import React from 'react';
import { DisplayMapProps } from './DisplayMap.interface';
import FormHandler from '../FormHandler';

const DisplayMap: React.FC<DisplayMapProps> = ({
  mapSrc,
  title,
  description,
  formHandlerContent,
  footerText,
}) => {
  return (
    <section className="relative">
      {/* Map Background */}
      <div className="absolute inset-0 bg-atom-menu/10">
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
        <div className="relative z-10 mt-10 flex w-full flex-col rounded-lg bg-atom-menu-light p-8 shadow-lg md:ml-auto md:mt-0 md:w-1/2 lg:w-1/3">
          <h2 className="title-font mb-1 text-lg font-medium">{title}</h2>
          <p className="mb-5 leading-relaxed">{description}</p>

          {formHandlerContent && <FormHandler {...formHandlerContent} />}

          <p className="mt-3 text-xs">{footerText}</p>
        </div>
      </div>
    </section>
  );
};

export default DisplayMap;
