import React from 'react';

import TabLayout from '../../sharedcomponents/TabLayout';

export default {
  title: 'Shared Components/TabLayout',
  component: TabLayout,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => <TabLayout {...args} />;

export const Default = Template.bind({});
Default.args = {
  tabs: [
    { tabText: 'Tab one', tabContent: <div>Tab one content</div> },
    { tabText: 'Tab two', tabContent: <div>Tab two content</div> },
    { tabText: 'Tab three', tabContent: <div>Tab three content</div> },
  ],
};
