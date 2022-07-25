import React from 'react';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import AddAPIKeyPage from './AddAPIKeyPage';

import { API_URI } from '../../config/constants';

export default {
  title: 'Pages/APIKeyPage/AddAPIKeyPage',
  component: AddAPIKeyPage,
  decorators: [
    (Story) => {
      const mock = new MockAdapter(axios);
      mock.onPost(`${API_URI}/apikeys`).reply(200, { _id: 21 });
      return (<Story />);
    },
  ],
};

const Template = (args) => <AddAPIKeyPage {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};
