import React from 'react';
import Button from '@/Components/Atoms/Button';
import Input from '@/Components/Atoms/InputGroup/Input';
import {
  InputSize,
  InputType,
} from '@/Components/Atoms/InputGroup/Input/InputProps.interface';
import { CTACardProps } from './CTACardProps.interface';

export default function CTACard({
  email,
  onEmailChange,
  onSubscribe,
}: CTACardProps) {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onEmailChange(event.target.value);
  };
  const handleSubscribe = () => {
    if (email) {
      onSubscribe && onSubscribe();
    } else {
      alert('Please enter a valid email address.');
    }
  };

  return (
    <div className="from-card-background to-card-to_background text-card-dark max-w-sm rounded-lg bg-gradient-to-r p-6 text-center shadow-lg">
      <h3 className="text-2xl font-semibold">Join Our Newsletter</h3>
      <p className="mt-2 text-sm">
        Get the latest updates straight to your inbox.
      </p>
      <Input
        id="email"
        label="Email Input"
        name="email"
        onChange={(e: any) => handleInputChange(e)}
        placeholder="Enter email"
        value={email}
        type={InputType.EMAIL}
      />
      <Button className="mt-3" onClick={() => handleSubscribe}>
        Subscribe
      </Button>
    </div>
  );
}
