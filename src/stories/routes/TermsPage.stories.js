import React from 'react';
import TermsPage from '../../routes/TermsPage';

export default {
  title: 'Pages/TermsPage',
  component: TermsPage,
};

const Template = (args) => <TermsPage {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};