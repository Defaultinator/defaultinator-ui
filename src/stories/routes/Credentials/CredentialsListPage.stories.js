import React from 'react';

import CredentialsListPage from '../../../routes/Credentials/CredentialsListPage';

export default {
  title: 'Pages/Credentials/CredentialsListPage',
  component: CredentialsListPage,
};

const Template = (args) => <CredentialsListPage {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};

