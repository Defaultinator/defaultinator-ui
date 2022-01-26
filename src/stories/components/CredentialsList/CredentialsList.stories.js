import React from 'react';

import CredentialsList from '../../../components/CredentialsList/CredentialsList';
import { CREDENTIALS_TABLE_CONFIG } from '../../../config/tables';
import { sampleTableData } from '../../../tests/data/credentialData';

export default {
  title: 'Components/CredentialsList/CredentialsList',
  component: CredentialsList,
  argTypes: {
    updateConfig: { action: 'updateConfig' },
    onRowClick: { action: 'rowClicked' },
  },
};

const Default = (args) => <CredentialsList {...args} />;

export const Primary = Default.bind({});
Primary.args = {
  data: sampleTableData.slice(0, 5),
  dataConfig: CREDENTIALS_TABLE_CONFIG,
  totalRows: sampleTableData.length,
};

export const Dense = Default.bind({});
Dense.args = {
  data: sampleTableData.slice(0, 5),
  dataConfig: CREDENTIALS_TABLE_CONFIG,
  totalRows: sampleTableData.length,
  dense: true,
};

export const Loading = Default.bind({});
Loading.args = {
  data: sampleTableData.slice(0, 5),
  dataConfig: CREDENTIALS_TABLE_CONFIG,
  totalRows: sampleTableData.length,
  loading: true,
};

export const LoadingInitial = Default.bind({});
LoadingInitial.args = {
  dataConfig: CREDENTIALS_TABLE_CONFIG,
  loading: true,
};

export const Error = Default.bind({});
Error.args = {
  dataConfig: CREDENTIALS_TABLE_CONFIG,
  error: true,
};