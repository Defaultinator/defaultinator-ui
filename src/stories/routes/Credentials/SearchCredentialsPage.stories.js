import React from 'react';
import { withQuery } from '@storybook/addon-queryparams';

import SearchCredentialsPage from '../../../routes/Credentials/SearchCredentialsPage';

export default {
  title: 'Pages/Credentials/SearchCredentialsPage',
  component: SearchCredentialsPage,
  decorators: [withQuery],
  parameters: {
    query: {
      query: 'cpe:/a:linksys',
    },
  },
};

const Template = (args) => <SearchCredentialsPage {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};