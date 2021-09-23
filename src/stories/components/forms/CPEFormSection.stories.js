import React from 'react';
import {
  useForm,
} from "react-hook-form";

import CPEFormSection from '../../../components/forms/CPEFormSection';

export default {
  title: 'Components/Forms/CPEFormSection',
  component: CPEFormSection,
  argTypes: {
    formAction: { action: 'formAction' },
  },
  decorators: [
    (Story) => {
      const { control } = useForm();
      return (
        <Story control={control} />
      );
    }
  ],
};

const Template = (args, context) => {
  const {control} = context;
  return (<CPEFormSection {...args} control={control} />)
};

export const Primary = Template.bind({});
Primary.args = {
  //formAction: (e) => console.log(e),
};

