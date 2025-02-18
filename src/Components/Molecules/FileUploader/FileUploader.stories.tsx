import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import FileUploader from '.';
import { FileUploaderProps } from './FileUploaderProps.interface';

export default {
  title: 'Components/Molecules/FileUploader',
  component: FileUploader,
} as Meta;

const Template: StoryFn<FileUploaderProps> = (args) => (
  <FileUploader {...args} />
);

export const DefaultFileUploader = Template.bind({});
DefaultFileUploader.args = {
  label: 'Upload File',
  onFileChange: (files) => {
    if (files) {
      console.log('Selected file:', files[0]);
    } else {
      console.log('No file selected or invalid file');
    }
  },
};

export const FileUploaderWithError = Template.bind({});
FileUploaderWithError.args = {
  label: 'Upload File (Max size: 1MB)',
  acceptedFileTypes: ['image/png', 'image/jpeg'],
  maxFileSize: 1024 * 1024, // 1MB
  onFileChange: (files) => {
    if (files) {
      console.log('Selected file:', files[0]);
    } else {
      console.log('No file selected or invalid file');
    }
  },
};
