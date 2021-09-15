import React from 'react';
import { MemoryRouter, Route } from "react-router-dom";

import EditCredentialsPage from '../../../routes/Credentials/EditCredentialsPage';

export default {
  title: 'Pages/Credentials/EditCredentialsPage',
  component: EditCredentialsPage,
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={[`/60e61b26d4b4c967c38fc3ed`]}>
        <Route path="/:credentialId">
          <Story />
        </Route>
      </MemoryRouter>),
  ],
};

const Template = (args) => <EditCredentialsPage {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};