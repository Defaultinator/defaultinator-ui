import React from 'react';
import { MemoryRouter, Route } from 'react-router-dom';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import EditCredentialsPage from '../../../routes/CredentialsPage/EditCredentialsPage';

import { API_URI } from '../../../config/constants';
import { sampleCredential } from '../../../tests/data/credentialData';

const credentialId = '5';

export default {
  title: 'Pages/CredentialsPage/EditCredentialsPage',
  component: EditCredentialsPage,
  decorators: [
    (Story) => {
      // TODO: Mock more error states somewhere. Here? The test? I don't know.
      const mock = new MockAdapter(axios);
      mock.onGet(`${API_URI}/credentials/${credentialId}`).reply(200, sampleCredential);
      mock.onPut(`${API_URI}/credentials/${credentialId}`).reply(200, 'OK');
      return (
        <MemoryRouter initialEntries={[`/${credentialId}`]}>
          <Route path="/:credentialId">
            <Story />
          </Route>
        </MemoryRouter>
      );
    },
  ],
};

function Template(args) {
  return <EditCredentialsPage {...args} />;
}

export const Primary = Template.bind({});
Primary.args = {
};
