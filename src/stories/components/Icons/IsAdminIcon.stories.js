import React from 'react';

import IsAdminIcon from '../../../components/Icons/IsAdminIcon';

export default {
  title: 'Components/Icons/IsAdminIcon',
  component: IsAdminIcon,
};

const Template = (args) => <IsAdminIcon {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};

export const Admin = Template.bind({});
Admin.args = {
  isAdmin: true,
};