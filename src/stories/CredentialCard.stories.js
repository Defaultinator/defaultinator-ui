import React from 'react';

import CredentialCard from '../components/CredentialCard';

export default {
  title: 'Components/CredentialCard',
  component: CredentialCard,
  argTypes: {
    onPrimaryAction: { action: 'onPrimaryAction' },
    onSecondaryAction: { action: 'onSecondaryAction' },
  },
};

const credential = { "references": ["http://192-168-1-1-ip.co/manuals/1107.pdf"], "_id": "23452345", "username": "", "password": "public", "protocol": "Unknown", "cpe": { "_id": "234523452345", "part": "a", "product": "11wa_321a", "vendor": "11wave", "version": "ANY", "language": "ANY", "update": "ANY", "edition": "ANY" }, "__v": 0 };
const Template = (args) => <CredentialCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  credential: credential,
  //onPrimaryAction: () => {},
  primaryButtonText: "Edit",
  //onSecondaryAction: () => {},
  secondaryButtonText: "Delete",
};

