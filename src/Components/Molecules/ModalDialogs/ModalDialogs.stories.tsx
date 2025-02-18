import React, { useState, useEffect } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import ModalDialogs from '.';

export default {
  title: 'Components/Molecules/ModalDialogs',
  component: ModalDialogs,
  tags: ['autodocs'],
  args: {
    isOpen: false,
    title: 'Deactivate account',
    message:
      'Are you sure you want to deactivate your account? All of your data will be permanently removed. This action cannot be undone.',
    confirmText: 'Deactivate',
    cancelText: 'Cancel',
  },
} as Meta<typeof ModalDialogs>;

const Template: StoryFn<typeof ModalDialogs> = (args) => {
  const [isOpen, setIsOpen] = useState(args.isOpen);

  useEffect(() => {
    setIsOpen(args.isOpen);
  }, [args.isOpen]);

  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        className="rounded bg-primary-dark px-4 py-2 hover:bg-primary-dark/90"
      >
        Open Modal
      </button>
      <ModalDialogs
        {...args}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onConfirm={() => {
          console.log('Action confirmed');
          setIsOpen(false);
        }}
      />
    </div>
  );
};

export const Default = Template.bind({});

export const WithCustomContent = Template.bind({});
WithCustomContent.args = {
  title: 'Custom Title',
  message:
    'This is a custom message for the modal dialog. You can customize all aspects of this component.',
  confirmText: 'Confirm Action',
  cancelText: 'Abort',
  icon: 'warning',
};
