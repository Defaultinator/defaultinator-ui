import React from 'react';

import CredentialsForm from '../../../components/forms/CredentialsForm';

export default {
  title: 'Components/Forms/CredentialsForm',
  component: CredentialsForm,
  argTypes: {
    formAction: { action: 'formAction' },
  },
};

const Template = (args) => <CredentialsForm {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    //formAction: (e) => console.log(e),
};

