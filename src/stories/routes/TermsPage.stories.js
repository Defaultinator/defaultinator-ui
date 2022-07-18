import React from 'react';
import TermsPage from '../../routes/TermsPage';

export default {
  title: 'Pages/TermsPage',
  component: TermsPage,
};

function Template(args) {
  return <TermsPage {...args} />;
}

export const Primary = Template.bind({});
Primary.args = {
};
