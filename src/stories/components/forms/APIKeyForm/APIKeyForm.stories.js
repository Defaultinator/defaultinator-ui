import React from 'react';

import APIKeyForm from '../../../../components/forms/APIKeyForm/APIKeyForm';

export default {
  title: 'Components/forms/APIKeyForm/APIKeyForm',
  component: APIKeyForm,
  argTypes: {
    formAction: { action: 'formAction' },
  },
};

function Template(args) {
  return <APIKeyForm {...args} />;
}

export const Primary = Template.bind({});
Primary.args = {
};

export const Loading = Template.bind({});
Loading.args = {
  loading: true,
};
