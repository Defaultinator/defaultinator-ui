import React from 'react';

import AdvancedSearchModal from '../../../components/AdvancedSearchModal/AdvancedSearchModal';

export default {
  title: 'Components/AdvancedSearchModal',
  component: AdvancedSearchModal,
};

function Template(args) {
  return <AdvancedSearchModal {...args} />;
}

export const Primary = Template.bind({});
Primary.args = {
};
