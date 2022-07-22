import React from 'react';

import APIKeyList from './APIKeyList';
import { APIKEY_TABLE_CONFIG } from '../../config/tables';
import { sampleApiKeys } from '../../tests/data/apiKeyData';

export default {
  title: 'Components/APIKeyList/APIKeyList',
  component: APIKeyList,
};

const Template = (args) => <APIKeyList {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  data: sampleApiKeys,
  dataConfig: APIKEY_TABLE_CONFIG,
  totalRows: sampleApiKeys.length,
};

export const Dense = Template.bind({});
Dense.args = {
  data: sampleApiKeys,
  dataConfig: APIKEY_TABLE_CONFIG,
  totalRows: sampleApiKeys.length,
  dense: true,
};

export const Loading = Template.bind({});
Loading.args = {
  data: sampleApiKeys,
  dataConfig: APIKEY_TABLE_CONFIG,
  totalRows: sampleApiKeys.length,
  loading: true,
};

export const LoadingInitial = Template.bind({});
LoadingInitial.args = {
  dataConfig: APIKEY_TABLE_CONFIG,
  loading: true,
};

export const Error = Template.bind({});
Error.args = {
  dataConfig: APIKEY_TABLE_CONFIG,
  error: true,
};
