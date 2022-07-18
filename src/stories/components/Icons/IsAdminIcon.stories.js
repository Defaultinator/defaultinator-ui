import React from 'react';

import IsAdminIcon from '../../../components/Icons/IsAdminIcon';

export default {
  title: 'Components/Icons/IsAdminIcon',
  component: IsAdminIcon,
};

function Template(args) {
  return <IsAdminIcon {...args} />;
}

export const Primary = Template.bind({});
Primary.args = {
};

export const Admin = Template.bind({});
Admin.args = {
  isAdmin: true,
};
