import React from 'react';

import AdvancedSearchByCredentials from '../../../components/AdvancedSearchModal/AdvancedSearchByCredentials';

export default {
  title: 'Components/AdvancedSearchModal/AdvancedSearchByCredentials',
  component: AdvancedSearchByCredentials,
};

const Template = (args) => <AdvancedSearchByCredentials {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};
