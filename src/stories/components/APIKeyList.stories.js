import React from 'react';

import APIKeyList from '../../components/APIKeyList';

import { sampleApiKeys } from '../../tests/data/apiKeyData';

export default {
  title: 'Components/APIKeyList',
  component: APIKeyList,
};

const Template = (args) => <APIKeyList {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    keys: sampleApiKeys,
};