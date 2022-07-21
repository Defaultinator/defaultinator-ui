import React from 'react';
import AuthenticatePage from '../../routes/AuthenticatePage';

export default {
  title: 'Pages/AuthenticatePage',
  component: AuthenticatePage,
};

const Template = (args) => <AuthenticatePage {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};
