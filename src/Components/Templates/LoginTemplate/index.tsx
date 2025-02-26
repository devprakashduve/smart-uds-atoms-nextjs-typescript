import { useState } from 'react';
import Input from '@/Components/Atoms/InputGroup/Input';
import Button from '@/Components/Atoms/Button';
import { LoginTemplateProps } from './LoginTemplate.interface';

export default function LoginTemplate({
  email: initialEmail,
  password: initialPassword,
  onSubmit,
  emailPlaceholder,
  passwordPlaceholder,
  emailRequiredErrorMessage,
  passwordRequiredErrorMessage,
  emailId,
  emailName,
  emailLabel,
  emailType,
  passwordId,
  passwordName,
  passwordLabel,
  passwordType,
  buttonChild,
}: LoginTemplateProps) {
  const [email, setEmail] = useState(initialEmail);
  const [password, setPassword] = useState(initialPassword);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ email, password });
  };

  return (
    <div className="login-template">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <Input
            id={emailId}
            name={emailName}
            label={emailLabel}
            type={emailType}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={emailPlaceholder}
            isRequired={true}
            requiredErrorMessage={emailRequiredErrorMessage}
            autoComplete="off"
          />
        </div>
        <div className="mb-4">
          <Input
            id={passwordId}
            name={passwordName}
            label={passwordLabel}
            type={passwordType}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder={passwordPlaceholder}
            isRequired={true}
            requiredErrorMessage={passwordRequiredErrorMessage}
            autoComplete="off"
          />
        </div>
        <div className="mt-6">
          <Button type="submit" className="w-full">
            {buttonChild}
          </Button>
        </div>
      </form>
    </div>
  );
}
