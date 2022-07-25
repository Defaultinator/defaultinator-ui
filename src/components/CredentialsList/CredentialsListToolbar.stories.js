import React from 'react';

import CredentialsListToolbar from './CredentialsListToolbar';

export default {
  title: 'Components/CredentialsList/CredentialsListToolbar',
  component: CredentialsListToolbar,
};

const Template = (args) => <CredentialsListToolbar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};
