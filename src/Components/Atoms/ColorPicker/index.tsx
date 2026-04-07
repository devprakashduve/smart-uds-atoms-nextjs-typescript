import React, { useState, useId } from 'react';
import { ColorPickerProps } from './ColorPickerProps.interface';
import Label from '../Label';

const ColorPicker: React.FC<ColorPickerProps> = ({
  value,
  defaultValue = '#DB2777',
  label,
  onChange,
  showHexInput = true,
  disabled = false,
  className,
}) => {
  const id = useId();
  const isControlled = value !== undefined;
  const [internalColor, setInternalColor] = useState(defaultValue);
  const [hexInput, setHexInput] = useState(isControlled ? value! : defaultValue);

  const currentColor = isControlled ? value! : internalColor;

  const applyColor = (color: string) => {
    if (!isControlled) setInternalColor(color);
    setHexInput(color);
    onChange?.(color);
  };

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    applyColor(e.target.value);
  };

  const handleHexChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value;
    setHexInput(raw);
    if (/^#[0-9A-Fa-f]{6}$/.test(raw)) {
      applyColor(raw);
    }
  };

  return (
    <div className={`inline-flex flex-col gap-2 ${className ?? ''}`}>
      {label && (
        <Label htmlFor={`color-swatch-${id}`} className="text-sm font-medium">
          {label}
        </Label>
      )}
      <div className="flex items-center gap-3">
        {/* Color swatch / native picker */}
        <div className="relative h-9 w-9 overflow-hidden rounded border border-atom-input/40">
          <div
            className="absolute inset-0 rounded"
            style={{ backgroundColor: currentColor }}
          />
          <input
            id={`color-swatch-${id}`}
            type="color"
            value={currentColor}
            onChange={handleColorChange}
            disabled={disabled}
            aria-label={label ?? 'Pick a color'}
            className="absolute inset-0 h-full w-full cursor-pointer opacity-0 disabled:cursor-not-allowed"
          />
        </div>

        {/* Hex text input */}
        {showHexInput && (
          <input
            type="text"
            value={hexInput}
            onChange={handleHexChange}
            disabled={disabled}
            maxLength={7}
            placeholder="#000000"
            aria-label="Hex color code"
            className={`w-28 rounded-input border border-atom-input/40 bg-atom-input-background px-2 py-1 text-sm text-atom-input-text placeholder:text-atom-input-text/40 hover:border-atom-input/80 focus:border-atom-input focus:outline-none ${disabled ? 'cursor-not-allowed opacity-50' : ''}`}
          />
        )}
      </div>
    </div>
  );
};

export default ColorPicker;
