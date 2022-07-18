import React from 'react';

import CredentialsForm from '../../../components/forms/CredentialsForm';

export default {
  title: 'Components/forms/CredentialsForm',
  component: CredentialsForm,
  argTypes: {
    formAction: { action: 'formAction' },
  },
};

function Template(args) {
  return <CredentialsForm {...args} />;
}

export const Primary = Template.bind({});
Primary.args = {
};
