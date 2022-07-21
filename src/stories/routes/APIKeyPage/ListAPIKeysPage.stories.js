import React from 'react';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import ListAPIKeysPage from '../../../routes/APIKeyPage/ListAPIKeysPage';

import { API_URI } from '../../../config/constants';
import { sampleApiKeys } from '../../../tests/data/apiKeyData';

export default {
  title: 'Pages/APIKeyPage/ListAPIKeysPage',
  component: ListAPIKeysPage,
  decorators: [
    (Story) => {
      const mock = new MockAdapter(axios);
      mock.onGet(`${API_URI}/apikeys`).reply(200, { docs: sampleApiKeys });
      return (<Story />);
    },
  ],
};

const Template = (args) => <ListAPIKeysPage {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};
