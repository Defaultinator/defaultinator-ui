import React from 'react';

import AutoCompleteSuggestions from '../../components/AutoCompleteSuggestions';

export default {
  title: 'Components/AutoCompleteSuggestions',
  component: AutoCompleteSuggestions,
};

const suggestions = [
  {
    _id: 'foo',
    count: 9001,
  },
  {
    _id: 'bar',
    count: 9001,
  },
  {
    _id: 'fizz',
    count: 1,
  },
  {
    _id: 'bang',
    count: 909901,
  },
];

function Template(args) {
  return <AutoCompleteSuggestions {...args} />;
}

export const Primary = Template.bind({});
Primary.args = {
  suggestions,
};
