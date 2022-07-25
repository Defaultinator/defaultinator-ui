import React from 'react';

import AdvancedSearchModal from './AdvancedSearchModal';

export default {
  title: 'Components/AdvancedSearchModal',
  component: AdvancedSearchModal,
};

const Template = (args) => <AdvancedSearchModal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};
