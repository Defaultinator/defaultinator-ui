import React from 'react';
import { withQuery } from '@storybook/addon-queryparams';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import SearchCredentialsPage from '../../../routes/Credentials/SearchCredentialsPage';

import { API_URI } from '../../../config/constants';
import { sampleSearchLinksys } from '../../../tests/data/credentialData';

export default {
  title: 'Pages/Credentials/SearchCredentialsPage',
  component: SearchCredentialsPage,
  decorators: [
    withQuery,
    (Story) => {
      // TODO: Mock more error states somewhere. Here? The test? I don't know.
      // TODO: This mock isn't working as expected in the story.
      const mock = new MockAdapter(axios);
      mock.onGet(`${API_URI}/credentials/search?vendor=linksys`).reply(200, sampleSearchLinksys);
      return (<Story />);
    },
  ],
  parameters: {
    query: {
      vendor: 'linksys',
    },
  },
};

const Template = (args) => <SearchCredentialsPage {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};