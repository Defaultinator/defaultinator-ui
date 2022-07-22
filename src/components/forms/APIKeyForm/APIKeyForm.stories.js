import React from 'react';

import APIKeyForm from './APIKeyForm';

export default {
  title: 'Components/forms/APIKeyForm/APIKeyForm',
  component: APIKeyForm,
  argTypes: {
    formAction: { action: 'formAction' },
  },
};

const Template = (args) => <APIKeyForm {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};

export const Loading = Template.bind({});
Loading.args = {
  loading: true,
};
