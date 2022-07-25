import React from 'react';
import FeedbackPage from './FeedbackPage';

export default {
  title: 'Pages/FeedbackPage',
  component: FeedbackPage,
};

const Template = (args) => <FeedbackPage {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};
