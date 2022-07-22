import React from 'react';

import AddCredentialsPage from './AddCredentialsPage';

export default {
  title: 'Pages/CredentialsPage/AddCredentialsPage',
  component: AddCredentialsPage,
};

const Template = (args) => <AddCredentialsPage {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};
