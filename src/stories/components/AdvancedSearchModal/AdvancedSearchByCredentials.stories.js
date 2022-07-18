import React from 'react';

import AdvancedSearchByCredentials from '../../../components/AdvancedSearchModal/AdvancedSearchByCredentials';

export default {
  title: 'Components/AdvancedSearchModal/AdvancedSearchByCredentials',
  component: AdvancedSearchByCredentials,
};

function Template(args) {
  return <AdvancedSearchByCredentials {...args} />;
}

export const Primary = Template.bind({});
Primary.args = {
};
