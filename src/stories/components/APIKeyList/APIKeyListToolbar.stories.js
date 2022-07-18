import React from 'react';

import APIKeyListToolbar from '../../../components/APIKeyList/APIKeyListToolbar';

export default {
  title: 'Components/APIKeyList/APIKeyListToolbar',
  component: APIKeyListToolbar,
  argTypes: {
    updateConfig: { action: 'updateConfig' },
    onRowClick: { action: 'rowClicked' },
  },
};

function Template(args) {
  return <APIKeyListToolbar {...args} />;
}

export const Primary = Template.bind({});
Primary.args = {
};
