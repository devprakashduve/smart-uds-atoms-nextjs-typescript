import { Meta, StoryFn } from '@storybook/react';
import DisplayMap from '.';
import { DisplayMapProps } from './DisplayMap.interface';

export default {
  title: 'Components/DisplayMap',
  component: DisplayMap,
  argTypes: {},
} as Meta;

const Template: StoryFn<DisplayMapProps> = (args) => <DisplayMap {...args} />;

export const Default = Template.bind({});
Default.args = {
  mapSrc:
    'https://maps.google.com/maps?width=100%&height=600&hl=en&q=Delhi,India&ie=UTF8&t=&z=14&iwloc=B&output=embed',
  title: 'Contact Us - Delhi',
  description: 'We are located in the heart of Delhi. Visit us anytime!',
  formHandlerContent: {
    inputFields: [
      {
        id: 'user-name',
        name: 'user-name',
        label: 'Name',
        autoComplete: 'given-name',
        value: '',
        type: 'text',
        showIcon: true,
        placeholder: 'Enter your first name',
        isRequired: true,
        requiredErrorMessage: 'First name is required',
        validationOnFocus: true,
      },
      {
        id: 'email',
        name: 'email',
        label: 'Email',
        autoComplete: 'email',
        value: '',
        type: 'email',
        showIcon: true,
        placeholder: 'Enter your email address',
        isRequired: true,
        requiredErrorMessage: 'Email is required',
        validationOnFocus: true,
      },
      {
        id: 'phone',
        name: 'phone',
        label: 'Phone',
        autoComplete: 'phone',
        value: '',
        type: 'phone',
        showIcon: true,
        placeholder: 'Enter your phone number',
        isRequired: true,
        requiredErrorMessage: 'Phone number is required',
        validationOnFocus: true,
      },
    ],
    textAreaFields: [
      {
        id: 'message',
        name: 'message',
        value: '',
        placeholder: 'Your message',
        charCountWarningThreshold: 10,
        maxLength: 100,
        showCharCount: true,
        label: 'Message',
        isRequired: true,
        requiredErrorMessage: 'Message is required',
        validationOnFocus: true,
      },
    ],
    btnText: 'Submit',
    onSubmit: (data) => console.log('Submitted Data:', data),
    className: 'gap-8',
  },
  footerText: 'We will get back to you as soon as possible.',
};
