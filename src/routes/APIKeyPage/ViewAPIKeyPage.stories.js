import React from 'react';
import { MemoryRouter, Route } from 'react-router-dom';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import ViewAPIKeyPage from './ViewAPIKeyPage';

import { API_URI } from '../../config/constants';
import { sampleApiKeys } from '../../tests/data/apiKeyData';

const apiKeyId = 1;

export default {
  title: 'Pages/APIKeyPage/ViewAPIKeyPage',
  component: ViewAPIKeyPage,
  decorators: [
    (Story) => {
      const mock = new MockAdapter(axios);
      mock.onGet(`${API_URI}/apikeys/${apiKeyId}`).reply(200, sampleApiKeys[0]);
      return (
        <MemoryRouter initialEntries={[`/${apiKeyId}`]}>
          <Route path="/:apiKeyId">
            <Story />
          </Route>
        </MemoryRouter>
      );
    },
  ],
};

const Template = (args) => <ViewAPIKeyPage {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};
