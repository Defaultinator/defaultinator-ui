import React from 'react';

import CredentialsForm from './CredentialsForm';

export default {
  title: 'Components/forms/CredentialsForm',
  component: CredentialsForm,
  argTypes: {
    formAction: { action: 'formAction' },
  },
};

const Template = (args) => <CredentialsForm {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};
