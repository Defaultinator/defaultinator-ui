import React from 'react';
import { MemoryRouter, Route } from "react-router-dom";
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import CredentialDetailsPage from '../../../routes/CredentialsPage/CredentialDetailsPage';

import { API_URI } from '../../../config/constants';
import { sampleCredential } from '../../../tests/data/credentialData';

const credentialId = "5";

export default {
  title: 'Pages/CredentialsPage/CredentialDetailsPage',
  component: CredentialDetailsPage,
  decorators: [
    (Story) => {
      const mock = new MockAdapter(axios);
      mock.onGet(`${API_URI}/credentials/${credentialId}`).reply(200, sampleCredential);
      return (
        <MemoryRouter initialEntries={[`/${credentialId}`]}>
          <Route path="/:credentialId">
            <Story />
          </Route>
        </MemoryRouter>);
    },
  ],
};

const Template = (args) => <CredentialDetailsPage {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};