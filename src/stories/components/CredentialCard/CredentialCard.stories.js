import React from 'react';

import CredentialCard from '../../../components/CredentialCard/CredentialCard';

import { sampleCredential, sampleVerifiedCredential } from '../../../tests/data/credentialData';

export default {
  title: 'Components/CredentialCard',
  component: CredentialCard,
  argTypes: {
    onPrimaryAction: { action: 'onPrimaryAction' },
    onSecondaryAction: { action: 'onSecondaryAction' },
    onVerify: { action: 'onVerify' }
  },
};

const Template = (args) => <CredentialCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  credential: sampleCredential,
  primaryButtonText: "Edit",
  secondaryButtonText: "Delete",
};

export const Verified = Template.bind({});
Verified.args = {
  credential: sampleVerifiedCredential,
  primaryButtonText: "Edit",
  secondaryButtonText: "Delete",
};

export const IsAdmin = Template.bind({});
IsAdmin.args = {
  credential: sampleVerifiedCredential,
  primaryButtonText: "Edit",
  secondaryButtonText: "Delete",
  isAdmin: true,
};

export const Loading = Template.bind({});
Loading.args = {
  credential: sampleCredential,
  primaryButtonText: "Edit",
  secondaryButtonText: "Delete",
  loading: true,
};