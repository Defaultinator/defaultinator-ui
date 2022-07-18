import React from 'react';
import AboutPage from '../../routes/AboutPage';

export default {
  title: 'Pages/AboutPage',
  component: AboutPage,
};

function Template(args) {
  return <AboutPage {...args} />;
}

export const Primary = Template.bind({});
Primary.args = {
};
