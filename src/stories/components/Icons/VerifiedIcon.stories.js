import React from 'react';

import VerifiedIcon from '../../../components/Icons/VerifiedIcon';

export default {
  title: 'Components/Icons/VerifiedIcon',
  component: VerifiedIcon,
};

function Template(args) {
  return <VerifiedIcon {...args} />;
}

export const Primary = Template.bind({});
Primary.args = {
  isVerified: false,
};

export const Verified = Template.bind({});
Verified.args = {
  isVerified: true,
};
