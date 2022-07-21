import React from 'react';

import CredentialCard from '../../../components/CredentialCard/CredentialCard';

import { sampleCredential, sampleVerifiedCredential } from '../../../tests/data/credentialData';

export default {
  title: 'Components/CredentialCard',
  component: CredentialCard,
  argTypes: {
    onPrimaryAction: { action: 'onPrimaryAction' },
    onSecondaryAction: { action: 'onSecondaryAction' },
    onVerify: { action: 'onVerify' },
  },
};

const Template = (args) => <CredentialCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  credential: sampleCredential,
};

export const Verified = Template.bind({});
Verified.args = {
  credential: sampleVerifiedCredential,
};

export const IsAdmin = Template.bind({});
IsAdmin.args = {
  credential: sampleCredential,
  isAdmin: true,
};

export const Loading = Template.bind({});
Loading.args = {
  credential: sampleCredential,
  loading: true,
};
