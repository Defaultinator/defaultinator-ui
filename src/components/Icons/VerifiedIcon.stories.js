import React from 'react';

import VerifiedIcon from './VerifiedIcon';

export default {
  title: 'Components/Icons/VerifiedIcon',
  component: VerifiedIcon,
};

const Template = (args) => <VerifiedIcon {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  isVerified: false,
};

export const Verified = Template.bind({});
Verified.args = {
  isVerified: true,
};
