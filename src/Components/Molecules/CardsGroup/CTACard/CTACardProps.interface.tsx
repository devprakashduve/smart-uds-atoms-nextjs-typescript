export interface CTACardProps {
  title: string;
  email?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubscribe?: (value: string) => void;
  btnText?: string;
  paraText?: string;
}
