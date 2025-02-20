import React, { useEffect, useState } from 'react';
import Button from '@/Components/Atoms/Button';
import Input from '@/Components/Atoms/InputGroup/Input';
import { CTACardProps } from './CTACardProps.interface';

export default function CTACard({
  email,
  onChange,
  onSubscribe,
  title,
  btnText,
  paraText,
}: CTACardProps) {
  const [userEmail, setUserEmail] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = onChange?.(e);
    value && setUserEmail(value);
  };

  const handleSubscribe = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (userEmail && onSubscribe) {
      onSubscribe?.(userEmail);
    }
  };

  return (
    <div className="from-card-background to-card-to_background text-card-dark max-w-sm rounded-lg bg-gradient-to-r p-6 text-center shadow-lg">
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
          <Button type="submit" className="mt-3">
            {btnText}
          </Button>
        )}
      </form>
    </div>
  );
}
