import React from 'react';
import { ButtonGroupProps } from './ButtonGroupProps.interface';
import './ButtonGroup.css';
import Button from '@/Components/Atoms/Button';

const ButtonGroup: React.FC<ButtonGroupProps> = ({ buttons }) => {
  return (
    <div className="btn-group flex space-x-2">
      {buttons.map((button, index) => {
        const buttonClasses = {
          primary: 'bg-blue-600 text-white hover:bg-blue-700',
          secondary: 'bg-gray-600 text-white hover:bg-gray-700',
          tertiary:
            'bg-transparent text-blue-600 border border-blue-600 hover:bg-blue-100',
        };

        return (
          <Button
            label={''}
            disabled={button.disabled}
            onClick={button.onClick}
            className={`btn ${
              buttonClasses[button.variant || 'primary']
            } rounded-md px-4 py-2 focus:outline-none`}
          >
            {button.label}
          </Button>
        );
      })}
    </div>
  );
};

export default ButtonGroup;
