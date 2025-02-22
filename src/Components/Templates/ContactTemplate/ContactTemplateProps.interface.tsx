export interface ContactTemplateProps {
  title: string;
  description: string;
  contactInfo: {
    phone: string;
    email: string;
    address: string;
  };
  children: React.ReactNode; // Main content of the contact form or other sections
}
