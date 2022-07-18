import React from 'react';

import App from '../App';

export default {
  title: 'App',
  component: App,
};

function Template(args) {
  return <App {...args} />;
}

export const Primary = Template.bind({});
Primary.args = {
};
