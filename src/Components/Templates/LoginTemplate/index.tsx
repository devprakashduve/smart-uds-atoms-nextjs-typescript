import { useState } from 'react';
import Input from '@/Components/Atoms/InputGroup/Input';
import Button from '@/Components/Atoms/Button';
import { LoginTemplateProps } from './LoginTemplate.interface';

export default function LoginTemplate({
  email: initialEmail,
  password: initialPassword,
  onSubmit,
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
            id="email"
            name="email"
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            isRequired={true}
            requiredErrorMessage="Email is required"
            autoComplete="off"
          />
        </div>
        <div className="mb-4">
          <Input
            id="password"
            name="password"
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            isRequired={true}
            requiredErrorMessage="Password is required!!"
            autoComplete="off"
          />
        </div>
        <div className="mt-6">
          <Button type="submit" className="w-full">
            Login
          </Button>
        </div>
      </form>
    </div>
  );
}
