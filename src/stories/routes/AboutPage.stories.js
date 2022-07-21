import React from 'react';
import AboutPage from '../../routes/AboutPage';

export default {
  title: 'Pages/AboutPage',
  component: AboutPage,
};

const Template = (args) => <AboutPage {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};
