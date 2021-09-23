import React, { useState, } from 'react';

import AutoCompleteCPEFormSection from '../../components/AutoCompleteCPEFormSection';

export default {
    title: 'Components/AutoCompleteCPEFormSection',
    component: AutoCompleteCPEFormSection,
    decorators: [
        (Story) => {
            const [fields, setFields] = useState({});
            return (<Story fields={fields} setFields={setFields} />);
        }
    ],
};

const Template = (args, context) => {
    const { fields, setFields } = context;
    return (<AutoCompleteCPEFormSection {...args} fields={fields} setFields={setFields} />);
}

export const Primary = Template.bind({});
Primary.args = {
};

