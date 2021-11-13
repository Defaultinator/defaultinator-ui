import React from 'react';

import APIKeyForm from '../../../../components/forms/APIKeyForm/APIKeyForm';

export default {
  title: 'Components/forms/APIKeyForm/APIKeyForm',
  component: APIKeyForm,
  argTypes: {
    formAction: { action: 'formAction' },
  },
};

const Template = (args) => <APIKeyForm {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};

