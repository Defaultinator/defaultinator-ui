import React from 'react';

import AddCredentialsPage from '../../../routes/Credentials/AddCredentialsPage';

export default {
  title: 'Pages/Credentials/AddCredentialsPage',
  component: AddCredentialsPage,
};

const Template = (args) => <AddCredentialsPage {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};