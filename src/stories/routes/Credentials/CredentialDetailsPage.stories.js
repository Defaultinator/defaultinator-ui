import React from 'react';
import { MemoryRouter, Route } from "react-router-dom";
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import CredentialDetailsPage from '../../../routes/Credentials/CredentialDetailsPage';

// import { API_URI } from '../../config/constants';

// const credential = { "references": ["http://192-168-1-1-ip.co/manuals/1107.pdf"], "_id": "23452345", "username": "", "password": "public", "protocol": "Unknown", "cpe": { "_id": "234523452345", "part": "a", "product": "11wa_321a", "vendor": "11wave", "version": "ANY", "language": "ANY", "update": "ANY", "edition": "ANY" }, "__v": 0 };
// const credentialId = "12345";

export default {
  title: 'Pages/Credentials/CredentialDetailsPage',
  component: CredentialDetailsPage,
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={[`/60e61b26d4b4c967c38fc3ed`]}>
        <Route path="/:credentialId">
          <Story />
        </Route>
      </MemoryRouter>),
    // (Story) => {
    //   const mock = new MockAdapter(axios);
    //   mock.onGet(`${API_URI}/credentials/${credentialId}`).reply(200, credential);
    //   return (<Story />)
    // }
  ],
};

const Template = (args) => <CredentialDetailsPage {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};