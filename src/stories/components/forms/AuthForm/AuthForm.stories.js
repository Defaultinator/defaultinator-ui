import React from 'react';

import AuthForm from '../../../../components/forms/AuthForm/AuthForm';

export default {
  title: 'Components/forms/AuthForm/AuthForm',
  component: AuthForm,
  argTypes: {
    formAction: { action: 'formAction' },
  },
};

function Template(args) {
  return <AuthForm {...args} />;
}

export const Primary = Template.bind({});
Primary.args = {
};
