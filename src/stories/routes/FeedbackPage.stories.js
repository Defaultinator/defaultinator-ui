import React from 'react';
import FeedbackPage from '../../routes/FeedbackPage';

export default {
  title: 'Pages/FeedbackPage',
  component: FeedbackPage,
};

function Template(args) {
  return <FeedbackPage {...args} />;
}

export const Primary = Template.bind({});
Primary.args = {
};
