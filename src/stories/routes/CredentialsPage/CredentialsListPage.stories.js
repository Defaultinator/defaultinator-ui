import React from 'react';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import CredentialsListPage from '../../../routes/CredentialsPage/CredentialsListPage';

import { API_URI } from '../../../config/constants';
import { sampleCredentials } from '../../../tests/data/credentialData';

export default {
  title: 'Pages/CredentialsPage/CredentialsListPage',
  component: CredentialsListPage,
  decorators: [
    (Story) => {
      // TODO: This isn't mocking the pagination at all, which is probably an issue.
      const mock = new MockAdapter(axios);
      mock.onGet(`${API_URI}/credentials`).reply(200, sampleCredentials);
      return (<Story />);
    },
  ],
};

function Template(args) {
  return <CredentialsListPage {...args} />;
}

export const Primary = Template.bind({});
Primary.args = {
};
