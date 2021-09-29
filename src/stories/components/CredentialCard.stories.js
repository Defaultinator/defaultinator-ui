import React from 'react';

import CredentialCard from '../../components/CredentialCard';

import { sampleCredential } from '../../tests/data/credentialData';

export default {
  title: 'Components/CredentialCard',
  component: CredentialCard,
  argTypes: {
    onPrimaryAction: { action: 'onPrimaryAction' },
    onSecondaryAction: { action: 'onSecondaryAction' },
  },
};

const Template = (args) => <CredentialCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  credential: sampleCredential,
  primaryButtonText: "Edit",
  secondaryButtonText: "Delete",
};