import React from 'react';

import APIKeyCard from '../../components/APIKeyCard';

import { sampleApiKeys } from '../../tests/data/apiKeyData';

const testKey = sampleApiKeys[0];

export default {
  title: 'Components/APIKeyCard',
  component: APIKeyCard,
};

const Template = (args) => <APIKeyCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  apiKey: testKey,
  loading: false,
};

export const Loading = Template.bind({});
Loading.args = {
  loading: true,
};