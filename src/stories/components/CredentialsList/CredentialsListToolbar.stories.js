import React from 'react';

import CredentialsListToolbar from '../../../components/CredentialsList/CredentialsListToolbar';

import { sampleCredential } from '../../../tests/data/credentialData';

export default {
  title: 'Components/CredentialsList/CredentialsListToolbar',
  component: CredentialsListToolbar,
};

const Template = (args) => <CredentialsListToolbar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};