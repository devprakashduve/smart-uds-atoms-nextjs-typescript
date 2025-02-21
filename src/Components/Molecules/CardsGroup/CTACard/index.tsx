import React, { useState } from 'react';
import Button from '@/Components/Atoms/Button';
import Input from '@/Components/Atoms/InputGroup/Input';
import { CTACardProps } from './CTACardProps.interface';

export default function CTACard({
  onChange,
  onSubscribe,
  title,
  btnText,
  paraText,
}: CTACardProps) {
  const [userEmail, setUserEmail] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = onChange?.(e);
    if (value) {
      setUserEmail(value);
    }
  };

  const handleSubscribe = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (userEmail && onSubscribe) {
      onSubscribe?.(userEmail);
    }
  };

  return (
    <div className="max-w-sm rounded-card bg-gradient-to-r from-atom-card-background to-atom-card-to_background p-6 text-center text-atom-card-dark shadow-lg">
      {title && <h3 className="text-2xl font-semibold">{title}</h3>}
      {paraText && <p className="m-2 text-sm">{paraText}</p>}
      <form onSubmit={(e) => handleSubscribe(e)}>
        <Input
          id="email"
          name="email"
          onChange={(e) => handleInputChange(e)}
          placeholder="Enter email"
          value={userEmail}
          type={'email'}
          isRequired={true}
          showIcon={true}
          validationOnFocus={true}
        />
        {btnText && (
          <Button variant="default" type="submit" className="mt-3">
            {btnText}
          </Button>
        )}
      </form>
    </div>
  );
}
