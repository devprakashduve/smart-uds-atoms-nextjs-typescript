export interface ContactInformationProps {
  title?: string;
  phone?: { phoneLabel: string; phoneNumber: string };
  email: { emailLabel: string; emailAddress: string };
  address?: { addressLabel: string; AddressDetails: string };
}
