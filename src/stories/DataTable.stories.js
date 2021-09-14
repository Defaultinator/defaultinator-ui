import React from 'react';

import { DataTable } from './DataTable';
import { sampleCredentials, credentialTableConfig } from '../tests/data/credentialData';

export default {
  title: 'Data Display/DataTable',
  component: DataTable,
};

const Template = (args) => <DataTable {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  data: sampleCredentials,
  dataConfig: credentialTableConfig,
};

