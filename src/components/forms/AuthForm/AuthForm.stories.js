import React from 'react';

import AuthForm from './AuthForm';

export default {
  title: 'Components/forms/AuthForm/AuthForm',
  component: AuthForm,
  argTypes: {
    formAction: { action: 'formAction' },
  },
};

const Template = (args) => <AuthForm {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};
