import React from 'react';

import AddCredentialsPage from '../../../routes/CredentialsPage/AddCredentialsPage';

export default {
  title: 'Pages/CredentialsPage/AddCredentialsPage',
  component: AddCredentialsPage,
};

function Template(args) {
  return <AddCredentialsPage {...args} />;
}

export const Primary = Template.bind({});
Primary.args = {
};
