import React from 'react';
import AuthenticatePage from '../../routes/AuthenticatePage';

export default {
  title: 'Pages/AuthenticatePage',
  component: AuthenticatePage,
};

function Template(args) {
  return <AuthenticatePage {...args} />;
}

export const Primary = Template.bind({});
Primary.args = {
};
