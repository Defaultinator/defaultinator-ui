import React from 'react';

import PartIcon from '../../../components/Icons/PartIcon';

export default {
  title: 'Components/Icons/PartIcon',
  component: PartIcon,
};

const Template = (args) => <PartIcon {...args} />;

export const APart = Template.bind({});
APart.args = {
  part: 'a',
};

export const OPart = Template.bind({});
OPart.args = {
  part: 'o',
};

export const HPart = Template.bind({});
HPart.args = {
  part: 'h',
};

export const UnknownPart = Template.bind({});
UnknownPart.args = {
  part: 'foo',
};
